import React from "react";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchBar } from "../../common";

interface HeaderProps {
    title?: string;
    showBackButton?: boolean;
    onBackPress?: () => void;
    rightComponent?: React.ReactNode;
}

export default function Header({ title = "Home", showBackButton = false, onBackPress, rightComponent }: HeaderProps) {
    return (
        <View className="flex-row items-center rounded-b-3xl justify-between bg-black overflow-hidden relative">
            <View className="absolute w-full h-full  z-9" />
            <SafeAreaView edges={["top"]} className="px-4 w-full py-3">
                <SearchBar />
            </SafeAreaView>
        </View>
    );
}

