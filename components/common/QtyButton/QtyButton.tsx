import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface QtyButtonProps {
    qty: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const QtyButton: React.FC<QtyButtonProps> = React.memo(({
    qty,
    onIncrement,
    onDecrement,
}) => {
    return (
        <View className="flex-row items-center bg-[#0F172A] rounded-xl overflow-hidden h-9">
            <TouchableOpacity
                onPress={onDecrement}
                className="px-3 h-full items-center justify-center active:bg-gray-700"
            >
                <Ionicons name="remove" size={20} color="white" />
            </TouchableOpacity>

            <View className="w-6 items-center justify-center">
                <Text className="text-white font-bold text-base">{qty}</Text>
            </View>

            <TouchableOpacity
                onPress={onIncrement}
                className="px-3 h-full items-center justify-center active:bg-gray-700"
            >
                <Ionicons name="add" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
});

export default QtyButton;
