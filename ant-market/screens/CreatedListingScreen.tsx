import {StyleSheet, Text, View, Modal, Button, TouchableOpacity, SafeAreaView, ImageBackground, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import { MaterialIcons } from '@expo/vector-icons'; 
import React, { useState } from 'react';
import { FAB, Icon, IconButton } from '@react-native-material/core';
import { AntDesign } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";
import Svg, {Circle} from 'react-native-svg';




const CreatedListingScreen = () => {

    return(
        <Screen preset="scroll">
            <View>
                <Header/>
                <SafeAreaView>
                <View>
                    <IMG></IMG>
                    <ListingLabel/>
                    <ProfileCard/>
                    <Description/>
                    <View style={styles.allTags}>
                        <Tags tags={["office", "lamp", "desk"]}/>
                    </View>
                    <View style={styles.saveAddContainer}>
                        <AddtoCartButton/>
                        <SaveButton/>
                    </View>
                </View>
                </SafeAreaView>                
            </View>
        </Screen>

    );

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

const IMG = () => {

    const img = 'https://images.unsplash.com/photo-1623678624314-c3efb63fb2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80'

    return (
        <View style={styles.imgContainer}> 
            <Image source={{uri: img}}
                style = {{height: 230, width: 375, flex: 1, resizeMode: 'cover'}} />
        </View>
    )
}

const ListingLabel = () => {

    const title = "Desk lamp"
    const price = "$10.00"

    return (

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

    )

}

const Description = () => {
    return( 
        <View style={styles.descriptionContainer}>
             <Text style={{fontSize: 16}}>
                <Text style={{fontWeight: 'bold'}}>Description: </Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui leo, posuere ut luctus sed, tincidunt at purus. Integer eros nunc, aliquam ut posuere sed, tempor id neque.
            </Text>
        </View>
    )


}

const SaveButton = () => {
    return(
        <View style={styles.saveButtonPosition}>
            <TouchableOpacity style={styles.saveButton}>
                <MaterialIcons name='bookmark-border' size={37}></MaterialIcons>
            </TouchableOpacity>
        </View>
    )

}

const AddtoCartButton = () => {
    return(
        <View style={styles.addButtonPosition}>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonTitle}> Add to Cart </Text>
            </TouchableOpacity>
        </View>
    )

}

const ProfileCard = () => {
    return(
        <View style={styles.profileContainer}>
            <Image style={{height: 45, width: 45}} source={require("../assets/user.png")}></Image>
            <View style={styles.usernameAndRating}>
              <Text style={styles.username}> petr_anteatr </Text>
              <Image style={{height: 20, width: 100}} source={require("../assets/rating.png")}/>
            </View>
            <View style={{justifyContent: 'flex-end', flex: 1}}>            
              <MessageButton/>  
            </View>
        </View>
    )

}

const MessageButton = () => {
  return(
      <View>
          <TouchableOpacity style={styles.messageButton}>
              <Text style={{fontSize: 15, color: "black"}}> MESSAGE </Text>
          </TouchableOpacity>
      </View>
  )

}

const styles = StyleSheet.create({
    imgContainer: {
        width: "100%",
        marginTop: '-5%',
        position: 'absolute',
        resizeMode: 'cover',
    
    },

    listingLabel: {
        backgroundColor: '#678D58',
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginTop: '56%',

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

    profileContainer: {
      flex: 1,
      flexDirection: 'row',
      marginTop: '3%',
      paddingLeft: '7%'
    },

    username: {
      paddingTop: '2%',
      fontSize: 16,
    },

    usernameAndRating: {
      marginLeft: '4%',
      justifyContent:'flex-start',
      flex: 1,

    },

    messageButton: {
      width: 110,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: '#A6C48A',
    },

    descriptionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:'7%',
        paddingRight:'7%',
        marginTop: '5%',


    },

    listingTitle: {
        fontFamily: 'OpenSans_Light',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },

    allTags: {
        flexDirection: 'row',
        paddingLeft: '6%',
        marginTop: '5%',

    },

    saveButtonPosition: {
        justifyContent:'flex-end',
        flex: 1,
        paddingRight: '9%',
    },

    saveButton: {
        width: 53,
        height: 53,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 60,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: '#A6C48A',
    },

    addButtonPosition: {
        justifyContent:'flex-start',
        paddingLeft: '5%',
        flex: 1,

    },

    addButton: {
        width: 150,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: "#678D58",
        borderWidth: 1,
        borderColor: '#A6C48A',
        

    },

    addButtonTitle: {
        fontSize: 17,
        color: 'white',
        justifyContent: 'center',

    },

    saveAddContainer: {
        flexDirection: 'row',
        flex: 1,
        width: 600,
        marginTop: '4%',
        justifyContent: 'center',
        alignItems: 'center',

    },

    testContainer: {
        paddingTop: 350,
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


})

export default CreatedListingScreen;