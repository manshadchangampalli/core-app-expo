import React from "react";
import { View, Image, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

interface BannerItem {
    id: string;
    image?: any;
    backgroundColor?: string;
    title?: string;
}

interface BannerSliderProps {
    banners: BannerItem[];
    height?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export default function BannerSlider({
    banners,
    height = 200,
    autoPlay = true,
    autoPlayInterval = 3000,
}: BannerSliderProps) {
    if (banners.length === 0) {
        return null;
    }

    const renderItem = ({ item }: { item: BannerItem }) => (
        <View
            className="mx-4 rounded-xl overflow-hidden"
            style={{
                backgroundColor: item.backgroundColor || "transparent",
                height: height,
            }}
        >
            {item.image ? (
                <Image
                    source={item.image}
                    className="w-full h-full"
                    resizeMode="cover"
                />
            ) : (
                <View
                    className="w-full h-full"
                    style={{ backgroundColor: item.backgroundColor }}
                />
            )}
        </View>
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
                    parallaxAdjacentItemScale: 0.8,
                }}
                data={banners}
                scrollAnimationDuration={1000}
                autoPlayInterval={autoPlayInterval}
                renderItem={renderItem}
            />
        </View>
    );
}
