import { View, FlatList, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CartHeader from '../../components/cart/CartHeader/CartHeader'
import CartItemCard from '../../components/cart/CartItemCard/CartItemCard'
import CartFooter from '../../components/cart/CartFooter/CartFooter'
import { cartItemsConfig } from '../../components/cart/cart.config'

export default function cart() {
  return (
    <View className="flex-1">
      <SafeAreaView edges={['bottom', 'top']} className="flex-1">
        <FlatList
          data={cartItemsConfig}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View className="h-4" />}
          ListHeaderComponent={<CartHeader />}
          ListFooterComponent={<CartFooter />}
          renderItem={({ item }) => (
            <CartItemCard
              title={item.title}
              description={item.extras}
              price={item.price}
              image={item.image}
              qty={item.qty}
              onDelete={() => { console.log('Delete item', item.id) }}
              onIncrement={() => { console.log('Increment', item.id) }}
              onDecrement={() => { console.log('Decrement', item.id) }}
            />
          )}
        />
      </SafeAreaView >
    </View >
  )
}