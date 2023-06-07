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


const ProfSaved = () => {
    const listings = [
        {
            "title":"Comfy Brown Sofa",
            "seller":"anteaterLover",
            "location":"Irvine, CA",
            "description": "Gently used comfy brown sofa. Acquired from a furniture store in 2019. There is one coffee stain on the armrest but it is barely noticeable.",
            "price": 130,
            "images":[
                {
                    "imageURL":"brown-sofa.jpg"
                }
            ],
            "saved":false
        },
        {
            "title":"Swiveling Desk Chair",
            "seller":"boba",
            "location":"Irvine, CA",
            "description": "Wheeeeeeeeeeeeeeee",
            "price": 25,
            "images":[
                {
                    "imageURL":"defaultphoto.png"
                }
            ],
            "saved":false
        },
        {
            "title":"Refurbished Macbook",
            "seller":"anteaterLover",
            "location":"Irvine, CA",
            "description": "Refurbished laptop, works most of the time",
            "price": 300,
            "images":[
                {
                    "imageURL":"defaultphoto.png"
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
                        <PostButt/>
                        <Text style={styles.header}>
                            Saved
                        </Text>
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

const PostButt = () => {
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <Modal
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
                style={{justifyContent: 'center', backgroundColor: '#f2f2f2'}} 
            >
                <SafeAreaView style={{flex: 1, margin: '5%'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={[styles.header, {margin: '2%'}]}>New Listing</Text> 
                        <View style={{}}>
                            <IconButton icon={props => <AntDesign name="closecircleo" size={24} color="#4a4a4a" />} onPress={() => {setModalVisible(false)}}/>
                        </View>                       
                    </View>

                    <ScrollView>
                        <View style={styles.newPostImgContainer}>
                            <ImageBackground source={{uri: bgImgCreate}} style={styles.newPostImg}>
                            <LinearGradient 
                                colors={['rgba(0, 0, 0, 0.0)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.7)']} 
                                style={{marginTop: '47%', height : '100%', width : '100%', alignSelf: 'center'}}
                                locations={[0.05, 0.1, 0.3]}
                            >
                                <View style={{alignSelf: 'center'}}>
                                    {/* TODO: FILL IN WITH LITTLE BABY CIRCLES */}
                                </View>
                            </LinearGradient>
                            </ImageBackground>
                        </View>
                        <Text> Listing Title</Text>
                    </ScrollView>
 
                </SafeAreaView>
            </Modal>
        </View>

    )
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


export default ProfSaved;


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
    postButt: {
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        marginVertical: '5%',
        height: 95,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.7,
       alignItems: 'center',
        justifyContent: 'center', 
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