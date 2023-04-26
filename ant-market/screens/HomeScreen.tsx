import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Screen from '../components/Screen';
 

const HomeScreen = () => {

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <Text>
                    Home Page
                </Text>
            </SafeAreaView>
        </Screen>

    );

}

export default HomeScreen;