// this is very dumb but i can't be fucekd rn


import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState, useEffect } from 'react';
import listings from '../data/moreDummyListings.json';
import { useNavigation, useRoute } from '@react-navigation/native';

const SearchResults2 = () => {
    const route = useRoute()
    const wtf = route.params
    return(
        <Screen preset='scroll'>
            <Header/>
            <Search prevSearch=''/>
            <View>
                {listings.map((item, index) => {
                    return(
                        <Listing key={index} listing={item}/>
                    )
                })}
            </View>
        </Screen>
    )
}

const Listing = (props: {listing : any}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.listingCard}  onPress={() => {let data = props.listing; navigation.navigate("single listing", data)}}>
            <View style={{flex: 1.2}}>
                <Image source={{uri: props.listing.image}} style={styles.listingImg} />
            </View>
            <View style={{flex: 1, justifyContent: 'space-between', padding: '3%'}}>
                <Text style={styles.listingTitle} numberOfLines={3} ellipsizeMode="tail">{props.listing.name}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.listingPrice}>${props.listing.price}</Text>
                    <Text style={[styles.listingPrice, {color: 'black'}]}>View {'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const Search = (props: {prevSearch : string}) => {
    const [text, onChangeText] = useState(props.prevSearch);
    const navigation = useNavigation();

    const SearchButton = () => {
        return(
        
            <TouchableOpacity onPress={() => navigation.navigate('Search Results')} style={[styles.buttonContainer, {backgroundColor: '#A6C48A'}]}>
                <FontAwesome5 name="search" size={22} color="white" />
            </TouchableOpacity> 
    
        )
    };

    const FilterButton = () => {
        return(
            <View style={[styles.buttonContainer, {borderRadius: 7, height: 'auto', marginRight: '4%', alignSelf: 'center', shadowColor: 'black',shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.2, shadowRadius: 4,backgroundColor: 'white'}]}>
                <FontAwesome5 name="sliders-h" size={20} color="#484848" />
            </View>
    
        )
    };

    return(
        <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.searchBarContainer}>
                <View style={{flex: 5, padding: '2%'}}>
                    <TextInput
                            onChangeText={onChangeText}
                            value={text}
                            autoCapitalize='none'
                            placeholder='Search'
                            returnKeyType='search'
                            style={{fontFamily: 'OpenSans_300Light', fontSize: 16}}
                    /> 
                </View>
                <SearchButton/>
            </View>
            <FilterButton/>
        </View>
    )
}

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
        width: '90%',
        marginTop: '5%',
        marginBottom: '1%',
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
        width: '90%',
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
});

export default SearchResults2;