import React, { useState } from "react";
import { View, Image, Dimensions, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { HeroBannerConfig, heroBannerConfig } from "./offers-banner.config";

const { width: screenWidth } = Dimensions.get("window");

interface BannerSliderProps {
    banners?: HeroBannerConfig[];
    height?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    onBannerPress?: (banner: HeroBannerConfig) => void;
}

export default function BannerSlider({
    banners = heroBannerConfig,
    height = 220,
    autoPlay = true,
    autoPlayInterval = 4000,
    onBannerPress,
}: BannerSliderProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (banners.length === 0) {
        return null;
    }

    const renderItem = ({ item }: { item: HeroBannerConfig }) => (
        <Pressable
            onPress={() => onBannerPress?.(item)}
            className="mx-4 rounded-2xl overflow-hidden"
            style={{ height }}
        >
            {/* Background Image */}
            <Image
                source={{ uri: item.image }}
                className="absolute w-full h-full"
                resizeMode="cover"
            />

            {/* Dark Overlay - Left Side Only */}
            <View
                className="absolute w-full left-0 top-0 bottom-0"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            />

            {/* Content - Left Side */}
            <View className="flex-1 justify-between p-4">
                <View className="flex-1 justify-end" style={{ width: "55%" }}>
                    {/* Badge - Yellow/Amber */}
                    <View className="self-start bg-[#FBBF24] px-3 py-1.5 rounded-full mb-2">
                        <Text className="text-[10px] font-black text-black uppercase tracking-wide">
                            {item.badge}
                        </Text>
                    </View>

                    {/* Discount - Large White */}
                    <Text className="text-4xl font-black text-white mb-1 leading-tight">
                        {item.discount}
                    </Text>

                    {/* Title - Yellow/Bold */}
                    <Text className="text-xl font-bold text-[#FBBF24] mb-2 leading-tight">
                        {item.title}
                    </Text>

                    {/* Description - White */}
                    <Text className="text-base text-white/90 leading-4 mb-3" numberOfLines={2}>
                        {item.description}
                    </Text>

                    {/* Claim Offer Button - White */}
                    <Pressable
                        onPress={() => onBannerPress?.(item)}
                        className="bg-white px-4 py-2.5 rounded-xl flex-row items-center justify-center self-start shadow-lg"
                    >
                        <Text className="text-sm font-bold text-black mr-1">
                            Claim Offer
                        </Text>
                        <Ionicons name="chevron-forward" size={16} color="#000000" />
                    </Pressable>
                </View>
            </View>
        </Pressable>
    );

    return (
        <View className="mt-2" style={{ height }}>
            <Carousel
                loop
                width={screenWidth}
                height={height}
                autoPlay={autoPlay}
                mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 1,
                    parallaxScrollingOffset: 60,
                    parallaxAdjacentItemScale: 0.80,
                }}
                data={banners}
                scrollAnimationDuration={800}
                autoPlayInterval={autoPlayInterval}
                renderItem={renderItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />

            {/* Pagination Dots */}
            {banners.length > 1 && (
                <View className="flex-row justify-center items-center mt-3 gap-1.5">
                    {banners.map((_, index) => (
                        <View
                            key={index}
                            className={`rounded-full ${index === activeIndex
                                ? "bg-orange-500 w-2 h-2"
                                : "bg-gray-300 w-1.5 h-1.5"
                                }`}
                        />
                    ))}
                </View>
            )}
        </View>
    );
}
