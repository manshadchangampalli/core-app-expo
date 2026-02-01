import React from "react";
import { View } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import { ProductConfig } from "./products.config";
import { FoodType } from "../FoodTypeIndicator/config";

const RenderProductItem = ({ item, onPress }: { item: ProductConfig; onPress?: () => void }) => (
    <View className="px-4 mb-4">
        <ProductCard
            title={item.title}
            description={item.description}
            price={typeof item.price === "string" ? parseFloat(item.price) : item.price}
            originalPrice={
                item.originalPrice
                    ? typeof item.originalPrice === "string"
                        ? parseFloat(item.originalPrice)
                        : item.originalPrice
                    : undefined
            }
            rating={item.rating}
            image={item.image}
            foodType={item.isVeg ? FoodType.VEG : FoodType.NON_VEG}
            isBestseller={item.bestseller}
            isCustomizable={item.isCustomizable}
            onPress={onPress}
        />
    </View>
);

export default RenderProductItem;
