import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Touchable,
  FlatList,
  Image,
} from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { IconButton } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";
import Svg, { Circle } from "react-native-svg";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const bgImgCreate =
  "https://images.unsplash.com/photo-1597668900045-b9283c0de174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const Tab = createMaterialTopTabNavigator();
const currentlistings = [
  {
    title: "Desk lamp, good condition, LED light",
    img: "https://images.unsplash.com/photo-1623678624314-c3efb63fb2d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80",
    seller: "peter",
    price: 29.99,
  },
  {
    title: "Comfy armchair, only one weird stain",
    img: "https://images.offerup.com/8YKgZOyvM1BumuNh5bDEq5JvLMc=/1440x1920/17b8/17b8002bd7c04a35b985b0a2891ee7b6.jpg",
    seller: "peter",
    price: 29.99,
  },
  {
    title: "Computer mouse (roller ball)",
    img: "https://i.ebayimg.com/images/g/87MAAOSwq9NkTAti/s-l640.jpg",
    seller: "irvine-company-victim",
    price: 0,
  },
];
const soldlistings = [
  {
    title: "UCI hoodie, worn twice",
    img: "https://i.ebayimg.com/images/g/PkEAAOSwEAthru1l/s-l1600.jpg",
    seller: "petr_anteatr",
    price: 13.0,
  },
  {
    title: "My Entire Petr Sticker Collection",
    img: "https://images.squarespace-cdn.com/content/v1/5b60d4fa70e802968763e7f5/1a57663c-9766-429c-b597-4ae31d4aff49/Screen+Shot+2023-01-26+at+5.53.11+PM.png?format=2500w",
    seller: "peter",
    price: 42069.0,
  },
];

const CreateScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Header />
      <PostButt />
      <View style={{ marginTop: "4%", marginHorizontal: "5%" }}>
        <Text style={styles.header}>Your Listings</Text>
      </View>
      <Tab.Navigator
        initialRouteName="Current"
        initialLayout={{ width: Dimensions.get("window").width }}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            fontFamily: "OpenSans_700Bold",
          },
          tabBarStyle: {
            marginTop: "4%",
            backgroundColor: "#113125",
            padding: "1%",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
          },
          tabBarActiveTintColor: "#d5e8c3",
          tabBarInactiveTintColor: "#87a66a",
          tabBarIndicatorStyle: { backgroundColor: "#d5e8c3", height: 3 },
        }}
      >
        <Tab.Screen name="Current" component={Current} />
        <Tab.Screen name="Sold" component={Sold} />
      </Tab.Navigator>
    </ScrollView>
  );
};

const PostButt = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    require("../assets/default_photo.jpeg")
  );
  const [title, onChangeTitle] = useState("");
  const [description, onChangeDescription] = useState("");
  const [price, onChangePrice] = useState("");
  const [free, setFree] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.postButt}
        onPress={() => setModalVisible(true)}
      >
        <ImageBackground
          style={styles.postButtImg}
          source={{ uri: bgImgCreate }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, .45)",
            }}
          >
            <MaterialIcons name="post-add" size={26} color="white" />
            <Text style={styles.postButtLabel}> Create New Listing</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => {
          setPhotoURL(require("../assets/default_photo.jpeg"));
          setModalVisible(false);
        }}
        style={{ justifyContent: "center", backgroundColor: "#f2f2f2" }}
      >
        <SafeAreaView style={{ flex: 1, margin: "5%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={[styles.header, { margin: "2%" }]}>New Listing</Text>
            <View style={{}}>
              <IconButton
                icon={(props) => (
                  <AntDesign name="closecircleo" size={30} color="gray" />
                )}
                onPress={() => {
                  setPhotoURL(require("../assets/default_photo.jpeg"));
                  setModalVisible(false);
                }}
              />
            </View>
          </View>

          <ScrollView>
            <View style={styles.newPostImgContainer}>
              <Image source={photoURL} style={styles.newPostImg} />
            </View>
            <View style={{ flexDirection: "row", height: 80 }}>
              <TouchableOpacity
                onPress={() =>
                  setPhotoURL({
                    uri: "https://i.etsystatic.com/12021168/r/il/57ad51/3650822946/il_1588xN.3650822946_nj7j.jpg",
                  })
                }
                style={{
                  flex: 1,
                  marginLeft: "9%",
                  marginRight: "5%",
                  borderRadius: 10,
                  height: "50%",
                  backgroundColor: "white",
                  borderColor: "#678D58",
                  borderWidth: 2,
                  justifyContent: "center",
                  shadowColor: "#678D58",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                }}
              >
                <Text
                  style={{
                    color: "#678D58",
                    fontFamily: "OpenSans_600SemiBold",
                    fontSize: 16,
                    alignSelf: "center",
                  }}
                >
                  Take Photo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setPhotoURL({
                    uri: "https://i.etsystatic.com/12021168/r/il/57ad51/3650822946/il_1588xN.3650822946_nj7j.jpg",
                  })
                }
                style={{
                  paddingVertical: 2,
                  flex: 1,
                  marginRight: "9%",
                  marginLeft: "5%",
                  borderRadius: 10,
                  height: "50%",
                  borderColor: "#678D58",
                  borderWidth: 2,
                  justifyContent: "center",
                  backgroundColor: "white",
                  shadowColor: "#678D58",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.5,
                }}
              >
                <Text
                  style={{
                    width: "80%",
                    color: "#678D58",
                    fontFamily: "OpenSans_600SemiBold",
                    fontSize: 16,
                    textAlign: "center",
                    alignSelf: "center",
                  }}
                >
                  Upload
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: "2%", marginTop: "-4%", flex: 1 }}>
              <View style={{ marginTop: "2%" }}>
                <Text style={styles.fieldTitle}>Listing Title</Text>
                <View
                  style={{
                    flex: 1,
                    padding: "2%",
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5,
                  }}
                >
                  <TextInput
                    onChangeText={onChangeTitle}
                    value={title}
                    autoCapitalize="none"
                    placeholder="Title"
                    style={{ fontFamily: "OpenSans_300Light", fontSize: 16 }}
                  />
                </View>
              </View>
              <View style={{ marginTop: "4%" }}>
                <Text style={styles.fieldTitle}>Description</Text>
                <View
                  style={{
                    flex: 1,
                    padding: "2%",
                    borderColor: "gray",
                    borderWidth: 1,
                    borderRadius: 5,
                    height: 100,
                  }}
                >
                  <TextInput
                    onChangeText={onChangeDescription}
                    value={description}
                    autoCapitalize="none"
                    placeholder="Description"
                    style={{ fontFamily: "OpenSans_300Light", fontSize: 16 }}
                  />
                </View>
              </View>
              <View style={{ marginTop: "4%", flexDirection: "row" }}>
                <View>
                  <Text style={styles.fieldTitle}>Price</Text>
                  <View
                    style={{
                      flex: 1,
                      padding: "2%",
                      borderColor: "gray",
                      borderWidth: 1,
                      borderRadius: 5,
                      width: 80,
                    }}
                  >
                    <TextInput
                      onChangeText={onChangePrice}
                      value={price}
                      style={{ fontFamily: "OpenSans_300Light", fontSize: 16 }}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                {/* CANCEL BUTTON GOES HERE */}
                {/* POST BUTTON GOES HERE */}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const Sold = () => {
  return (
    <Screen preset="scroll">
      {/* <View style={{marginTop: '2%', marginHorizontal: '5%'}}> */}
      {soldlistings.map((item, index) => {
        return <Listing key={index} listing={item} />;
      })}
      {/* </View> */}
    </Screen>
  );
};

const Current = () => {
  return (
    <Screen preset="scroll">
      {/* <View style={{marginTop: '2%', marginHorizontal: '5%'}}> */}
      {currentlistings.map((item, index) => {
        return <Listing key={index} listing={item} />;
      })}
      {/* </View> */}
    </Screen>
  );
};

const Listing = (props: { listing: any }) => {
  return (
    <TouchableOpacity style={styles.listingCard}>
      <View style={{ flex: 1.2 }}>
        <Image source={{ uri: props.listing.img }} style={styles.listingImg} />
      </View>
      <View style={{ flex: 1, justifyContent: "space-between", padding: "3%" }}>
        <Text
          style={styles.listingTitle}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {props.listing.title}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.listingPrice}>${props.listing.price}</Text>
          <Text style={[styles.listingPrice, { color: "black" }]}>
            View {">"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "4%",
    marginRight: "3%",
    width: "77%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 7,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  defaultFont: {
    fontFamily: "OpenSans_300Light",
  },
  buttonContainer: {
    padding: "2%",
    flex: 1,
    alignItems: "center",
    borderTopEndRadius: 7,
    borderBottomEndRadius: 7,
  },
  singleTag: {
    borderRadius: 20,
    alignItems: "center",
    padding: "2%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: "2%",
  },
  header: {
    fontSize: 22,
    fontFamily: "OpenSans_700Bold",
    color: "#113125",
  },
  postButt: {
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    width: "90%",
    marginTop: "5%",
    marginBottom: "1%",
    height: 95,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  postButtLabel: {
    fontSize: 20,
    fontFamily: "OpenSans_600SemiBold",
    alignSelf: "center",
    textAlign: "center",
    color: "white",
  },
  postButtImg: {
    borderRadius: 10,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    resizeMode: "cover",
  },
  listingCard: {
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    width: "90%",
    marginVertical: "4%",
    height: 120,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
  },
  listingImg: {
    height: "100%",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
    resizeMode: "cover",
  },
  listingTitle: {
    fontSize: 16,
    fontFamily: "OpenSans_600SemiBold",
    alignSelf: "flex-start",
    marginTop: "5%",
  },
  listingPrice: {
    fontSize: 14,
    fontFamily: "OpenSans_500Medium",
    marginVertical: "5%",
    color: "#678D58",
  },
  newPostImgContainer: {
    alignSelf: "center",
    flexDirection: "row",
    flex: 1,
    width: "90%",
    marginVertical: "5%",
    height: 190,
    backgroundColor: "#113125",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "gray",
  },
  newPostImg: {
    width: "100%",
    overflow: "hidden",
    resizeMode: "contain",
    height: "100%",
  },
  fieldTitle: {
    fontSize: 16,
    fontFamily: "OpenSans_500Medium",
    marginBottom: "1%",
  },
});

export default CreateScreen;
