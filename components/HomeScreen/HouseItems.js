import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const houses = [
  {
    name: "Beautiful house",
    price: "$800,000",
    option: "Sell",
    city: "Austin",
    image: require("../../assets/house1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["House"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Modern house",
    price: "$700,000",
    option: "Sell",
    city: "Los Angeles",
    image: require("../../assets/house2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["House"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family house",
    price: "$600,000",
    option: "Sell",
    city: "New York",
    image: require("../../assets/house3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["House"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful apartment",
    price: "$800,000",
    option: "Sell",
    city: "Austin",
    image: require("../../assets/apartment1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Apartment"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Modern apartment",
    price: "$700,000",
    option: "Sell",
    city: "Los Angeles",
    image: require("../../assets/apartment2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["Apartment"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family apartment",
    price: "$600,000",
    option: "Sell",
    city: "New York",
    image: require("../../assets/apartment3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["Apartment"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful condo",
    price: "$800,000",
    option: "Sell",
    city: "Austin",
    image: require("../../assets/condo1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Condo"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Modern condo",
    price: "$700,000",
    option: "Sell",
    city: "Los Angeles",
    image: require("../../assets/condo2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["Condo"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family condo",
    price: "$600,000",
    option: "Sell",
    city: "New York",
    image: require("../../assets/condo3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["Condo"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful land",
    price: "$800,000",
    option: "Sell",
    city: "Austin",
    image: require("../../assets/Land1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Land"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful house",
    price: "$3,000",
    option: "Rent",
    city: "Austin",
    image: require("../../assets/house1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["House"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Modern house",
    price: "$3,000",
    option: "Rent",
    city: "Los Angeles",
    image: require("../../assets/house2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["House"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family house",
    price: "$3,000",
    option: "Rent",
    city: "New York",
    image: require("../../assets/house3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["House"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful apartment",
    price: "$3,000",
    option: "Rent",
    city: "Austin",
    image: require("../../assets/apartment1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Apartment"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Modern apartment",
    price: "$3,000",
    option: "Rent",
    city: "Los Angeles",
    image: require("../../assets/apartment2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["Apartment"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family apartment",
    price: "$3,000",
    option: "Rent",
    city: "New York",
    image: require("../../assets/apartment3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["Apartment"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful condo",
    price: "$3,000",
    option: "Rent",
    city: "Austin",
    image: require("../../assets/condo1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Condo"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Modern condo",
    price: "$3,000",
    option: "Rent",
    city: "Los Angeles",
    image: require("../../assets/condo2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["Condo"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family condo",
    price: "$3,000",
    option: "Rent",
    city: "New York",
    image: require("../../assets/condo3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["Condo"],
    reviews: 2,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
  {
    name: "Beautiful land",
    price: "$3,000",
    option: "Rent",
    city: "Austin",
    image: require("../../assets/Land1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Land"],
    reviews: 1,
    interiors: [
      require("../../assets/interior1.png"),
      require("../../assets/interior2.png"),
      require("../../assets/interior3.png"),
    ],
  },
];

export default function HouseItems({ navigation, ...props }) {
  return (
    <>
      {/* to avoid flash activeOpacity */}
      {houses.map((house, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("HouseDetail", {
              name: house.name,
              image: house.image,
              price: house.price,
              reviews: house.reviews,
              categories: house.categories,
            })
          }
        >
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: "white",
            }}
          >
            <HouseImage image={house.image} />
            <HouseInfo
              name={house.name}
              price={house.price}
              rating={house.reviews}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}
const HouseImage = (props) => (
  <>
    <Image
      style={{ width: "100%", height: 180 }}
      source={props.image}
      //   source={{
      //     uri: props.image,
      //   }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const HouseInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>{props.price}</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
