import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GlassIconButton, QtyButton } from "../../common";

interface CartItemCardProps {
    title: string;
    description: string;
    price: number;
    image: string;
    qty: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    onDelete?: () => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
    title,
    description,
    price,
    image,
    qty,
    onIncrement,
    onDecrement,
    onDelete,
}) => {
    return (
        <View className="flex-row p-3 mx-4 bg-white rounded-3xl shadow-sm border border-gray-100 ">
            {/* Image Section */}
            <Image
                source={{ uri: image }}
                className="w-[100px] h-[100px] rounded-2xl bg-gray-200"
                resizeMode="cover"
            />

            {/* Content Section */}
            <View className="flex-1 ml-3 justify-between">
                <View>
                    <View className="flex-row justify-between gap-2 items-start">
                        <View className="flex-1">
                            <Text className="text-base font-bold text-gray-900 flex-1 mr-2" numberOfLines={1}>
                                {title}
                            </Text>
                            <Text className="text-xs text-gray-500 mt-1 truncate" numberOfLines={2}>
                                {description}
                            </Text>
                        </View>
                        <GlassIconButton>
                            <Ionicons name="trash-outline" size={18} color="#94A3B8" />
                        </GlassIconButton>
                    </View>
                </View>

                <View className="flex-row justify-between items-end">
                    <Text className="text-lg font-extrabold text-gray-900">
                        AED {price}
                    </Text>
                    <QtyButton
                        qty={qty}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                </View>
            </View>
        </View>
    );
};

export default CartItemCard;
