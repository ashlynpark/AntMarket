import React, { useState, useMemo } from 'react'
import { ImageBackground, Text, View, SafeAreaView, Button, StyleSheet, TouchableOpacity } from 'react-native'
import TinderCard from 'react-tinder-card';
import dummyListings from '../data/dummyListings.json';
import Screen from '../components/Screen';
import { Ionicons, Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const db = dummyListings;

const alreadyRemoved: any[] = []
let charactersState = db // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.

const SwipeDeck = () => {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState()

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction: any, nameToDelete: string) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (name: string) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const swipe = (dir: string) => {
    const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
      const index = db.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      //childRefs[index].current.swipe(dir) // Swipe the card!
    }
  }

    const navigation = useNavigation();

    // const goToProfile = (listing) => {
    //     const data = listing;
    //     console.log('listing')
    //     navigation.navigate('userProfile', data);
    // };
  

  return (
    <View>
        <SafeAreaView style={[styles.titleContainer,]}>
          <TouchableOpacity style={{flexDirection: 'row', flex:1, justifyContent:'flex-start', alignItems: 'flex-start', marginTop: '1%', marginLeft: '4%'}}>
            <Feather name="arrow-left-circle" size={30} color="white" />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: '15%'}}>
           <Text style={styles.titleText}>Browse Free Items</Text>
          </View>
        </SafeAreaView>
      
      <View style={styles.cardContainer}>
        
        {characters.map((listing, index) => 
            // <TouchableOpacity key={listing.name}  onPress={() => {goToProfile(listing)}}>
                <TinderCard key={listing.name} onSwipe={(dir) => swiped(dir, listing.name)} onCardLeftScreen={() => outOfFrame(listing.name)} >
                    <View style={[styles.card, ]}>
                    <ImageBackground style={styles.cardImage} source={{uri: listing.image}}>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.subheading}>{listing.name}</Text> 
                            <Text style={[styles.infoText, {marginLeft: '6%', fontSize: 17, color: '#ffffff'}]}><Ionicons name="person-circle-sharp" size={18} color="#cdd4d1" /> {listing.seller}</Text>                  
                            <Text style={[styles.infoText, {fontSize: 17,lineHeight: 30, color: '#cdd4d1'}]}>{listing.location}</Text>
                        </View>
                    </ImageBackground>
                    <TouchableOpacity style={{}} onPress={() => {}}>
                        <Text style={[styles.infoText, {fontSize: 18, marginVertical: '5%'}]} numberOfLines={3} ellipsizeMode="tail">{listing.bio}</Text>
                    </TouchableOpacity>
                    </View>
                </TinderCard>
            // </TouchableOpacity>
        )}                


      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={[styles.button]}>
            <Ionicons name="arrow-undo" size={24} color="#ADACB5" />
            <Text style={styles.buttonText}>Skip</Text>
        </View>
        <View style={[styles.button,]}>
        <Ionicons name="arrow-redo" size={24} color="#ADACB5" />
            <Text style={[styles.buttonText,]}>Add to Cart</Text>
        </View>
      </View>
      {/* {lastDirection ? <Text style={styles.infoText} key={lastDirection}>You swiped {lastDirection}</Text> : <Text style={styles.infoText}>Swipe a card or press a button to get started!</Text>} */}
    </View>
  )
}

export default SwipeDeck;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      width: '100%',
      maxWidth: 350,
      height: 550,
      alignSelf: 'center',
      marginRight: '3%'
    },
    card: {
        position: 'absolute',
        backgroundColor: '#A6C48A',
        width: '100%',
        height: 500,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 10,
        borderRadius: 10,
        resizeMode: 'cover',
        marginHorizontal: '2%',
        marginTop: '15%',
        paddingBottom: '30%',
        padding: '4%',

    },
    cardTextContainer: {
        marginTop: '80%',
        flex: 1,
        backgroundColor: 'rgba(17, 49, 37, 0.7)',
        width: '100%',
        height: '100%',
        paddingHorizontal: '3%',
        paddingTop: '3%',
        paddingBottom: '3%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    button: {
        marginHorizontal: '10%',
        borderRadius: 5,
        marginTop: '13%',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 18,
        color: '#ADACB5',
        fontFamily: 'OpenSans_700Bold',
        paddingHorizontal: '3%',
        textAlign: 'center'
    },
    infoText: {
      fontSize: 20,
      fontFamily: 'OpenSans_500Medium',
      marginHorizontal: '7%',
      color: '#113125',
     
    },
    titleContainer: {
        backgroundColor: '#678D58',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 27,
        color: '#FFFFFF',
        fontFamily: 'OpenSans_600SemiBold',
        paddingHorizontal: '3%',
        paddingBottom: '5%',
        textAlign: 'center'
    },
    imageWrapper: {
        height: 250,
        width: 250,
        overflow: 'hidden',
        alignSelf: 'center',
        margin: 10,
    },
    subheading: {
        fontSize: 26,
        fontFamily: 'OpenSans_700Bold',
        margin: 3,
        color: '#EAE8FF',
        paddingHorizontal: '5%'
    },

  })
  