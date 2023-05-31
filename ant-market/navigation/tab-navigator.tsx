import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OnBord from "../screens/login/OnBoard";
import SignIn from "../screens/login/SignIn";
import StartPage from "../screens/login/StartPage";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartScreen from "../screens/CartScreen";
import ConfirmationScreen from "../screens/ConfirmationScreen";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                  
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
            <Tab.Screen
                name="Post"
                component={CreateScreen}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Post",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
             {/* <Tab.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Checkout",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
            <Tab.Screen
                name="Confirmation"
                component={ConfirmationScreen}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Confirmation",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            /> */}
            
        </Tab.Navigator>
    )
}

export default TabNavigator;