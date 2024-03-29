import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';


import HomeScreen from '../screens/HomeScreen';

import ProfileScreen from '../screens/Profile/ProfileScreen';
import CreateScreen from '../screens/ListingsScreen';
import OnBord from "../screens/login/OnBoard";
import SignIn from "../screens/login/SignIn";
import StartPage from "../screens/login/StartPage";
<<<<<<< HEAD
import HomeNavigator from "./home-navigator";
import { useState } from "react";
import CheckoutNavigator from "./checkout-navigator";
=======
import ProfNavigator from "./prof-navigator";

>>>>>>> 10e72ef87d788411872c3db63a811b6d2b808e25


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
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_400Regular'}
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
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_400Regular'}
                    
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
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_400Regular'}

                })}
            />
            <Tab.Screen
                name="Profile"
<<<<<<< HEAD
                component={ProfileScreen}
                options={ () => ({
=======
                component={ProfNavigator}
                options={{
>>>>>>> 10e72ef87d788411872c3db63a811b6d2b808e25
                    headerShown: false,
                    tabBarStyle: {backgroundColor: '#113125'},
                    tabBarIcon: ({focused}) => {
                    return(
                        <View style={{
                            width: 30,
                            height: 30}}>
                            <Entypo name="user" size={25} color={focused ? 'white' : '#A6C48A'} style={{position: "absolute", left: 30/2 - 11, top: 30/2 - 10}}/>
                        </View>)},
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: {fontSize: 12, fontFamily: 'OpenSans_400Regular'}

                })}
            />
            
        </Tab.Navigator>
    )
}

export default TabNavigator;