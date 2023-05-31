import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';


const ProfileScreen = () => {

    return(
        <Screen preset="scroll">
            <Header/>
            <ProfileHeader/>
            <SafeAreaView>
                <Text>
                    Profile page
                </Text>
            </SafeAreaView>
        </Screen>

    );

}

export default ProfileScreen;