import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Screen from '../components/Screen';
 

const SearchScreen = () => {

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <Text>
                    Search Page
                </Text>
            </SafeAreaView>
        </Screen>

    );

}

export default SearchScreen