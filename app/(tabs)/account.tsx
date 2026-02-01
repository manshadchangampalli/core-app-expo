import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonButton } from '../../components/common';
import { Ionicons } from '@expo/vector-icons';

export default function account() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace('/login');
  }

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-6">
      <View className="items-center mb-8">
        <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-6">
            <Ionicons name="person-outline" size={48} color="#9CA3AF" />
        </View>
        <Text className="text-gray-900 font-bold text-2xl mb-3 text-center">You are not logged in</Text>
        <Text className="text-gray-500 text-base text-center leading-6">
          Please login to view your profile, track orders, and get personalized offers.
        </Text>
      </View>
      
      <View className="w-full">
        <CommonButton title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  )
}