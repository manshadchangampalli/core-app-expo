import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const ProfileHeader = () => {
    return (
        <View className="flex-row mx-4 items-center justify-between mb-8 mt-2">
            <View className="flex-row items-center flex-1">
                <View className="w-16 h-16 bg-orange-100 rounded-full items-center justify-center mr-4 border-2 border-white shadow-sm" >
                    <Ionicons name="person-outline" size={30} color="#F97316" />
                </View>
                <View>
                    <Text className="text-gray-900 font-bold text-xl">Alex Johnson</Text>
                    <Text className="text-gray-500 text-sm">alex.johnson@example.com</Text>
                </View>
            </View>
            <View className="w-10 h-10 bg-gray-50 rounded-full items-center justify-center">
                <Ionicons name="notifications-outline" size={20} color="#1F2937" />
            </View>
        </View>
    )
}

export default ProfileHeader;
