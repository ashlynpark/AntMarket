import {StyleSheet, Text, TextInput, ImageBackground, View, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import Carousel from 'react-native-reanimated-carousel';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const buttonBg = 'https://images.footballfanatics.com/uc-irvine-anteaters/uc-irvine-anteaters-custom-mascot-5-ast_ss10_p-101152583+u-sjlqljlyfh5j7h33lcpm+v-z7fmvxdc5ef0uytjnjc3.jpg?_hv=2&w=900';

const HomeScreen = ({}) => {
    const navigation = useNavigation();
    const width = Dimensions.get('window').width;
    const categories = [
                            {
                                'name': 'Furniture',
                                'img': 'https://images.unsplash.com/photo-1550254478-ead40cc54513?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2761&q=80'},
                            {
                                'name' : 'Supplies',
                                'img' : 'https://images.unsplash.com/photo-1629470937928-5f873c06005c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'},
                            {
                                'name' : 'Electronics',
                                'img': 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3001&q=80'},
                            {
                                'name': 'Clothing',
                                'img':'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1478&q=80'},
                            {
                                'name': 'Miscellaneous',
                                'img' : 'https://images.squarespace-cdn.com/content/v1/5b60d4fa70e802968763e7f5/1a57663c-9766-429c-b597-4ae31d4aff49/Screen+Shot+2023-01-26+at+5.53.11+PM.png?format=2500w'}]

    return(
        <Screen preset="scroll">
            <Header/>
            <SafeAreaView>
                <View>
                    <Search/>
                    <View>
                        <Tags tags={["furniture", "textbook", "vintage", "sofa", "shirt"]}/>
                    </View>
                    <TouchableOpacity style={styles.postButt}  onPress={() => navigation.navigate('Swipe Deck')}>
                        <ImageBackground source={require('../assets/anteaterplush_tiny.png')} resizeMode='repeat'>
                            <View  style={{ flex: 1, flexDirection:'row', alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
                                <Text style={styles.postButtLabel}>Free Stuff Here!</Text>
                            </View>
                        </ImageBackground>    
                    </TouchableOpacity>
                    <View style={{margin: '5%'}}>
                        <Text style={styles.header}>
                            Browse Categories
                        </Text>
                        <CategoryButtons categories={categories}/>
                    </View>
                </View>
            </SafeAreaView>
        </Screen>

    );

}

const Search = () => {
    const [text, onChangeText] = useState('');
    const navigation = useNavigation();

    const SearchButton = () => {
        return(
        
            <TouchableOpacity onPress={() => {navigation.navigate('Search Results', text)}} style={[styles.buttonContainer, {backgroundColor: '#A6C48A'}]}>
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

const CategoryButtons = (props: {categories:any[]}) => {
    const navigation = useNavigation()
    return(
        <View style={{flex: 1}}>
            {props.categories.map((item, index) => { 
                return(
                    <TouchableOpacity key={index} style={styles.catButt} onPress={() => {navigation.navigate('Search Results2')}}>
                        <View style={{flex: 1}}>
                            <Image source={{uri: item.img}} style={styles.catButtImg} />
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.catButtTitle}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
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
    header: {
        fontSize: 22,
        fontFamily: 'OpenSans_700Bold',
        color: '#113125'
    },
    catButt: {
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
        shadowOpacity: 0.25
    },
    catButtImg: {
        height: '100%',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        overflow: 'hidden',
        resizeMode: 'cover'

    },
    catButtTitle: {
        fontSize: 20,
        fontFamily: 'OpenSans_600SemiBold',
        alignSelf: 'center',
        color: '#678D58'
    },
    postButt: {
        alignSelf: 'center',
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        marginVertical: '5%',
        height: 110,
        shadowColor: 'black',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: '2%'
    },
    postButtLabel: {
        fontSize: 36,
        fontFamily: 'OpenSans_700Bold_Italic',
        alignSelf: 'center',
        textAlign: 'center',
        color: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        paddingHorizontal: '7%'
    },
})

export default HomeScreen;