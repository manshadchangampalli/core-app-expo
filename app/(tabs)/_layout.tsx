import { NativeTabs, Label, Icon } from "expo-router/unstable-native-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function TabLayout() {
    return (
        // <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <NativeTabs>
            <NativeTabs.Trigger name="index">
                <Icon
                    sf={{ default: "house", selected: "house.fill" }}
                    drawable="custom_home_drawable"
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="offers">
                <Icon
                    sf={{ default: "star.circle", selected: "star.circle.fill" }}
                    drawable="custom_offers_drawable"
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="account">
                <Icon
                    sf={{ default: "person", selected: "person.fill" }}
                    drawable="custom_account_drawable"
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger name="cart">
                <Icon
                    sf={{ default: "cart", selected: "cart.fill" }}
                    drawable="custom_cart_drawable"
                />
            </NativeTabs.Trigger>
            <NativeTabs.Trigger
                name="search"
                role="search">
                <Label>Search</Label>
            </NativeTabs.Trigger>
        </NativeTabs>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
