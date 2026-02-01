import React from "react";
import { View, Text } from "react-native";

const OffersHeader = () => {
    return (
        <View>
            <Text className="text-2xl font-bold mb-6 mt-2 text-gray-900">Exclusive Offers</Text>
            <Text className="text-lg font-bold mb-4 text-gray-800">Today's Top Picks</Text>
        </View>
    );
};

export default OffersHeader;
