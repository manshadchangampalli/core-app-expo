import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import OrderCard from "../../components/orders/OrderCard/OrderCard";
import { ordersConfig } from "../../components/orders/orders.config";

const Orders = () => {
    return (
        <View className="flex-1 bg-gray-50">
            <SafeAreaView className="flex-1">
                <Text className="text-3xl mx-4 font-extrabold text-gray-900 mt-2 mb-6">Orders</Text>
                
                <FlatList 
                    data={ordersConfig}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <OrderCard 
                           image={item.image}
                           title={item.title}
                           date={item.date}
                           price={item.price}
                           status={item.status}
                           onReorderPress={() => console.log('Reorder', item.id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
            </SafeAreaView>
        </View>
    );
};

export default Orders;
