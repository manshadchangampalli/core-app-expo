import { View, Text } from "react-native";
import React from "react";
import { FoodType } from "../FoodTypeIndicator/config";
import FoodTypeIndicator from "../FoodTypeIndicator/FoodTypeIndicator";

interface ProductCardProps {
    foodType?: FoodType;
}

const ProductCard: React.FC<ProductCardProps> = ({ foodType = FoodType.VEG }) => {
    return (
        <View className="p-3 mt-4 flex flex-row gap-4 rounded-xl shadow-sm bg-white border border-border">
            <View className="w-[120px] h-[150px] rounded-xl bg-red-500"></View>
            <View className="flex-1">
                <View className="w-full justify-between flex-row">
                    <FoodTypeIndicator type={foodType} />
                    <View>
                        
                    </View>
                </View>
                <Text className="text-xl font-bold">Product Name</Text>
                <Text className="text-base text-gray-500">Product Description</Text>
            </View>
        </View>
    );
};

export default ProductCard;
