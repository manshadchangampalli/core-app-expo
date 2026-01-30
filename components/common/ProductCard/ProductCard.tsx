import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FoodType } from "../FoodTypeIndicator/config";
import FoodTypeIndicator from "../FoodTypeIndicator/FoodTypeIndicator";
import { LiquidGlassView } from "@callstack/liquid-glass";

interface ProductCardProps {
    title?: string;
    description?: string;
    price?: number;
    originalPrice?: number;
    rating?: number;
    image?: string;
    foodType?: FoodType;
    isBestseller?: boolean;
    isCustomizable?: boolean;
    isFavorite?: boolean;
    onAdd?: () => void;
    onToggleFavorite?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title = "Premium Pasta Combo",
    description = "Delicious pasta with creamy sauce, garlic bread, and a refreshing drink.",
    price = 120,
    originalPrice = 180,
    rating = 4.5,
    image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", // Placeholder
    foodType = FoodType.VEG,
    isBestseller = true,
    isCustomizable = true,
    isFavorite = false,
    onAdd,
    onToggleFavorite,
}) => {
    return (
        <View className="flex-row p-3 bg-white rounded-3xl shadow-sm border border-gray-100 w-full">
            {/* Left Column: Image & Badges */}
            <View className="relative">
                <Image
                    source={{ uri: image }}
                    className="w-[130px] h-[130px] rounded-2xl bg-gray-200"
                    resizeMode="cover"
                />

                {/* Bestseller Badge */}
                {isBestseller && (
                    <View className="absolute top-0 left-0 bg-[#FFD700] px-2 py-1 rounded-tl-2xl rounded-br-xl z-10">
                        <Text className="text-[10px] font-extrabold text-black">
                            BESTSELLER
                        </Text>
                    </View>
                )}

                {/* Favorite Button */}
                <Pressable style={{
                    position: 'absolute',
                    right: 4,
                    top: 4,
                }} onPress={onToggleFavorite}>
                    <LiquidGlassView
                        interactive
                        style={{
                            borderRadius: 999,
                            padding: 8,
                        }}
                        effect="clear"
                    >
                        <Ionicons
                            name={isFavorite ? "heart" : "heart-outline"}
                            size={20}
                            color="black"
                        />
                    </LiquidGlassView>
                </Pressable>
            </View>

            {/* Right Column: Content */}
            <View className="flex-1 ml-3 justify-between py-1">
                {/* Top Row: Tags */}
                <View className="flex-row justify-between items-start">
                    <View className="flex-row items-center gap-2">
                        <FoodTypeIndicator type={foodType} />
                        {isCustomizable && (
                            <View className="bg-gray-100 px-2 py-0.5 rounded-md">
                                <Text className="text-[10px] font-medium text-gray-600">
                                    Customizable
                                </Text>
                            </View>
                        )}
                    </View>

                    {/* Rating */}
                    <View className="flex-row items-center bg-orange-50 px-1.5 py-0.5 rounded-md gap-0.5">
                        <Ionicons name="star" size={10} color="#F97316" />
                        <Text className="text-[10px] font-bold text-orange-500">
                            {rating}
                        </Text>
                    </View>
                </View>

                {/* Title & Description */}
                <View className="mt-1">
                    <Text className="text-base font-bold text-gray-900 leading-tight mb-1" numberOfLines={1}>
                        {title}
                    </Text>
                    <Text className="text-xs text-gray-500 leading-4" numberOfLines={2}>
                        {description}
                    </Text>
                </View>

                {/* Price & Add Button */}
                <View className="flex-row justify-between items-end mt-2">
                    <View>
                        {originalPrice && (
                            <Text className="text-xs text-gray-400 line-through font-medium">
                                AED {originalPrice}
                            </Text>
                        )}
                        <Text className="text-lg font-extrabold text-gray-900">
                            AED {price}
                        </Text>
                    </View>

                    <TouchableOpacity
                        onPress={onAdd}
                        className="bg-[#0F172A] px-6 py-2 rounded-xl"
                    >
                        <Text className="text-white font-bold text-sm">Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default ProductCard;
