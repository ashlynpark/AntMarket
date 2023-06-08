import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import listings from "../data/dummyListings.json";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Modal, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";
import { RadioButton } from "react-native-paper";

// to make search terms match even if plural
const screenHeight = Dimensions.get("window").height;

function singularize(word: string): string {
  const endings: Record<string, string> = {
    ves: "fe",
    ies: "y",
    i: "us",
    zes: "ze",
    ses: "s",
    es: "e",
    s: "",
  };
  return word.replace(
    new RegExp(`(${Object.keys(endings).join("|")})$`),
    (match) => endings[match as keyof typeof endings]
  );
}
const SearchResults = () => {
  const route = useRoute();
  const searchTerm = JSON.parse(JSON.stringify(route.params));
  const singularSearchTerm = singularize(searchTerm?.toLowerCase() ?? "");
  const matched = listings.filter((item) => {
    const itemName = item.name.toLowerCase();
    return itemName.includes(singularSearchTerm);
  });

  return (
    <Screen preset="scroll">
      <Header />
      <Search prevSearch={searchTerm} />
      <View>
        {matched.length > 0 ? (
          matched.map((item, index) => <Listing key={index} listing={item} />)
        ) : (
          <Text>No matches found</Text>
        )}
      </View>
    </Screen>
  );
};

const Listing = (props: { listing: any }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.listingCard}
      onPress={() => {
        let data = props.listing;
        navigation.navigate("single listing", data);
      }}
    >
      <View style={{ flex: 1.2 }}>
        <Image
          source={{ uri: props.listing.image }}
          style={styles.listingImg}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "space-between", padding: "3%" }}>
        <Text
          style={styles.listingTitle}
          numberOfLines={3}
          ellipsizeMode="tail"
        >
          {props.listing.name}
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

const Search = (props: { prevSearch: string }) => {
  const [text, onChangeText] = useState(props.prevSearch);
  const navigation = useNavigation();
  const handleSearch = () => {
    if(text !== ""){
    navigation.navigate("Search Results", text);
    onChangeText("");
    }
  };

  const SearchButton = () => {
    return (
      <TouchableOpacity
        onPress={handleSearch}
        style={[styles.buttonContainer, { backgroundColor: "#A6C48A" }]}
      >
        <FontAwesome5 name="search" size={22} color="white" />
      </TouchableOpacity>
    );
  };

  const FilterButton = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(300);
    const [showFilter, setShowFilter] = useState(false);
    const [sortOption, setSortOption] = useState("");
    const handleSortOption = (option: string) => {
      console.log("Selected sort option:", option);
    };

    const handlePriceRangeChange = (values: [number, number]) => {
      setMinPrice(values[0]);
      setMaxPrice(values[1]);
    };

    const handleFilterPriceRange = () => {
      console.log("Selected price range:", minPrice, maxPrice);
    };
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderRadius: 7,
            height: "auto",
            marginRight: "4%",
            alignSelf: "center",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            backgroundColor: "white",
          },
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            setShowFilter(true);
            console.log("here");
          }}
        >
          <FontAwesome5 name="sliders-h" size={20} color="#484848" />
        </TouchableOpacity>
        <Modal animationType="slide" visible={showFilter} transparent={true}>
          <View style={[styles.sortFilterCon, { height: screenHeight / 2 }]}>
            <TouchableOpacity onPress={() => setShowFilter(false)}>
              <FontAwesome5 name="times" size={60} color="#484848" />
            </TouchableOpacity>
            {/* Sorting Section */}
            <View>
              <RadioButton.Group
                onValueChange={handleSortOption}
                value={sortOption}
              >
                <View>
                  <RadioButton value="price" />
                  <Text>Sort by Price</Text>
                </View>
                <View>
                  <RadioButton value="name" />
                  <Text>Sort by Name</Text>
                </View>
              </RadioButton.Group>
            </View>
            {/* Filtering Section */}
            <View>
              <FontAwesome5 name="filter" size={20} color="#484848" />
              <Text>
                Price Range: ${minPrice} - ${maxPrice}
              </Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={250}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View style={styles.searchBarContainer}>
        <View style={{ flex: 5, padding: "2%" }}>
          <TextInput
            onChangeText={onChangeText}
            value={text}
            autoCapitalize="none"
            placeholder="Search"
            returnKeyType="search"
            onSubmitEditing={handleSearch}
            style={{ fontFamily: "OpenSans_300Light", fontSize: 16 }}
          />
        </View>
        <SearchButton />
      </View>
      <FilterButton />
    </View>
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
  sortFilterCon: {
    backgroundColor: "white",
    padding: 20,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 7,
    margin: 50,
  },
});

export default SearchResults;
