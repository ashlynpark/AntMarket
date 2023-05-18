import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';

const CreateScreen = () => {

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <Text>
                    Create a new Post Page
                </Text>
            </SafeAreaView>
        </Screen>

    );

}

export default CreateScreen;