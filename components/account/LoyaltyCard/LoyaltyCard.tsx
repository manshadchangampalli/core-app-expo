import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const LoyaltyCard = () => {
    return (
        <View className="bg-[#0F172A] rounded-2xl p-6 mx-4 mb-6 shadow-lg">
            <View className="flex-row justify-between items-start mb-4">
                <View>
                    <Text className="text-yellow-500 font-bold text-xs tracking-wider mb-1">GOLD MEMBER</Text>
                    <Text className="text-white font-bold text-3xl">1,240 Pts</Text>
                </View>
                <View className="w-10 h-10 bg-white/10 rounded-full items-center justify-center">
                    <Ionicons name="star" size={20} color="#EAB308" />
                </View>
            </View>

            <View className="w-full h-2 bg-gray-700 rounded-full mb-2 overflow-hidden">
                <View className="h-full bg-yellow-500 w-3/5 rounded-full" />
            </View>

            <Text className="text-gray-400 text-xs">760 pts to Platinum Status</Text>
        </View>
    )
}

export default LoyaltyCard;
