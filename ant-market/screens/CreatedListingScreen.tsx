import {StyleSheet, Text, View, Modal, Button, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { IconButton } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";
import Svg, {Circle} from 'react-native-svg';


const CreatedListingScreen = () => {

    const img = 'https://images.unsplash.com/photo-1623678624314-c3efb63fb2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80'
    const title = "Desk lamp"
    const price = "$10.00"

    return(
        <Screen preset="scroll">
            <View>
                <Header/>
                <SafeAreaView>
                    <View style={styles.imgContainer}>
                        <Image source={{uri: img}}
                            style = {{height: 230, width: 375, flex: 1, resizeMode: 'cover'}} />
                    </View>
                    <View style={styles.listingLabel}>
                        <View style={styles.leftLabel}> 
                            <Text style={styles.listingTitle}>
                                {title}
                            </Text>
                        </View>
                        <View style={styles.rightLabel}>
                            <Text style={styles.listingTitle}>
                                {price}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>
                            <Text style={{fontWeight: 'bold'}}>Description: </Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui leo, posuere ut luctus sed, tincidunt at purus. Integer eros nunc, aliquam ut posuere sed, tempor id neque.
                        </Text>
                    </View>
                    <View style={styles.allTags}>
                        <Tags tags={["office", "lamp", "desk"]}/>
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
                <Text style={styles.listingTitle} numberOfLines={3} ellipsizeMode="tail">{props.listing.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.listingPrice}>${props.listing.price}</Text>
                    <Text style={[styles.listingPrice, {color: 'black'}]}>View {'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Tags = (props: {tags:string[]}) =>{
    return(
        <View style={{flex:1, flexDirection: 'row'}}>
                {props.tags.map((item, index) => {
                    return(
                        <View key={index} style={styles.singleTag}>
                            <Text style={[styles.defaultFont, {fontSize: 12}]}>#{item}</Text>
                        </View>
                    )
                })}
        </View>

    )
}

const styles = StyleSheet.create({
    imgContainer: {
        width: "100%",
        height: 230,
        position: 'absolute',
        top: -20,
        resizeMode: 'cover',
    
    },

    listingLabel: {
        backgroundColor: '#678D58',
        flex: 1,
        flexDirection: 'row',
        height: 50,
        top: 210,
    },

    leftLabel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingLeft: '2%',

    },

    rightLabel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems: 'center',
        paddingRight: '2%',


    },

    descriptionContainer: {
        top: 240,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:'7%',
        paddingRight:'7%',


    },

    listingTitle: {
        fontFamily: 'OpenSans_Light',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },

    allTags: {
        top: 260,
        flexDirection: 'row',
        paddingLeft: '7%'
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
    
    postButtLabel: {
        fontSize: 20,
        fontFamily: 'OpenSans_600SemiBold',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white'
    },
    postButtImg: {
        borderRadius: 10,
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        resizeMode: 'cover'
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

export default CreatedListingScreen;