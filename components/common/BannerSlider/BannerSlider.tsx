import React, { useState, useRef } from "react";
import { View, ScrollView, Image, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from "react-native";

interface BannerItem {
    id: string;
    image?: any; // Image source (require() or URI)
    backgroundColor?: string; // Background color if no image
    title?: string;
}

interface BannerSliderProps {
    banners: BannerItem[];
    height?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const HORIZONTAL_PADDING = 14; // px-4 = 16px on each side
const ITEM_WIDTH = SCREEN_WIDTH - (HORIZONTAL_PADDING * 2);

export default function BannerSlider({ banners, height = 200, autoPlay = true, autoPlayInterval = 3000 }: BannerSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / ITEM_WIDTH);
        setActiveIndex(index);
    };

    React.useEffect(() => {
        if (!autoPlay || banners.length <= 1) return;

        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % banners.length;
            scrollViewRef.current?.scrollTo({
                x: nextIndex * ITEM_WIDTH,
                animated: true,
            });
            setActiveIndex(nextIndex);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [activeIndex, autoPlay, autoPlayInterval, banners.length]);

    if (banners.length === 0) {
        return null;
    }

    return (
        <View
            className="relative px-4"
            style={{ height }}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                className="w-full">
                {banners.map((banner, index) => (
                    <View
                        key={banner.id}
                        style={{
                            width: ITEM_WIDTH,
                            backgroundColor: banner.backgroundColor || 'transparent'
                        }}
                        className="h-full items-center justify-center">
                        {banner.image ? (
                            <Image
                                source={banner.image}
                                className="w-full h-full"
                                resizeMode="cover"
                            />
                        ) : (
                            <View className="w-full h-full" style={{ backgroundColor: banner.backgroundColor }} />
                        )}
                    </View>
                ))}
            </ScrollView>

            {/* Pagination Dots */}
            {banners.length > 1 && (
                <View className="absolute bottom-4 left-0 right-0 flex-row justify-center items-center">
                    {banners.map((_, index) => (
                        <View
                            key={index}
                            className={`mx-1 rounded-full ${index === activeIndex ? "bg-white w-2 h-2" : "bg-white/50 w-1.5 h-1.5"}`}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}
