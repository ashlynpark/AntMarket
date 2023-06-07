import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
//import Onboarding from 'react-native-onboarding-swiper';

const StartPage = () => {


    return(
        <Screen preset="scroll" style={{backgroundColor: '#678D58'}}>
            <SafeAreaView >
                <TouchableOpacity style={{backgroundColor:'#678D58', height:"200%", flexDirection:'column'}}>
                    <Image style={{marginTop:"70%", marginLeft:'4%'}}source={require('ant-market/assets/loginHeader.png')} ></Image>
                    <Text style={{alignSelf:'center', fontWeight:'800', color:'#113125'}}>Tap Anywhere To Continue</Text>
                </TouchableOpacity>    
            </SafeAreaView>
        </Screen>

    );

}


const styles = StyleSheet.create({
    searchBarContainer: {
        marginVertical: '5%',
        marginLeft: '4%',
        marginRight: '3%',
        width: "77%",
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 7,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    defaultFont: {
        fontFamily: 'OpenSans_300Light'
    },
    buttonContainer: {
        padding: '2%',
        flex: 1,
        alignItems: 'center',
        borderTopEndRadius: 7,
        borderBottomEndRadius: 7,
        
    },
    singleTag:{
        borderRadius: 20,
        alignItems: 'center',
        padding: '2%',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginHorizontal: '2%'
    }
})

export default StartPage;