import React from "react";
import { View } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import { productsConfig } from "./products.config";
import { FoodType } from "../FoodTypeIndicator/config";

export const ProductList: React.FC = () => {
    return (
        <View className="px-4 mt-4 pb-[100px] gap-4">
            {productsConfig.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.title}
                    description={product.description}
                    price={typeof product.price === "string" ? parseFloat(product.price) : product.price}
                    originalPrice={
                        product.originalPrice
                            ? typeof product.originalPrice === "string"
                                ? parseFloat(product.originalPrice)
                                : product.originalPrice
                            : undefined
                    }
                    rating={product.rating}
                    image={product.image}
                    foodType={product.isVeg ? FoodType.VEG : FoodType.NON_VEG}
                    isBestseller={product.bestseller}
                    isCustomizable={product.isCustomizable}
                />
            ))}
        </View>
    );
};
