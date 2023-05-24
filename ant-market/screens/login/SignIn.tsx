import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, TextInput, Image} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import Button from '../../components/Button';
import React from 'react';
import { AntDesign, Ionicons, Entypo, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const SignIn = () => {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
    });
    
    if (!fontsLoaded) {
        return null;
    }
    const TextInputExample = () => {
        const [text, onChangeText] = React.useState('Useless Text');
        const [number, onChangeNumber] = React.useState('');
    }

    function onChangeText(text: string): void {
        throw new Error('Function not implemented.');
    }

    return(
        <Screen preset="scroll" >
            <SafeAreaView>
                
                    <View style={{flexDirection:'column', marginVertical:'2%', alignItems:'center'}}>
                        <Image style={{marginVertical:'10%'}} source={require('ant-market/assets/loginHeader.png')}></Image>
                        <TextInput
                            style={styles.input}
                            placeholder='Username'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Password'
                        />
                        <Text style={{fontWeight:'700'}}>OR </Text>
                        <TouchableOpacity style={styles.button} >
                            <Ionicons name='logo-google' size={30} color="black" style={{marginHorizontal:'5%'}}/>
                            <Text style={[styles.text]}>Sign In with Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} >
                            <Ionicons name='school' size={30} color="black" style={{marginHorizontal:'5%'}}/>
                            <Text style={[styles.text]}>Sign In with UCI ID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: '80%',
                            padding: 20,
                            borderRadius: 4,
                            alignContent:'center',
                            alignItems:'center',
                            flexDirection:'row',
                            borderWidth:0.2,
                            backgroundColor:'black',
                            marginVertical:'2%'
                        }}>
                            
                            <Text style={{ textAlign: 'center',color: 'white',fontSize: 20,marginLeft:'40%', fontWeight:600}}>Log in</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <Text>Don’t have an account? </Text>
                            <Text  style={{textDecorationLine: 'underline', fontWeight:600}}>Sign Up</Text>
                        </View>
                        
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
        
    },
    button: {
        width: '80%',
        padding: 20,
        borderRadius: 4,
        alignContent:'center',
        alignItems:'center',
        flexDirection:'row',
        borderWidth:0.2,
        backgroundColor:'white',
        marginVertical:'2%'

    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 0.5,
        padding: 10,
        fontSize: 20,
        width: "80%"

      },
})

export default SignIn;