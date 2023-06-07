import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwipeDeck from "../screens/SwipeDeck";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartScreen from "../screens/CartScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

const Stack = createNativeStackNavigator()

const CheckoutNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Cart page">       
            <Stack.Screen 
                name="Cart page"
                component={CartScreen}
                options={{
                    headerShown: false
                }}
            />            
            <Stack.Screen 
                name="Checkout"
                component={CheckoutScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Confirmation"
                component={ConfirmationScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export default CheckoutNavigator;