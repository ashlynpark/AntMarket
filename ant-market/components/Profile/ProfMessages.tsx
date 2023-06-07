import {StyleSheet, Text, View, Modal, Button, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../Screen';
import Header from '../Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { IconButton } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";
import Svg, {Circle} from 'react-native-svg';

const bgImgCreate = 'https://images.unsplash.com/photo-1597668900045-b9283c0de174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'


const ProfMessages = () => {
    const listings = [
        {
            "user":"Username1",
            "seller":"anteaterLover",
            "location":"Irvine, CA",
            "listing": "Brown Sofa",
            "preview": "Hello, I'm interested in your listing of a blue",
            "price": 130,
            "images":[
                {
                    "imageURL":"../../assets/profpic_default.png"
                }
            ],
            "saved":false
        },
        {
            "user":"Username2",
            "location":"Irvine, CA",
            "listing": "Toaster",
            "preview": "Wheeeeeeeeeeeeeeee",
            "price": 25,
            "images":[
                {
                    "imageURL":"../../assets/profpic_default.png"
                }
            ],
            "saved":false
        },
        {
            "user":"Username3",
            "location":"Irvine, CA",
            "listing": "Kitchen Clips",
            "preview": "Hi, what colors of the clips do you have? I'm only interested in the blue and green",
            "price": 300,
            "images":[
                {
                    "imageURL":"../../assets/profpic_default.png"
                }
            ],
            "saved":false
        }
    ]
    return(
        <Screen preset="scroll">
            <View>
                <SafeAreaView>
                    <View style={{marginTop: '2%', marginHorizontal: '5%'}}>
                        {listings.map((item, index) => {
                            return(
                                <Listing key={index} listing={item}/>
                            )
                        })}
                    </View>
                </SafeAreaView>                
            </View>
        </Screen>

    );
}


const Listing = (props: {listing : any}) => {
    return(
        <TouchableOpacity style={styles.listingCard}>
            <View style={{flex: .2}}>
                <Image source={require("../../assets/profpic_default.png")} style={styles.listingImg} />
            </View>
            <View style={{flex: 1, justifyContent: 'space-between', padding: '3%'}}>
                <Text style={styles.user} numberOfLines={3} ellipsizeMode="tail">{props.listing.user}</Text>
                <Text style={styles.listingAbout}>Inquiring About: {props.listing.listing}</Text>
                
                <Text style={[styles.preview]}>{props.listing.preview}</Text>
                <Text style={[styles.preview, {color: 'black'}]}>View {'>'}</Text>
                
            </View>
        </TouchableOpacity>
    )
}


export default ProfMessages;


const styles = StyleSheet.create({
    searchBarContainer: {
        marginTop: '5%',
        marginBottom: '5%',
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
    header: {
        fontSize: 22,
        fontFamily: 'OpenSans_700Bold',
        color: '#113125'
    },
    listingCard: {
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        marginVertical: '4%',
        height: 120,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
    },
    listingImg: {
        height: 50,
        width: 50,
        marginLeft: 10,
        marginTop: 20,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
        resizeMode: 'cover'

    },
    user: {
        fontSize: 16,
        fontFamily: 'OpenSans_600SemiBold',
        alignSelf: 'flex-start',
        marginTop: '.5%'
    },
    listingAbout: {
        fontSize: 14,
        fontFamily: 'OpenSans_500Medium'
    },
    preview: {
        fontSize: 14,
        fontFamily: 'OpenSans_500Medium',
        color: 'gray'
    },
    listingPrice: {
        fontSize: 14,
        fontFamily: 'OpenSans_500Medium',
        marginVertical: '5%',
        color: '#678D58'
    },
    newPostImgContainer: {
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '90%',
        marginVertical: '5%',
        height: 190,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#678D58' 
    },
    newPostImg: {
        borderRadius: 10,
        width: '100%',
        overflow: 'hidden',
        resizeMode: 'contain',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0,8)'
    },
})