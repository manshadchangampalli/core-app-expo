import React from "react";
import { View, StatusBar, ScrollView, Text } from "react-native";
import { Header } from "../../components/home";
import { BannerSlider, ProductList } from "../../components/common";
import {
    LiquidGlassView,
    isLiquidGlassSupported,
} from '@callstack/liquid-glass';

export default function Index() {
    return (
        <View className="flex-1 bg-white">
            <StatusBar
                barStyle="light-content"
                backgroundColor="#000000"
                translucent={true}
            />
            <Header />
            <ScrollView>
                <BannerSlider
                    onBannerPress={(banner) => {
                        console.log("Banner pressed:", banner.id);
                    }}
                />
                <ProductList />
            </ScrollView>
        </View>
    );
}
