import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
    runOnJS,
    interpolate,
    Extrapolate,
    withRepeat,
    withSequence,
    withTiming,
    Easing,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import GlassIconButton from '../GlassIconButton/GlassIconButton';

const BUTTON_HEIGHT = 60;
const BUTTON_PADDING = 8;
const INITIAL_WIDTH = BUTTON_HEIGHT - BUTTON_PADDING * 2;

interface SlideButtonProps {
    text?: string;
    onComplete?: () => void;
}

const SlideButton: React.FC<SlideButtonProps> = ({ text = "Slide to Checkout", onComplete }) => {
    const translateX = useSharedValue(0);
    const context = useSharedValue({ x: 0 });
    const arrowTranslateX = useSharedValue(0);
    const [containerWidth, setContainerWidth] = React.useState(0);
    const [isCompleted, setIsCompleted] = React.useState(false);

    const SWIPE_THRESHOLD = containerWidth - INITIAL_WIDTH - BUTTON_PADDING * 2 - 10;

    useEffect(() => {
        arrowTranslateX.value = withRepeat(
            withSequence(
                withTiming(4, { duration: 600, easing: Easing.inOut(Easing.ease) }),
                withTiming(-4, { duration: 600, easing: Easing.inOut(Easing.ease) })
            ),
            -1,
            true
        );
    }, []);

    const gesture = Gesture.Pan()
        .onStart(() => {
            if (isCompleted) return;
            context.value = { x: translateX.value };
        })
        .onUpdate((event) => {
            if (isCompleted) return;
            const newValue = context.value.x + event.translationX;
            translateX.value = Math.min(Math.max(newValue, 0), SWIPE_THRESHOLD);
        })
        .onEnd(() => {
            if (isCompleted) return;
            if (translateX.value > SWIPE_THRESHOLD - 20) {
                // Snap to end then go back
                translateX.value = withSpring(SWIPE_THRESHOLD, { overshootClamping: true }, () => {
                    translateX.value = withSpring(0);
                });

                if (onComplete) {
                    runOnJS(onComplete)();
                }
            } else {
                translateX.value = withSpring(0);
            }
        });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const arrowAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: arrowTranslateX.value }],
        };
    });

    const textStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            translateX.value,
            [0, SWIPE_THRESHOLD / 2],
            [1, 0],
            Extrapolate.CLAMP
        );
        return {
            opacity,
        };
    });

    return (
        <View
            className="bg-[#0F172A] rounded-full justify-center overflow-hidden relative border border-gray-800"
            style={{ height: BUTTON_HEIGHT }}
            onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        >
            <Animated.View style={[textStyle, { position: 'absolute', width: '100%', alignItems: 'center' }]}>
                <Text className="text-white font-bold text-lg">{text}</Text>
            </Animated.View>

            {/* Hint Arrow on the right when idle */}
            <Animated.View style={[textStyle, { position: 'absolute', right: 20 }]}>
                <Ionicons name="chevron-forward" size={24} color="rgba(255,255,255,0.3)" />
            </Animated.View>

            <GestureDetector gesture={gesture}>
                <Animated.View
                    style={[
                        animatedStyle,
                        {
                            width: INITIAL_WIDTH,
                            height: INITIAL_WIDTH,
                            position: 'absolute',
                            left: BUTTON_PADDING,
                            borderRadius: 999,
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 10,
                        },
                    ]}
                >
                    <GlassIconButton>
                        <Animated.View style={[arrowAnimatedStyle]}>
                            <Ionicons name="arrow-forward" size={24} color="#ffffff" />
                        </Animated.View>
                    </GlassIconButton>
                </Animated.View>
            </GestureDetector>
        </View>
    );
};

export default SlideButton;
