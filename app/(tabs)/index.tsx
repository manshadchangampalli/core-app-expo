import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { Header } from "../../components/home";
import { BannerSlider, ProductList } from "../../components/common";

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
                <BannerSlider banners={[
                    { id: "1", backgroundColor: "#FF6B6B" },
                    { id: "2", backgroundColor: "#4ECDC4" },
                    { id: "3", backgroundColor: "#45B7D1" },
                    { id: "4", backgroundColor: "#FFA07A" },
                    { id: "5", backgroundColor: "#98D8C8" },
                ]} />

                <ProductList />
            </ScrollView>
        </View>
    );
}
