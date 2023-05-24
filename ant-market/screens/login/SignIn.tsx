import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList} from 'react-native';
import Screen from '../../components/Screen';
import Header from '../../components/Header';
import { useFonts, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import { FontAwesome5 } from '@expo/vector-icons';  


const SignIn = () => {
    let [fontsLoaded] = useFonts({
        OpenSans_300Light,
    });
    
    if (!fontsLoaded) {
        return null;
    }

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <Header/>
                <View>
                    <Search/>
                    <Tags tags={["furniture", "textbook", "vintage", "sofa", "shirt"]}/>
                    <Text>
                        Home Page
                    </Text>
                </View>
            </SafeAreaView>
        </Screen>

    );

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
        <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.searchBarContainer}>
                <View style={{flex: 5, padding: '2%'}}>
                    <Text style={[styles.defaultFont , {fontSize: 15, color: 'black'}]}>Search</Text>
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
    }
})

export default SignIn;