import React from "react";
import { View, StatusBar, FlatList } from "react-native";
import { useFocusEffect } from "expo-router";
import Header from "../../components/home/Header/Header";
import { BannerSlider } from "../../components/common";
import { productsConfig } from "../../components/common/ProductList/products.config";
import RenderProductItem from "../../components/common/ProductList/ProductList";

export default function Index() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle("light-content");
            StatusBar.setBackgroundColor("transparent");

            return () => {
                StatusBar.setBarStyle("dark-content");
                StatusBar.setBackgroundColor("#000000");
            };
        }, [])
    );

    return (
        <View className="flex-1">
            <StatusBar barStyle={"light-content"} />
            <Header />
            <FlatList
                data={productsConfig}
                renderItem={RenderProductItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <BannerSlider
                        onBannerPress={(banner) => {
                            console.log("Banner pressed:", banner.id);
                        }}
                    />
                }
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
