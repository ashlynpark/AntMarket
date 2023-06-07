import {StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, SafeAreaView, ScrollView, Touchable, FlatList} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import StarRating from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const savedListings = [
    {
        "name": "comfy armchair, GENTLY USED",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "location": "Houston, Texas",
        "image": "https://d6qwfb5pdou4u.cloudfront.net/product-images/6640001-6650000/6644132/7ae2465679cb87a90b5a5b5847d3a6a6d822fcb474177ddafa13e19219794d64/500-500-crop-0.jpg",
        "seller": "howard_g",
        "price": 50
    },
    {
        "name": "shoes",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "location": "Atlanta, Georgia",
        "image": "https://images.urbndata.com/is/image/FreePeople/78468865_010_m/?$a15-pdp-detail-shot$&fit=constrain&qlt=80&wid=640",
        "seller": "beach_gurl29",
        "price" : 0
    },
    {
        "name": "UCI sweatshirt",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor piscing elit, sed do eiusm oinc ididunt od tempor incididu ut labore et dolore magna aliqua sed do eiusmod tempor piscing elit, sed do eiusm oinc ididunt od tempor incididu ut labore et dolore magna aliqua.",
        "location": "Irvine, California",
        "image": "https://cdn.shopify.com/s/files/1/0009/0839/4551/products/CIR-CREW-001_a7753bad-98b1-4d6f-a276-145f27a7c335_1400x.png?v=1668527510",
        "seller": "irvinecompanysux",
        "price" : 0
    },    {
        "name": "pink vintage armchair hell yeah",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "location": "Irvine, California",
        "image": "https://cdn.shopify.com/s/files/1/0305/7700/0584/products/232-ROSIE_Pink_Vintage_Armchair.jpg?v=1581605997",
        "seller": "haha69",
        "price": 0

    }
]

const messages = [
    {
        "username": "howard_g",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "3 hours ago"
    },
    {
        "username": "beach_gurl29",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "2 days ago"
    },
    {
        "username": "i-eat-chairs",
        "message": "Hey is that armchair still available?",
        "timestamp": "1 week ago"
    },
    {
        "username": "timmyjimmy",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "1 week ago"
    },
    {
        "username": "peter1234",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "2 weeks ago"
    },
    {
        "username": "beter_the_eater",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "January 1, 2023"
    }
]

const reviews = [
    {
        "username": "user_38942",
        "title" : "Review title",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "January 1, 2023",
        "rating" : 4
    },
    {
        "username": "i-eat-chairs",
        "title" : "Still hungry . . .",
        "review": "Never responded to me about my armchair inquiry :(",
        "timestamp": "January 1, 2023",
        "rating" : 3
    },
    {
        "username": "beter_the_eater",
        "title" : "Review title",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "January 1, 2023",
        "rating" : 5
    },
    {
        "username": "timmyjimmy",
        "title" : "Review title",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "January 1, 2023",
        "rating" : 5
    },
    {
        "username": "peter1234",
        "title" : "Review title",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "timestamp": "January 1, 2023",
        "rating" : 5
    },
]


const ProfileScreen = () => {
    const Tab = createMaterialTopTabNavigator();

    return(
        <ScrollView contentContainerStyle={{flex: 1}}>
            <Header/>
            <ProfileHeader/>
            <Tab.Navigator 
                initialRouteName="Messages" 
                initialLayout={{ width: Dimensions.get('window').width }} 
                screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontFamily: 'OpenSans_700Bold'},
                    tabBarStyle: { marginTop: '4%', backgroundColor: '#113125', padding: '1%', shadowColor: 'black', shadowOffset: {width: 0, height: 2}, shadowOpacity:0.3 },
                    tabBarActiveTintColor: '#d5e8c3',
                    tabBarInactiveTintColor: '#87a66a',
                    tabBarIndicatorStyle: {backgroundColor: '#d5e8c3', height: 3}
                }}
                >
                    <Tab.Screen 
                        name="Messages"
                        component={Inbox}
                    />
                    <Tab.Screen 
                        name="Saved"
                        component={Saved}
                    />
                    <Tab.Screen 
                        name="Reviews"
                        component={Reviews}
                    />
                </Tab.Navigator>
        </ScrollView>

    );

}

const ProfileHeader = () => {
    const navigation = useNavigation();

    return (
        <View style={{flexDirection: 'row', paddingHorizontal: '4%', paddingVertical: '3%'}}>
            <View style={styles.profileContainer}>
                <Image style={styles.profilePic} source={require('../assets/uci.png')}/> 
            </View>
            <View style={{padding: '2%',}}>
                <Text style={styles.username}>
                    petr-anteatr
                </Text>
                <StarRating rating={4.5} onChange={() => { }} starSize={24} color='#454745' starStyle={{ marginHorizontal: 1, marginTop: '7%'}} /> 
                <Text style={[styles.regularText, {paddingLeft: 3}]}>
                    6 reviews
                </Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Listings')}style={[{ backgroundColor: 'white', height: 'auto', width: 'auto', borderColor: '#678D58', borderWidth: 1, marginTop: '3%', marginLeft: '5%', borderRadius: 5}]}>
                <Text style={[styles.regularText, {color: '#678D58', fontSize: 24, textAlign: 'center', fontFamily: 'OpenSans_700Bold',}]}>
                    5
                </Text>
                <Text style={[styles.regularText, {color: '#678D58', fontSize: 16, textAlign: 'center', lineHeight: 16}]}>
                    Listings
                </Text>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.regularText, {color: 'white', fontSize: 15, fontFamily: 'OpenSans_600SemiBold', textAlign: 'center', paddingHorizontal: '2%', paddingVertical: '1%',}]}>
                        VIEW SHOP
                    </Text>                            
                </View>

            </TouchableOpacity>
        </View>
    )
}

const Inbox = () => {
    return(
        <Screen preset="scroll">
            <View style={{marginTop: '2%'}}>
                {messages.map((item, index) => {
                    return(
                        <Message key={index} message={item}/>
                    )
                })}
            </View>
        </Screen>
    )
}

const Saved = () => {
    return (
        <Screen preset="scroll">
            {/* <View style={{marginTop: '2%', marginHorizontal: '5%'}}> */}
                {savedListings.map((item, index) => {
                    return(
                        <Listing key={index} listing={item}/>
                    )
                })}
            {/* </View> */}
        </Screen>
    )
}

const Reviews = () => {
    return (
        <Screen preset="scroll">
            {/* <View style={{marginTop: '2%', marginHorizontal: '5%'}}> */}
                {reviews.map((item, index) => {
                    return(
                        <Review key={index} review={item}/>
                    )
                })}
            {/* </View> */}
        </Screen>
    )
}

const Listing = (props: {listing : any}) => {
    const navigation = useNavigation();

    return(
        <TouchableOpacity style={styles.listingCard} onPress={() => {let data = props.listing; navigation.navigate("single listing", data)}}>
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

const Message = (props: {message : any}) => {

    return(
        <TouchableOpacity style={styles.messageCard}>
            <View style={[styles.profileContainer, {flex: 1, alignSelf: 'center'}]}>
                <Image source={require('../assets/default-profile.jpeg')} style={styles.profilePic} />
            </View>
            <View style={{flex: 3, justifyContent: 'space-between', padding: '3%'}}>
                <Text style={styles.messageUsername}>{props.message.username}</Text>
                <Text style={styles.messageBody} numberOfLines={2} ellipsizeMode="tail">{props.message.message}</Text>
                <Text style={[styles.messageBody, {fontFamily: 'OpenSans_600SemiBold', fontSize: 12, textTransform: 'uppercase'}]}>{props.message.timestamp}</Text>
            </View>
        </TouchableOpacity>
    )
}


const Review = (props: {review : any}) => {

    return(
        <TouchableOpacity style={styles.messageCard}>
            <View style={{flex: 3, justifyContent: 'space-between', padding: '3%'}}>
                <Text style={styles.messageUsername}>{props.review.title}</Text>
                <Text style={styles.messageUsername}>{props.review.username}</Text>
                <Text style={styles.messageBody} numberOfLines={2} ellipsizeMode="tail">{props.review.review}</Text>
                <Text style={[styles.messageBody, {fontFamily: 'OpenSans_600SemiBold', fontSize: 12, textTransform: 'uppercase'}]}>{props.review.timestamp}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfileScreen;

const styles = StyleSheet.create({
    username:{
        fontFamily: 'OpenSans_700Bold',
        fontSize: 20,
        color: '#454745',
        paddingLeft: 3
    },
    regularText:{
        fontFamily: 'OpenSans_400Regular',
        fontSize: 16,
        color: '#454745'
    },
    profileContainer:{
        width: width * 0.25, // Adjust the percentage as needed
        aspectRatio: 1, // Ensures a square container
        borderRadius: (width * 0.25) / 2, // Adjust the border radius based on the width
        overflow: 'hidden',
        borderColor: 'white',
        borderWidth: 2
    },
    profilePic:{
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    buttonContainer:{
        width: 'auto',
        height: 'auto',
        backgroundColor: '#678D58',
        marginTop: '10%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowOffset: {width: 0, height: 2},
        flex: 1
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
    messageCard: {
        borderRadius: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '90%',
        marginVertical: '2%',
        height: 'auto',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
    },
    messageUsername: {
        fontSize: 16,
        fontFamily: 'OpenSans_600SemiBold',
        alignSelf: 'flex-start',
    },
    messageBody: {
        fontSize: 14,
        fontFamily: 'OpenSans_400Regular',
        marginTop: '2%',
        color: '#454745'
    },
})