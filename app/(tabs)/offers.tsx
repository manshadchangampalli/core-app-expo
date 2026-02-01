import { View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import OfferCard from '../../components/offers/OffersCard/OffersCard'
import { offersConfig } from '../../components/offers/OffersCard/offers.config'
import OffersHeader from '../../components/offers/OffersHeader/OffersHeader'



const offers = () => {

    return (
        <View className="flex-1 bg-white">
            <SafeAreaView edges={["top"]} className="flex-1">
                <FlatList
                    data={offersConfig}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <OfferCard item={item} />}
                    ListHeaderComponent={<OffersHeader />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
                    className="flex-1"
                />
            </SafeAreaView>
        </View>
    )
}

export default offers