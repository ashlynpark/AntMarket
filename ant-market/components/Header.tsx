import {View, SafeAreaView, Image } from 'react-native';
import { Fragment } from 'react';

const Header = () => {
    return (
            <SafeAreaView style={{alignItems: 'center', backgroundColor: '#678D58' }}>
                <Image style={{height: 80, width: 450, resizeMode: "cover"}} source={require("../assets/antmarket_header.png")}/>
            </SafeAreaView>
    )
}

export default Header;