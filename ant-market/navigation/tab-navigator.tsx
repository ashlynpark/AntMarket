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
import { useState } from "react";
import CheckoutNavigator from "./checkout-navigator";


const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: '#A6C48A',
          })}
        >
            
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#113125'},
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{width: 30, height: 30}}>
                            <Entypo name="home" size={25} color={focused ? 'white' : '#A6C48A'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 10}}/>
                        </View>)},
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_500Medium'}
                })}
            />
            <Tab.Screen
                name="Listings"
                component={CreateScreen}
                options={{
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#113125'},
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{ width: 30, height: 30}}>
                            <Entypo name="circle-with-plus" size={25} color={focused ? 'white' : '#A6C48A'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 10}}/>
                        </View>)},
                    tabBarLabel: "Listings",
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_500Medium'}
                    
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CheckoutNavigator}
                options={ () => ({
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#113125'},
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30}}>
                            <Entypo name="shopping-cart" size={25} color={focused ? 'white' : '#A6C48A'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 10}}/>
                        </View>)},
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_500Medium'}

                })}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={ () => ({
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#113125'},
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30}}>
                            <Entypo name="user" size={25} color={focused ? 'white' : '#A6C48A'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 10}}/>
                        </View>)},
                    tabBarLabel: "You",
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_500Medium'}

                })}
            />
            
        </Tab.Navigator>
    )
}

export default TabNavigator;