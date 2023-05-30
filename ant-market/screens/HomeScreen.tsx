import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Screen from '../components/Screen';
 

const HomeScreen = () => {

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <Text style={styles.header}>
                    Home Page
                </Text>
            </SafeAreaView>
        </Screen>

    );

}
const styles = StyleSheet.create({
  header:{
    //no hyphen 
    fontSize:60,
  }
})
export default HomeScreen;