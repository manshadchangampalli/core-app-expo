import React from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width: screenWidth } = Dimensions.get("window");

interface ProductItem {
    id: string;
    title: string;
    price: string;
    image?: string;
    backgroundColor: string;
}

interface ProductCarouselProps {
    products?: ProductItem[];
    height?: number;
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

const defaultProducts: ProductItem[] = [
    {
        id: "1",
        title: "Premium Headphones",
        price: "$299",
        backgroundColor: "#FF6B6B",
    },
    {
        id: "2",
        title: "Smart Watch",
        price: "$399",
        backgroundColor: "#4ECDC4",
    },
    {
        id: "3",
        title: "Wireless Earbuds",
        price: "$199",
        backgroundColor: "#45B7D1",
    },
    {
        id: "4",
        title: "Laptop Stand",
        price: "$79",
        backgroundColor: "#FFA07A",
    },
    {
        id: "5",
        title: "USB-C Hub",
        price: "$49",
        backgroundColor: "#98D8C8",
    },
];

export const ProductCarousel: React.FC<ProductCarouselProps> = ({
    products = defaultProducts,
    height = 250,
    autoPlay = true,
    autoPlayInterval = 3000,
}) => {
    const renderItem = ({ item }: { item: ProductItem }) => (
        <View
            className="mx-2 rounded-2xl overflow-hidden shadow-lg"
            style={{
                backgroundColor: item.backgroundColor,
                height: height,
            }}
        >
            <View className="flex-1 justify-center items-center p-6">
                {item.image ? (
                    <Image
                        source={{ uri: item.image }}
                        className="w-32 h-32 mb-4 rounded-xl"
                        resizeMode="cover"
                    />
                ) : (
                    <View className="w-32 h-32 mb-4 bg-white/20 rounded-xl items-center justify-center">
                        <Text className="text-white text-4xl">📦</Text>
                    </View>
                )}
                <Text className="text-white text-2xl font-bold text-center mb-2">
                    {item.title}
                </Text>
                <Text className="text-white text-xl font-semibold">
                    {item.price}
                </Text>
            </View>
        </View>
    );

    return (
        <View className="my-4">
            <Text className="text-xl font-bold px-4 mb-3 text-gray-800">
                Featured Products
            </Text>
            <Carousel
                loop
                width={screenWidth - 32}
                height={height}
                autoPlay={autoPlay}
                data={products}
                scrollAnimationDuration={1000}
                autoPlayInterval={autoPlayInterval}
                renderItem={renderItem}
                style={{ width: screenWidth }}
            />
        </View>
    );
};
