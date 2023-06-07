import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import ProfSaved from '../../components/Profile/ProfSaved';


const ProfileSaved = () => {

    return(
        <Screen preset="scroll">
            <Header/>
            <ProfileHeader/>
            <SafeAreaView>
                <ProfSaved/>
            </SafeAreaView>
        </Screen>

    );

}

export default ProfileSaved;