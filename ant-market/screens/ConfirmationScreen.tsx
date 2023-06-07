import {StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5 } from '@expo/vector-icons';  
import Carousel from 'react-native-reanimated-carousel';

interface Item{
  name: string;
  cost: number;
  image: string;
}

interface SummaryListProps{
  items: Item[];
  title: string;
}

interface Cost{
  name: string;
  cost: number;
}

interface CostListProps{
  items: Item[];
}

const ConfirmationScreen = () => {
    const items: Item[] = [
      {
        name: 'IKEA Bookend x2',
        cost: 6.00,
        image: 'https://www.ikea.com/be/en/images/products/bottna-book-end-light-grey-green-anthracite__0611766_pe685559_s5.jpg?f=s'
      },
      {
        name: 'Physics Book',
        cost: 8.00,
        image: 'https://r.wheelers.co/bk/small/978187/9781877530685.jpg'
      }
    ]

    const costs: Cost[] = [
      {
        name: 'Subtotal',
        cost: 6.00
      },
      {
        name: 'Tax',
        cost: 0.93
      },
      {
        name: 'Total',
        cost: 6.93
      }
    ]

    const width = Dimensions.get('window').width;
    const taxRate = 0.0725; 

    // Calculate total cost
    const subtotal = items.reduce((total, item) => total + item.cost, 0);

    // Calculate total tax
    const totalTax = items.reduce((total, item) => total + (item.cost * taxRate), 0);

    // Calculate total including tax
    const total = subtotal + totalTax;
    return(
        <Screen preset="scroll">
            <SafeAreaView>
              <View>
                <Header />
              </View>
                  <View style={{margin: '5%'}}>
                    <Text style={styles.header}>Your Order Is Complete!</Text>
                    <CircleWithCheckmark />
                    <Text style={styles.header1}>Total: ${total.toFixed(2)}</Text>
                  </View>
                  <View>
                    <BorderNew />
                  </View>
                  <View style={{margin: '5%'}}>
                    <Text style={styles.regText}>To receive your items, reach out to the seller!</Text>
                    <Text style={styles.regText}>Seller Contact Info: XXXX</Text>
                  </View>
                  <View>
                    <ContinueButton />
                  </View>
            </SafeAreaView>
        </Screen>

    );

}

const CircleWithCheckmark = () => {
  return (
    <View style={styles.circleCenter}>
      <View style={styles.circleContainer}>
        <FontAwesome5 name="check" style={styles.checkmark} />
      </View>
    </View>
  );
};

const BorderNew = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.border1} />
    </View>
  )
}

const ContinueButton = () => {
  const handlePress = () => {
    // Add your functionality here
    console.log('Continue button pressed');
  };

  return (
      <TouchableOpacity onPress={handlePress} style={styles.contButton}>
        <Text style={styles.contButtonText}>Continue Shopping</Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingTop: 10,
      justifyContent: 'space-between',
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      flex: 1,
      fontFamily: 'OpenSans_700Bold',
      textAlign: 'center',
      color: '#113125'
    },
    spacer: {
      width: 24, // Adjust the width of the spacer to create space between the back button and the header
    },
    defaultFont: {
                fontFamily: 'OpenSans_300Light'
    },
    header: {
                fontSize: 40,
                fontFamily: 'OpenSans_700Bold',
                color: '#113125',
                textAlign: 'center',
                justifyContent: 'center',
                padding: 15,
    },
    header1: {
                fontSize: 30,
                fontFamily: 'OpenSans_700Bold',
                color: '#113125',
                textAlign: 'center',
                justifyContent: 'center',
                padding: 10,
              
    },
    regText:{
                fontSize: 22,
                fontFamily: 'OpenSans_700Bold',
                color: '#113125',
                textAlign: 'center',
                justifyContent: 'center',
                padding: 10,
    },
    inputBox1: {
      borderWidth: 1,
      borderColor: '#678D58',
      borderRadius: 5,
      height: 40,
      marginBottom: '2.5%'
    },
    inputBox2: {
      borderWidth: 1,
      borderColor: '#678D58',
      borderRadius: 5,
      height: 40,
      width: '50%',
      marginBottom: '2.5%'
    },
    boxText: {
      color: '#848484',
      fontSize: 16,
      fontFamily: 'OpenSans_300Light',
      paddingLeft: '2%',
      paddingTop: '2%'
    },
    circleContainer: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#A6C48A',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
    checkmark: {
      fontSize: 40,
      color: 'white',
    },
    circleCenter: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    lineContainer: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    border: {
      height: 1,
      width: '95%',
      backgroundColor: 'black',
    },
    border1:{
      height: 1,
      width: '95%',
      backgroundColor: 'black',
      marginTop: '2%'
    },
    contButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: '#113125',
      padding: 10,
      width: 330,
      height: 60,
      marginLeft:'auto',
      marginRight: 'auto',
      marginTop: '5%',
      elevation: 2, // Controls the depth of the shadow
      shadowColor: '#000', // Shadow color
      shadowOpacity: 0.3, // Shadow opacity
      shadowRadius: 4, // Shadow radius
      shadowOffset: {
        width: 0, // Horizontal offset of the shadow
        height: 2, // Vertical offset of the shadow
      },
    },
    contButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'OpenSans_700Bold'
    },
  });

export default ConfirmationScreen;
