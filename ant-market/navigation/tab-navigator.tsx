import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';


import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/ListingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import OnBord from "../screens/login/OnBoard";
import SignIn from "../screens/login/SignIn";
import StartPage from "../screens/login/StartPage";
import HomeNavigator from "./home-navigator";



const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 30 / 2,
                            borderColor: '#FFFFFF',
                            borderWidth: 1}}>
                            <Entypo name="home" size={20} color={focused ? 'blue' : 'black'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 12}}/>
                        </View>)},
                    tabBarLabel: "Home",
                })}
            />
            <Tab.Screen
                name="Listings"
                component={CreateScreen}
                options={{
                    headerShown: false,
                    
                    tabBarLabel: "Listings",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
            <Tab.Screen
                name="Cart"
                component={StartPage}
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
            
        </Tab.Navigator>
    )
}

export default TabNavigator;