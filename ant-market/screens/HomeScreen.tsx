import {StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import Carousel from 'react-native-reanimated-carousel';


const HomeScreen = () => {
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

export default HomeScreen;