import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import TabNavigator from "./tab-navigator";

import ProfNavigator from "./prof-navigator";

const Stack = createNativeStackNavigator()

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Nav"
                component={TabNavigator}
                options={{
                    headerShown: false
                }}
            />
            
        </Stack.Navigator>


    )
}

export const AppNavigator = (props:any) => {
    return (
        <NavigationContainer {...props}>
            <AppStack />
        </NavigationContainer>
    )
}