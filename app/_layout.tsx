import 'react-native-gesture-handler';
import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import "../global.css";

const RootLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar style="dark" />
            <Stack>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </GestureHandlerRootView>
    );
}
export default RootLayout;
