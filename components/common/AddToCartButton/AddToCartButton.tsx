import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import QtyButton from "../QtyButton/QtyButton";

interface AddToCartButtonProps {
    qty: number;
    onAdd?: () => void;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

const AddToCartButton = React.memo(({
    qty,
    onAdd,
    onIncrement,
    onDecrement,
}: AddToCartButtonProps) => {
    if (qty > 0) {
        return (
            <QtyButton
                qty={qty}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />
        );
    }

    return (
        <TouchableOpacity
            onPress={onAdd}
            className="bg-[#0F172A] px-6 py-2 rounded-xl h-9 items-center justify-center"
        >
            <Text className="text-white font-bold text-sm">Add</Text>
        </TouchableOpacity>
    );
});

export default AddToCartButton;
