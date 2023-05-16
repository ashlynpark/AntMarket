import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
 

const HomeScreen = () => {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <Header/>
                <View>
                    <Search/>
                    <Text>
                        Home Page
                    </Text>
                </View>
            </SafeAreaView>
        </Screen>

    );

}

const Search = () => {
    return(
        <View style={styles.searchBarContainer}>
            <Text style={[styles.defaultFont , {fontSize: 15, color: 'black'}]}>Search</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
        margin: '5%',
        width: "70%",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        padding: '2%',
        borderRadius: 7,
        backgroundColor: 'white'
    },
    defaultFont: {
        fontFamily: 'OpenSans_300Light'
    }

})

export default HomeScreen;