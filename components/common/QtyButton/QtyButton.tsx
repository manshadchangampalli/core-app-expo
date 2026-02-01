import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface QtyButtonProps {
    qty: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
    backgroundColor?: string;
    textColor?: string;
    height?: number;
    buttonPaddingX?: string;
}

const QtyButton: React.FC<QtyButtonProps> = React.memo(({
    qty,
    onIncrement,
    onDecrement,
    backgroundColor = "#0F172A",
    textColor = "white",
    height = 36, // h-9 equivalent
    buttonPaddingX = "px-3",
}) => {
    return (
        <View
            className="flex-row items-center rounded-xl overflow-hidden"
            style={{ backgroundColor, height }}
        >
            <TouchableOpacity
                onPress={onDecrement}
                className={`${buttonPaddingX} h-full items-center justify-center active:bg-black/10`}
            >
                <Ionicons name="remove" size={20} color={textColor} />
            </TouchableOpacity>

            <View className="w-6 items-center justify-center">
                <Text className="font-bold text-base" style={{ color: textColor }}>{qty}</Text>
            </View>

            <TouchableOpacity
                onPress={onIncrement}
                className={`${buttonPaddingX} h-full items-center justify-center active:bg-black/10`}
            >
                <Ionicons name="add" size={20} color={textColor} />
            </TouchableOpacity>
        </View>
    );
});

export default QtyButton;
