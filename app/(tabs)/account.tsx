import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function account() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    router.replace('/login');
  }

  return (
    <SafeAreaView className="flex-1 bg-white justify-center items-center px-6">
      <Text className="text-gray-900 font-bold text-3xl mb-8">My Account</Text>
      
      <TouchableOpacity 
        onPress={handleLogout}
        className="w-full bg-red-50 p-4 rounded-xl items-center border border-red-100 active:bg-red-100"
      >
        <Text className="text-red-500 font-bold text-lg">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}