import {StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, SafeAreaView, ScrollView, Touchable, FlatList, Image} from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import { FontAwesome5} from '@expo/vector-icons';  
import Carousel from 'react-native-reanimated-carousel';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

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
  costs: Cost[];
}

const CheckoutScreen = () => {
    const width = Dimensions.get('window').width;

    const items: Item[] = [
      {
        name: 'IKEA Bookend x2',
        cost: 6.00,
        image: 'https://www.ikea.com/be/en/images/products/bottna-book-end-light-grey-green-anthracite__0611766_pe685559_s5.jpg?f=s'
      },
      // {
      //   name: 'Physics Book',
      //   cost: 6.00,
      //   image: 'https://r.wheelers.co/bk/small/978187/9781877530685.jpg'
      // },
      // {
      //   name: 'Shower Rings',
      //   cost: 0.00,
      //   image: 'https://target.scene7.com/is/image/Target/GUEST_a1d97a24-cba9-40e9-b235-76f68c8454fd?wid=1000&hei=1000&qlt=80&fmt=webp'
      // }
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

    return(
        <Screen preset="scroll">
            <SafeAreaView>
                <View>
                    <View style={{marginBottom: '2%'}}>
                      <CheckoutHeader/>
                    </View>
                    <Border/>
                    <View style={{marginHorizontal: '5%', marginTop: '2%'}}>
                        <Text style={styles.header}>
                            Payment Information
                        </Text>
                        <Text style={styles.header1}>
                            Credit Card / Debit Card
                        </Text>
                        <CardNumberBox />
                        <ExpBox />
                        <SecurityBox />
                        <CardholderBox />
                    </View>
                    <View>
                        <OrBorder />
                    </View>
                    <View style={{marginHorizontal: '5%'}}>
                        <PayButtons />
                    </View>
                    <View>
                        <BorderNew/> 
                    </View>
                    <View style={{marginHorizontal: '5%'}}>  
                        <SummaryList items={items} title="Order Summary"/>
                    </View>
                    <View style={{marginTop: '-3%'}}>
                        <BorderNew/> 
                    </View>
                    <View style={{marginHorizontal: '5%'}}>  
                        <CostList costs={costs}/>
                    </View>
                    <View style={{marginTop: '-3%'}}>
                        <BorderNew/> 
                    </View>
                    <View style={{marginTop: '5%'}}>
                      <PayOrder />
                    </View>
                </View>
            </SafeAreaView>
        </Screen>

    );

}

const CheckoutHeader = () => {
    const navigation = useNavigation();
    
    const handleBackPress = () => {
        // Handle the back button press event
        // navigation.navigate(HomeScreen)
      };
    
      return (
        <View style={styles.container}>
        <TouchableOpacity onPress={handleBackPress}>
          <FontAwesome5 name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Checkout</Text>
        <View style={styles.spacer} />
      </View>
      );
}

const Border = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.border} />
    </View>
  )
  };

  const OrBorder = () => {
    return (
      <View style={styles.orContainer}>
        <View style={styles.leftBorder} />
        <View style={styles.orContainer1}>
          <Text style={styles.orText}>or</Text>
        </View>
        <View style={styles.rightBorder} />
      </View>
    )
  }

  const BorderNew = () => {
    return (
      <View style={styles.lineContainer}>
        <View style={styles.border1} />
      </View>
    )
  }
  const CardNumberBox = () => {
    const [text, setText] = useState('');

    const textColor = text ? 'black' : 'gray';

    const handleChangeText = (inputText: any) => {
      setText(inputText);
    };

    return (
      <View style={styles.inputBox1}>
        <TextInput
          style={[styles.boxText, {color: textColor}]}
          onChangeText={handleChangeText}
          value={text}
          placeholder="Card Number"
        />
      </View>
    );
  }

  const ExpBox = () => {
    const [text, setText] = useState('');

    const textColor = text ? 'black' : 'gray';

    const handleChangeText = (inputText: any) => {
      setText(inputText);
    };

    return (
      <View style={styles.inputBox2}>
        <TextInput
          style={[styles.boxText, {color: textColor}]}
          onChangeText={handleChangeText}
          value={text}
          placeholder="Exp. Date (MM/YY)"
        />
      </View>
    );
  }

  const SecurityBox = () => {
    const [text, setText] = useState('');

    const textColor = text ? 'black' : 'gray';

    const handleChangeText = (inputText: any) => {
      setText(inputText);
    };

    return (
      <View style={styles.inputBox2}>
        <TextInput
          style={[styles.boxText, {color: textColor}]}
          onChangeText={handleChangeText}
          value={text}
          placeholder="Security Code"
        />
      </View>
    );
  }

  const CardholderBox = () => {
    const [text, setText] = useState('');

    const textColor = text ? 'black' : 'gray';

    const handleChangeText = (inputText: any) => {
      setText(inputText);
    };

    return (
      <View style={styles.inputBox1}>
        <TextInput
          style={[styles.boxText, {color: textColor}]}
          onChangeText={handleChangeText}
          value={text}
          placeholder="Cardholder Name"
        />
      </View>
    );
  }

  const PayButtons = () => {
    const handleApplePayPress = () => {
      console.log('Apple Pay button pressed');
    };
  
    const handleGooglePayPress = () => {
      console.log('Google Pay button pressed');
    };
  
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleApplePayPress} style={styles.button}>
          <Entypo name="app-store" size={28} color="black" />
          <Text style={styles.buttonText}>Apple Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGooglePayPress} style={styles.button}>
          <AntDesign name="google" size={28} color="black" />
          <Text style={styles.buttonText}>Pay</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const SummaryList: React.FC<SummaryListProps> = ({items, title}) => {
    return(
      <View style={styles.summaryContainerMain}>
        <Text style={[styles.header, {marginBottom: 5}]}>{title}</Text>
        {items.map((item, index) => (
          <View style={[styles.costContainer, {marginBottom: 8}]} key={index}>
            <View style={styles.leftContainer}>
              <Image source={{uri:item.image}} style={styles.image} />
              <Text >{item.name}</Text>
            </View>
            <View style={styles.rightContainer}>
              {item.cost === 0 ? (
                <Text style={styles.cost}>Free</Text>
              ) : (
              <Text style={styles.cost}>${item.cost.toFixed(2)}</Text>
              )}
            </View>
          </View>
        ))}
      </View>
    )
  }

  const CostList: React.FC<CostListProps> = ({costs}) => {
    return(
      <View style={styles.summaryContainerMain}>
        {costs.map((cost, index) => (
          <View style={styles.costContainer} key={index}>
            <View style={styles.leftContainer}>
              <Text style={styles.regText}>{cost.name}</Text>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.cost}>${cost.cost.toFixed(2)}</Text>
            </View>
          </View>
        ))}
      </View>
    )
  }
  
  const PayOrder = () => {
    const handlePress = () => {
      // Add your functionality here
      console.log('Pay button pressed');
    };
  
    return (
        <TouchableOpacity onPress={handlePress} style={styles.payButton}>
          <Text style={styles.payButtonText}>Pay Order</Text>
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
                fontSize: 22,
                fontFamily: 'OpenSans_700Bold',
                color: '#113125'
    },
    header1: {
                fontSize: 20,
                fontFamily: 'OpenSans_300Light',
                color: '#113125',
                paddingTop: '1%',
                paddingBottom: '3%'
    },
    regText: {
                fontSize: 18,
                fontFamily: 'OpenSans_300Light',
                color: '#113125',
                paddingBottom: '2%',
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
      marginTop: '6%'
    },
    orContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      paddingTop: '0.2%'
    },
    leftBorder: {
      flex: 1,
      height: 1,
      backgroundColor: 'black',
    },
    orContainer1: {
      paddingHorizontal: 10,
    },
    orText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    rightBorder: {
      flex: 1,
      height: 1,
      backgroundColor: 'black',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#678D58',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
      width: '45%',
      height: 70, 
      elevation: 2, // Controls the depth of the shadow
      shadowColor: '#000', // Shadow color
      shadowOpacity: 0.3, // Shadow opacity
      shadowRadius: 4, // Shadow radius
      shadowOffset: {
        width: 0, // Horizontal offset of the shadow
        height: 2, // Vertical offset of the shadow
      },
    },
    buttonText: {
      color: 'black',
      marginLeft: 3,
      fontSize: 22,
      fontWeight: 'bold',
    },
    summaryContainerMain: {
      marginTop: 16,
    
    },
    summaryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // Center the row vertically
      paddingHorizontal: 16,
      marginTop: 16,
    },
    costContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center', // Center the row vertically
      // marginTop: 16,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
      width: 110,
      borderRadius: 10,
      height: 70,
      marginRight: 8,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    rightContainer: {
      marginLeft: 'auto',
      // marginRight: -16
    },
    cost: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'OpenSans_300Light',
      color: '#113125',
                // paddingBottom: '2.5%'
    },
    cost1: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'OpenSans_300Light',
      color: '#113125',
                // paddingBottom: '2.5%'
    },
    borderWrapper: {
      marginHorizontal: '5%'
    },
    payButton: {
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
      elevation: 2, // Controls the depth of the shadow
      shadowColor: '#000', // Shadow color
      shadowOpacity: 0.3, // Shadow opacity
      shadowRadius: 4, // Shadow radius
      shadowOffset: {
        width: 0, // Horizontal offset of the shadow
        height: 2, // Vertical offset of the shadow
      },
    },
    payButtonText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'OpenSans_700Bold'
    },
  });

export default CheckoutScreen;