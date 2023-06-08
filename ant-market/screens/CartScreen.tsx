import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Touchable,
  FlatList,
  Image,
} from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { FontAwesome5 } from "@expo/vector-icons";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";

interface Item {
  name: string;
  seller: string;
  unitPrice: string;
  quantity: number;
  cost: number;
  image: string;
}

interface ItemCardProps {
  items: Item[];
}

const CartScreen = () => {
  const width = Dimensions.get("window").width;

  const items: Item[] = [
    {
      name: "IKEA Bookend",
      seller: "someguy888",
      unitPrice: "$3.00",
      quantity: 2,
      cost: 6.0,
      image:
        "https://www.ikea.com/be/en/images/products/bottna-book-end-light-grey-green-anthracite__0611766_pe685559_s5.jpg?f=s",
    },
    {
      name: "Physics Book",
      seller: "yoyoyoy",
      unitPrice: "$6.00",
      quantity: 1,
      cost: 8.0,
      image: "https://r.wheelers.co/bk/small/978187/9781877530685.jpg",
    },
  ];

  return (
    <Screen preset="scroll">
      <View>
        <Header />
      </View>
      <View>
        <CartHeader />
        <Border />
        <View style={{ marginHorizontal: "5%", marginTop: "3%" }}>
          <ItemCard items={items} />
        </View>
      </View>
    </Screen>
  );
};

const CartHeader = () => {
  const handleBackPress = () => {
    // Handle the back button press event
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress}>
        <FontAwesome5 name="chevron-left" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerText}>Cart</Text>
      <View style={styles.spacer} />
    </View>
  );
};

const Border = () => {
  return (
    <View
      style={{
        borderWidth: 0.75, // Width of the border line
        borderColor: "#113125", // Color of the border line
        borderStyle: "solid", // Style of the border line (solid, dashed, dotted, etc.)
        marginTop: 12, // adjust top border to go down
      }}
    >
      {/* Your content goes here */}
    </View>
  );
};

const ItemCard: React.FC<ItemCardProps> = ({ items }) => {
  const taxRate = 0.0725; // Assuming 8% tax rate
  const navigation = useNavigation();

  return (
    <View>
      {items.map((item, index) => (
        <View key={index}>
          <Text style={[styles.header, { marginBottom: "2%" }]}>
            Seller: {item.seller}
          </Text>
          <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={() => console.log("Edit pressed")}>
                    <Text style={styles.editText}>EDIT</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => console.log("Delete pressed")}
                  >
                    <Text style={styles.delText}>DELETE</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.unitPrice}>
                  Unit Price: {item.unitPrice}
                </Text>
                <Text style={styles.quantity}>Qty: {item.quantity}</Text>
              </View>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>Price: ${item.cost.toFixed(2)}</Text>
            </View>
          </View>

          <View style={[styles.sectionContainer, { marginBottom: "5%" }]}>
            <View style={styles.columnContainer}>
              <View style={styles.shippingSection}>
                <Text style={styles.sectionTitle}>Shipping: $0.00</Text>
              </View>
              <View style={styles.taxSection}>
                <Text style={styles.sectionTitle}>
                  Tax: ${(item.cost * taxRate).toFixed(2)}
                </Text>
              </View>
              <View style={styles.totalSection}>
                <Text style={styles.sectionTitle}>
                  Total: ${(item.cost + item.cost * taxRate).toFixed(2)}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => navigation.navigate("Checkout")}
            >
              <Text style={styles.checkoutButtonText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    flex: 1,
    fontFamily: "OpenSans_700Bold",
    textAlign: "center",
    color: "#113125",
  },
  spacer: {
    width: 24, // Adjust the width of the spacer to create space between the back button and the header
  },
  defaultFont: {
    fontFamily: "OpenSans_300Light",
  },
  header: {
    fontSize: 22,
    fontFamily: "OpenSans_700Bold",
    color: "#113125",
  },
  header1: {
    fontSize: 20,
    fontFamily: "OpenSans_300Light",
    color: "#113125",
    paddingTop: "4%",
    paddingBottom: "3%",
  },
  inputBox1: {
    borderWidth: 1,
    borderColor: "#678D58",
    borderRadius: 5,
    height: 40,
    marginBottom: "2.5%",
  },
  inputBox2: {
    borderWidth: 1,
    borderColor: "#678D58",
    borderRadius: 5,
    height: 40,
    width: "50%",
    marginBottom: "2.5%",
  },
  boxText: {
    color: "#848484",
    fontSize: 16,
    fontFamily: "OpenSans_300Light",
    paddingLeft: "2%",
    paddingTop: "2%",
  },
  cardContainerMain: {
    marginTop: "-2%",
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    borderLeftWidth: 8,
    borderLeftColor: "#A6C48A",
  },
  imageContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 8,
    marginRight: 5,
    marginLeft: "3%",
    marginTop: "2%",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    marginLeft: "5%",
    marginTop: "5%",
    marginBottom: "5%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginTop: "3%",
  },
  detailsContainer: {
    marginTop: "7%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "OpenSans_700Bold",
  },
  unitPrice: {
    fontSize: 18,
    marginBottom: 4,
    color: "#434343",
    fontFamily: "OpenSans_300Light",
  },
  editText: {
    fontSize: 16,
    marginHorizontal: "4%",
    color: "#678D58",
  },
  delText: {
    fontSize: 16,
    marginHorizontal: "4%",
    color: "#DD9787",
  },
  quantity: {
    fontSize: 18,
    color: "#434343",
    fontFamily: "OpenSans_300Light",
  },
  priceContainer: {
    alignItems: "flex-end",
    marginRight: "3%",
    marginBottom: "3%",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#434343",
    fontFamily: "OpenSans_300Light",
  },
  contentContainer: {
    flexDirection: "row",
  },
  line: {
    width: 8,
    height: "123%",
    backgroundColor: "#A6C48A", // Adjust the color as needed
    // alignSelf:'flex-start'
  },
  shippingSection: {
    // marginTop: 10,
  },
  taxSection: {},
  totalSection: {},
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  columnContainer: {
    flexDirection: "column",
    // alignItems: 'flex-end',
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2%",
    // alignItems: 'flex-end'
  },
  checkoutButton: {
    borderRadius: 0,
    width: 120,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#678D58",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "OpenSans_300Light",
  },
});

export default CartScreen;
