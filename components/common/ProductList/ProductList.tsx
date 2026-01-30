import React from 'react';
import { View } from 'react-native';
import ProductCard from '../ProductCard/ProductCard';

export const ProductList: React.FC = () => {
    return (
        <View className="px-4 mt-4 pb-[100px] gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </View>
    );
};
