import {StyleSheet, Text, View, Modal, Button, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import { Feather, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import StarRating from 'react-native-star-rating-widget';

// const listing =  {
//     "name": "UCI sweatshirt ",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor piscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor piscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor piscing elit, sed do eiusm oinc ididunt od tempor incididu ut labore et dolore magna aliqua.",
//     "location": "Irvine, California",
//     "image": "https://cdn.shopify.com/s/files/1/0009/0839/4551/products/CIR-CREW-001_a7753bad-98b1-4d6f-a276-145f27a7c335_1400x.png?v=1668527510",
//     "seller": "irvinecompanysux",
//     "price" : 0
// }

const SingleListing = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const listing = route.params
    return(
        <Screen preset='scroll'>
            <SafeAreaView style={{marginBottom: '5%', flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start', alignItems: 'flex-start', marginTop: '3%', marginLeft: '4%'}}>
                    <Feather name="arrow-left-circle" size={30} color="#7B7B7B" />
                    <Text style={{alignSelf: 'center', marginLeft: '3%', fontSize: 20, color: '#7b7b7b', fontFamily: 'OpenSans_500Medium'}}>Back</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: listing.image}}/>
            </View>
            <View style={styles.titleContainer}>
                <Text style={[styles.titleText, {flex: 5}]}>{listing.name}</Text>
                <Text style={[styles.titleText, {flex: 1, textAlign: 'right', fontFamily: 'OpenSans_600SemiBold'}]}>{listing.price > 0? "$"+listing.price : "FREE"}</Text>
            </View>
            <View style={styles.subheadingContainer}>
                <View style={{flexDirection: 'row', flex: 2.5}}>
                    <Ionicons name="person-circle-sharp" size={42} color="#454745" style={{marginRight: 3}} />
                    <View style={{marginRight: '6%'}}>
                        <Text style={styles.sellerText}>{listing.seller}</Text>
                        <StarRating rating={4.5} onChange={() => { }} starSize={18} color='#454745' starStyle={{ marginHorizontal: 1, alignSelf: 'center', alignItems: 'center'}} /> 
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <MessageButton/>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={{fontFamily: 'OpenSans_700Bold', color: '#454745', fontSize: 14}}>Description</Text>
                <Text style={{fontFamily: 'OpenSans_400Regular', color: '#454745', fontSize: 14, marginTop: 4}}>{listing.description}</Text>
                <Tags tags={["tag1", "tag2", "tag3"]}/>
            </View>
                <TouchableOpacity style={styles.cartButtonContainer}>
                    <FontAwesome5 name="cart-plus" size={24} color="#4a7838" style={{alignSelf: 'center', marginLeft: '5%'}}/>
                    <Text style={{paddingVertical: '4%', paddingLeft: '3%', paddingRight: '7%', fontFamily: 'OpenSans_700Bold', fontSize: 18, color: '#4a7838'}}>Add to Cart</Text>
                </TouchableOpacity>
        </Screen>
    )
}

const MessageButton = () => {
    return(
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={{fontFamily: 'OpenSans_700Bold', fontSize: 14, alignSelf: 'center', textAlign: 'center', color: 'white'}}>MESSAGE</Text>
        </TouchableOpacity>
    )
}

const Tags = (props: {tags:string[]}) =>{
    return(
        <View style={{alignSelf:'flex-end', marginTop: '10%', flexDirection: 'row'}}>
                {props.tags.map((item, index) => {
                    return(
                        <View key={index} style={styles.singleTag}>
                            <Text style={[{fontFamily: 'OpenSans_300Light', fontSize: 12, margin: '3%'}]}>#{item}</Text>
                        </View>
                    )
                })}
        </View>

    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#1e4738',
        borderRadius: 7,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        height: 'auto',
        width: 'auto',
        padding: '10%',
        marginRight: '5%'
    },
    cartButtonContainer:{
        backgroundColor: 'white',
        borderColor: '#A6C48A',
        borderWidth: 2,
        borderRadius: 8,
        shadowColor: '#A6C48A',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        height: 'auto',
        width: 'auto',
        marginTop: '7%',
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: '7%',
    },
    titleContainer:{
        height: 'auto',
        width: '95%',
        alignSelf: 'center',
        backgroundColor: "#678D58",
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '4%',
        flexWrap: 'wrap',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: -4},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    titleText:{
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
        color: 'white',
        flex: 1,
        alignSelf: 'center',
    },
    subheadingContainer:{
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        flexDirection: 'row',
        padding: '3%',
        marginVertical: '5%',
        flexWrap: 'wrap',
        marginLeft: '2%'
    },
    sellerText:{
        fontFamily: 'OpenSans_600SemiBold',
        fontSize: 15,
        color: '#454745',
        flex: 3,
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginLeft: 3
    },
    descriptionContainer:{
        height: 'auto',
        width: '95%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: '5%',
        flexWrap: 'wrap',
    },
    imageContainer:{
        height: 'auto',
        width: '95%',
        overflow: 'hidden',
        alignSelf: 'center',
        backgroundColor: '#dbdbdb',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    image:{
        height: 300,
        resizeMode: 'contain'
    },
    singleTag:{
        borderRadius: 20,
        alignItems: 'center',
        padding: '2%',
        backgroundColor: '#fafcfb',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: '2%',
        width: 'auto'
    },
})


export default SingleListing;