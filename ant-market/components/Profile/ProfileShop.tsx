import {StyleSheet, Text, View, Modal, Button, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../../components/Screen';
import React, { useState } from 'react';
import { IconButton } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";

const bgImgCreate = 'https://images.unsplash.com/photo-1597668900045-b9283c0de174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'


const ProfileShop = () => {
    const listings = [
        {
            'title': 'Desk lamp, good condition, LED light',
            'img': 'https://images.unsplash.com/photo-1623678624314-c3efb63fb2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80',
            'seller' : 'peter',
            'price' : 29.99
        },
        {
            'title' : 'Computer mouse (roller ball)',
            'img': 'https://i.ebayimg.com/images/g/87MAAOSwq9NkTAti/s-l640.jpg',
            'seller' : 'irvine-company-victim',
            'price' : 0
        },
        {
            'title': 'UCI hoodie, worn twice',
            'img':'https://i.ebayimg.com/images/g/PkEAAOSwEAthru1l/s-l1600.jpg',
            'seller' : 'petr_anteatr',
            'price' : 13.00
        },
        {
            'title': 'My Entire Petr Sticker Collection',
            'img' : 'https://images.squarespace-cdn.com/content/v1/5b60d4fa70e802968763e7f5/1a57663c-9766-429c-b597-4ae31d4aff49/Screen+Shot+2023-01-26+at+5.53.11+PM.png?format=2500w',
            'seller' : 'peter',
            'price' : 42069.00
        }
    ]
    return(
        <Screen preset="scroll">
            <View>
                <SafeAreaView>
                    <View style={{marginTop: '2%', marginHorizontal: '5%'}}>
                        {/* <Text style={styles.header}>
                            Your Listings
                        </Text> */}
                    </View>
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
            <View style={{flex: 1.2}}>
                <Image source={{uri: props.listing.img}} style={styles.listingImg} />
            </View>
            <View style={{flex: 1, justifyContent: 'space-between', padding: '3%'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: '3%'}}>
                    <Text style={styles.listingTitle} numberOfLines={3} ellipsizeMode="tail">{props.listing.title}</Text>
                    <Image source={require("../../assets/unselected_saved.png")} style={styles.saved} />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.listingPrice}>${props.listing.price}</Text>
                    <Text style={[styles.listingPrice, {color: 'black'}]}>View {'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default ProfileShop;


const styles = StyleSheet.create({
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
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
        resizeMode: 'cover'

    },
    saved: {
        height: '50%',
        width: '12%',
        alignSelf: 'flex-start',
        marginTop: '3%',
        marginRight: '3%'
    },
    listingTitle: {
        fontSize: 16,
        fontFamily: 'OpenSans_600SemiBold',
        alignSelf: 'flex-start',
        marginTop: '5%'
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