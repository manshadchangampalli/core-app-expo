import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginPrompt from '../../components/account/LoginPrompt/LoginPrompt';
import ProfileHeader from '../../components/account/ProfileHeader/ProfileHeader';
import LoyaltyCard from '../../components/account/LoyaltyCard/LoyaltyCard';
import MenuOption from '../../components/account/MenuOption/MenuOption';

export default function Account() {
  const router = useRouter();
  // TODO: Replace with real auth state
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // For now, just navigate to login. Real app would update state after auth.
    router.replace('/login');
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.replace('/login');
  };

  if (!isLoggedIn) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <LoginPrompt onLoginPress={handleLogin} />
      </SafeAreaView>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <SafeAreaView className="flex-1">
        <View className="flex-1">
          <Text className="text-3xl font-extrabold text-gray-900 mt-2 mx-4 mb-6">My Profile</Text>

          <ScrollView showsVerticalScrollIndicator={false}>
            <ProfileHeader />

            <LoyaltyCard />

            <View className="mt-4 space-y-3">
              <MenuOption
                icon="heart-outline"
                label="Saved Items"
                onPress={() => { }}
              />
              <MenuOption
                icon="help-circle-outline"
                label="Help & Support"
                onPress={() => { }}
              />
              <MenuOption
                icon="log-out-outline"
                label="Log Out"
                onPress={handleLogout}
                isDestructive
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}