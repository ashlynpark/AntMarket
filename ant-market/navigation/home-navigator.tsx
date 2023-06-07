import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SwipeDeck from "../screens/SwipeDeck";
import HomeScreen from "../screens/HomeScreen";
import SearchResults from "../screens/SearchResults";
import SearchResults2 from "../screens/SearchResults2";

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="home">       
            <Stack.Screen 
                name="home"
                component={HomeScreen}
                options={{
                    headerShown: false
                }}
            />            
            <Stack.Screen 
                name="Swipe Deck"
                component={SwipeDeck}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Search Results"
                component={SearchResults}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Search Results2"
                component={SearchResults2}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>


    )
}

export default HomeNavigator;