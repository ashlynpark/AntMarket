import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}

             />
            <Stack.Screen 
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false
                }}

            />
        </Stack.Navigator>


    )
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="LandingPage"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35 / 2,
                        borderColor: '#FFFFFF',
                        borderWidth: 1}}>
                        <Feather name="home" size={20} color="black" style={{position: "absolute", left: 35/2 - 11, top: 35/2 - 12}}/>
                    </View>,
                    
                    tabBarStyle: {
                        backgroundColor: '#194260',
                        height:90,
                        paddingTop:'2%'
                    },
                    tabBarLabel: "Home",
                    tabBarLabelStyle: {
                        color: 'red'
                    }

                    
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => 
                    <View style={{
                        width: 35,
                        height: 35,
                        borderRadius: 35 / 2,
                        borderColor: '#00000',
                        borderWidth: 1}}>
                    <MaterialCommunityIcons name="calendar-clock-outline" size={20} color="black" style={{position: "absolute", left: 35/2 - 11, top: 35/2 - 11}}/>
                    </View>,
                    tabBarStyle: {
                        backgroundColor: '#194260',
                        height:90,
                        paddingTop:'2%'
                    },
                    tabBarLabel: "Trips",
                    tabBarLabelStyle: {
                        color: 'red'
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export const AppNavigator = (props:any) => {
    return (
        <NavigationContainer {...props}>
            <AppStack />
        </NavigationContainer>
    )
}