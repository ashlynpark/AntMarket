import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import { FontAwesome5 } from '@expo/vector-icons';  
import Onboarding from 'react-native-onboarding-swiper';

const OnBord = () => {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <Screen preset="scroll" style={{backgroundColor: '#678D58'}}>
            <SafeAreaView>
                <Header/>
                <View style={{marginBottom:'0%'}}>
                    <Onboarding 
                        onDone={() => navigation.replace("Home"
                        containerStyles={{maxHeight:580}}

                        
                        pages={[
                            {
                            backgroundColor: '#fff',
                            image: <Image source={require('ant-market/assets/favicon.png')} />,
                            title: 'Buy Items',
                            subtitle: 'Browse and find items that your fellow UCI students would like to pass on!',
                            },
                            {
                            backgroundColor: '#fff',
                            image: <Image source={require('ant-market/assets/favicon.png')} />,
                            title: 'Sell Items',
                            subtitle: 'Have some stuff you don’t need? Sell your items to fellow UCI students!',
                            },
                            {
                            backgroundColor: '#fff',
                            image: <Image source={require('ant-market/assets/favicon.png')} />,
                            title: 'Swipe To Browse',
                            subtitle: 'No time? No worries! You like what you see? Swipe right; don’t like what you see? Swipe left and move on!',
                            },
                            {
                            backgroundColor: '#fff',
                            image: <Image source={require('ant-market/assets/favicon.png')} />,
                            title: 'Before we get you started...',
                            subtitle: 'If you are a UCI affiliate, you may log in using your UCI credentials to be able to sell items on the AntMarket.',
                            },
                        ]}
                        
                    />
                </View>
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

export default OnBord;