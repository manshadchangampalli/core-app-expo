import { NativeTabs, Label, Icon } from "expo-router/unstable-native-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { icons } from "../../assets/icons";

export default function TabLayout() {
    return (
        <SafeAreaView
            style={styles.container}
            edges={["left", "right"]}>
            <NativeTabs
                labelStyle={{
                    color: "#000000"
                }}
                tintColor={"#FF6B35"}>
                <NativeTabs.Trigger name="index">
                    <Icon
                        src={{
                            default: icons.home,
                            selected: icons.home, // Same icon, tintColor applies automatically
                        }}
                    />
                    <Label>Home</Label>
                </NativeTabs.Trigger>
                <NativeTabs.Trigger name="offers">
                    <Icon
                        src={{
                            default: icons.offers,
                            selected: icons.offers,
                        }}
                    />
                    <Label>Offers</Label>
                </NativeTabs.Trigger>
                <NativeTabs.Trigger name="orders">
                    <Icon
                        src={{
                            default: icons.orders,
                            selected: icons.orders,
                        }}
                    />
                    <Label>Orders</Label>
                </NativeTabs.Trigger>
                <NativeTabs.Trigger name="account">
                    <Icon
                        src={{
                            default: icons.account,
                            selected: icons.account,
                        }}
                    />
                    <Label>Account</Label>
                </NativeTabs.Trigger>
                <NativeTabs.Trigger name="cart">
                    <Icon
                        src={{
                            default: icons.cart,
                            selected: icons.cart,
                        }}
                    />
                    <Label>Cart</Label>
                </NativeTabs.Trigger>
            </NativeTabs>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
