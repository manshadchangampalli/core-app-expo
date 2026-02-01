import 'react-native-gesture-handler';
import React from "react";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import "../global.css";

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <Slot />
        </GestureHandlerRootView>
    );
}
export default RootLayout;
