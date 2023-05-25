import {StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 


const bgImgCreate = 'https://images.unsplash.com/photo-1597668900045-b9283c0de174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const CreateScreen = () => {
    const listings = [
                            {
                                'title': 'IKEA Desk lamp, good condition, LED light',
                                'img': 'https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2761&q=80',
                                'seller' : 'peter',
                                'price' : 29.99
                            },
                            {
                                'title' : 'SOC 1 Textbook, We Live in a Society',
                                'img' : 'https://images.unsplash.com/photo-1629470937928-5f873c06005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
                                'seller' : 'howardgman',
                                'price' : 57.99
                            },
                            {
                                'title' : 'Computer mouse (roller ball)',
                                'img': 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3001&q=80',
                                'seller' : 'irvine-company-victim',
                                'price' : 0
                            },
                            {
                                'title': 'UCI hoodie, worn twice',
                                'img':'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80',
                                'seller' : 'petr_anteatr',
                                'price' : 13.00
                            },
                            {
                                'title': 'My Entire Petr Sticker Collection',
                                'img' : 'https://images.squarespace-cdn.com/content/v1/5b60d4fa70e802968763e7f5/1a57663c-9766-429c-b597-4ae31d4aff49/Screen+Shot+2023-01-26+at+5.53.11+PM.png?format=2500w',
                                'seller' : 'peter',
                                'price' : 42069.00
                            }]

    return(
        <Screen preset="scroll">
            <Header/>
            <SafeAreaView>
                <View style={{marginTop: '2%', marginHorizontal: '5%'}}>
                    <PostButt/>
                    <Text style={styles.header}>
                        Your Listings
                    </Text>
                </View>
                <Search/>
                <View style={{marginTop: '2%', marginHorizontal: '5%'}}>
                    {listings.map((item, index) => {
                        return(
                            <Listing key={index} listing={item}/>
                        )
                    })}
                </View>
            </SafeAreaView>
        </Screen>

    );

}


const PostButt = () => {
    return(
        <TouchableOpacity style={styles.postButt}>
            <ImageBackground style={styles.postButtImg} source={{uri: bgImgCreate}}>
                <View style={{ flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgba(0, 0, 0, .45)' }}>
                    <MaterialIcons name="post-add" size={26} color="white" />
                    <Text style={styles.postButtLabel}> Create New Listing</Text>
                </View>    
            </ImageBackground>
        </TouchableOpacity>
    )
}

const Search = () => {
    const SearchButton = () => {
        return(
            <View style={[styles.buttonContainer, {backgroundColor: '#A6C48A'}]}>
                <FontAwesome5 name="search" size={22} color="white" />
            </View> 
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
        <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
            <View style={styles.searchBarContainer}>
                <View style={{flex: 5, padding: '2%'}}>
                    <Text style={[styles.defaultFont , {fontSize: 15, color: 'black'}]}>Search Your Listings</Text>
                </View>
                <SearchButton/>
            </View>
            <FilterButton/>
        </View>
    )
}


const Listing = (props: {listing : any}) => {
    return(
        <TouchableOpacity style={styles.listingCard}>
            <View style={{flex: 1.2}}>
                <Image source={{uri: props.listing.img}} style={styles.listingImg} />
            </View>
            <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: '5%'}}>
                <Text style={styles.listingTitle} numberOfLines={3} ellipsizeMode="tail">{props.listing.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.listingPrice}>${props.listing.price}</Text>
                    <Text style={[styles.listingPrice, {color: 'black'}]}>View {'>'}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
        marginVertical: '5%',
        height: 120,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25
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
        alignSelf: 'flex-start'
    },
    listingPrice: {
        fontSize: 14,
        fontFamily: 'OpenSans_500Medium',
        alignSelf: 'flex-start',
        marginTop: '3%',
        color: '#113125'
    }
})

export default CreateScreen;