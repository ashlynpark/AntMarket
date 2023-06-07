import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileSaved from "../screens/Profile/ProfileSaved";
import ProfileMessages from "../screens/Profile/ProfileMessages";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="ProfileScreen">
        <Stack.Screen 
            name="ProfileScreen" 
            component={ProfileScreen} 
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="ProfileSaved" 
            component={ProfileSaved} 
            options={{
                headerShown: false
            }} 
        />
        <Stack.Screen 
            name="ProfileMessages" 
            component={ProfileMessages}
            options={{
                headerShown: false
            }}    
        />
    </Stack.Navigator>
    );
}



export default ProfNavigator;