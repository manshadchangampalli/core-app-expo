import React from "react";
import { View, Text, Image, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FoodType } from "../FoodTypeIndicator/config";
import FoodTypeIndicator from "../FoodTypeIndicator/FoodTypeIndicator";
import { LiquidGlassView } from "@callstack/liquid-glass";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

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
    hideFavBtn?: boolean;
    onPress?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    price,
    originalPrice,
    rating,
    image,
    foodType,
    isBestseller,
    isCustomizable,
    isFavorite,
    onAdd,
    onToggleFavorite,
    hideFavBtn,
    onPress
}) => {
    const [qty, setQty] = React.useState(0);

    const handleAdd = () => {
        setQty(1);
        onAdd?.();
    };

    const handleIncrement = () => {
        setQty(prev => prev + 1);
    };

    const handleDecrement = () => {
        setQty(prev => {
            const newQty = prev - 1;
            return newQty < 0 ? 0 : newQty;
        });
    };

    return (
        <Pressable onPress={onPress} className="flex-row p-3 bg-white rounded-3xl shadow-sm border border-gray-100 w-full">
            {/* Left Column: Image & Badges */}
            <View className="relative">
                {image && (
                    <Image
                        source={{ uri: image }}
                        className="w-[130px] h-[130px] rounded-2xl bg-gray-200"
                        resizeMode="cover"
                    />
                )}

                {/* Bestseller Badge */}
                {/* Bestseller Badge */}
                {isBestseller && (
                    <View className="absolute top-0 left-0 bg-bestseller px-2 py-1 rounded-tl-2xl rounded-br-xl z-10">
                        <Text className="text-[10px] font-extrabold text-black">
                            BESTSELLER
                        </Text>
                    </View>
                )}

                {!hideFavBtn && (
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
                                color="white"
                            />
                        </LiquidGlassView>
                    </Pressable>
                )}
            </View>

            {/* Right Column: Content */}
            <View className="flex-1 ml-3 justify-between py-1">
                {/* Top Row: Tags */}
                <View className="flex-row justify-between items-start">
                    <View className="flex-row items-center gap-2">
                        {foodType && <FoodTypeIndicator type={foodType} />}
                        {isCustomizable && (
                            <View className="bg-gray-100 px-2 py-0.5 rounded-md">
                                <Text className="text-[10px] font-medium text-gray-600">
                                    Customizable
                                </Text>
                            </View>
                        )}
                    </View>

                    {/* Rating */}
                    {rating && (
                        <View className="flex-row items-center bg-orange-50 px-1.5 py-0.5 rounded-md gap-0.5">
                            <Ionicons name="star" size={10} color="#F97316" />
                            <Text className="text-[10px] font-bold text-primary">
                                {rating}
                            </Text>
                        </View>
                    )}
                </View>

                {/* Title & Description */}
                <View className="mt-1">
                    {title && (
                        <Text className="text-base font-bold text-gray-900 leading-tight mb-1" numberOfLines={1}>
                            {title}
                        </Text>
                    )}
                    {description && (
                        <Text className="text-xs text-gray-500 leading-4" numberOfLines={2}>
                            {description}
                        </Text>
                    )}
                </View>

                {/* Price & Add Button */}
                <View className="flex-row justify-between items-end mt-2">
                    <View>
                        {originalPrice && (
                            <Text className="text-xs text-gray-400 line-through font-medium">
                                AED {originalPrice}
                            </Text>
                        )}
                        {price !== undefined && (
                            <Text className="text-lg font-extrabold text-gray-900">
                                AED {price}
                            </Text>
                        )}
                    </View>

                    <AddToCartButton
                        qty={qty}
                        onAdd={handleAdd}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                </View>
            </View>
        </Pressable>
    );
};

export default ProductCard;
