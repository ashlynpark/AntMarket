import {View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Fragment } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
import ProfileSaved from '../../screens/Profile/ProfileSaved';
import ProfileMessages from '../../screens/Profile/ProfileMessages';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';


const ProfileTabs = () => {
  const [selection, setSelection] = useState(1);
  const pages = ["Shop", "Saved", "Messages"];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: "white" } : null]} onPress={() => {setSelection(1); navigation.navigate('ProfileScreen');}}>
          <Text style={[styles.btnText, selection === 1 ? { color: "green" } : null]}>{pages[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: "white" } : null]} onPress={() => {setSelection(2);  navigation.navigate('ProfileSaved');}}>
          <Text style={[styles.btnText, selection === 2 ? { color: "green" } : null]}>{pages[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: "white" } : null]} onPress={() => {setSelection(3); navigation.navigate('ProfileMessages')}}>
          <Text style={[styles.btnText, selection === 3 ? { color: "green" } : null]}>{pages[2]}</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

export default ProfileTabs;

const styles = StyleSheet.create ({
  view: {
      marginTop: 10,
      flex: 1
  },
  nav: {
    marginTop: 100
  },
  btnGroup: {
      flexDirection: 'row',
      alignItems: "center",
  },
  btn: {
      flex: 1,
      borderColor: '#6B7280',
      borderBottomWidth: 1
  },
  btnText: {
      textAlign: 'center',
      paddingVertical: 15,
      fontSize: 14
  }
})