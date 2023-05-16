import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';


import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';


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
                        borderColor: 'black',
                        borderWidth: 1}}>
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

export default TabNavigator;