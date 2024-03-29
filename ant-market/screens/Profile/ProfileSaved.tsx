import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import ProfSaved from '../../components/Profile/ProfSaved';
import ProfileTabs from '../../components/Profile/ProfileTabs';


const ProfileSaved = () => {

    return(
        <Screen preset="scroll">
            <Header/>
            <ProfileHeader/>
            <ProfileTabs/>
            <SafeAreaView>
                <ProfSaved/>
            </SafeAreaView>
        </Screen>

    );

}

export default ProfileSaved;