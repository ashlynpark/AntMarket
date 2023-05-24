import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OnBord from "../screens/login/OnBord";


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
            <Tab.Screen
                name="Cart"
                component={OnBord}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator;