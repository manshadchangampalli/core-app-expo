import React from "react";
import { View } from "react-native";
import { FoodType, foodTypeConfig } from "./config";

interface FoodTypeIndicatorProps {
    type: FoodType;
    size?: number;
}

export const FoodTypeIndicator: React.FC<FoodTypeIndicatorProps> = ({
    type,
    size = 15,
}) => {
    const { color } = foodTypeConfig[type];

    return (
        <View
            style={{
                width: size,
                height: size,
                padding: 2,
                borderWidth: 1,
                borderColor: color,
                borderRadius: 2,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: color,
                    borderRadius: 999,
                }}
            />
        </View>
    );
};

export default FoodTypeIndicator;

