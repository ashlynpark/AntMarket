import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ProfileSaved from '../../screens/Profile/ProfileSaved';
import ProfileMessages from '../../screens/Profile/ProfileMessages';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Shop" component={ProfileScreen} />
      <Tab.Screen name="Saved" component={ProfileSaved} />
      <Tab.Screen name="Messages" component={ProfileMessages} />
    </Tab.Navigator>
  );
}