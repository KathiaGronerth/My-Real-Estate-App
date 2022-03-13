import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const houses = [
  {
    name: "Beautiful house",
    city: "Austin",
    image: require("../assets/house1.png"),
    details:
      "Wonderful split level Hughson Hts. home provides space galore! 3 bedrooms, 3 baths plus in-law suite.",
    categories: ["Rent", "Sell"],
    price: "$800,000",
    reviews: 1,
    rating: 5,
    interiors: [
      require("../assets/interior1.png"),
      require("../assets/interior2.png"),
      require("../assets/interior3.png"),
    ],
  },
  {
    name: "Modern house",
    city: "Los Angeles",
    image: require("../assets/house2.png"),
    details: "Located in the secure gated community of Coldwater Ridge.",
    categories: ["Rent", "Sell"],
    price: "$700,000",
    reviews: 2,
    rating: 4,
    interiors: [
      require("../assets/interior1.png"),
      require("../assets/interior2.png"),
      require("../assets/interior3.png"),
    ],
  },
  {
    name: "Single-Family house",
    city: "New York",
    image: require("../assets/house3.png"),
    details:
      "Welcome to the beautiful and unique Hillside Community nestled in the hills and surrounded by hundreds of acres of nature reserve .",
    categories: ["Rent", "Sell"],
    price: "$600,000",
    reviews: 2,
    rating: 4,
    interiors: [
      require("../assets/interior1.png"),
      require("../assets/interior2.png"),
      require("../assets/interior3.png"),
    ],
  },
];

export default function HouseItems(props) {
  return (
    <>
      {/* to avoid flash activeOpacity */}
      {props.houseData.map((house, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
        >
          <View
            style={{
              marginTop: 10,
              padding: 15,
              backgroundColor: "white",
            }}
          >
            <HouseImage image={house.image} />
            <HouseInfo name={house.name} rating={house.rating} />
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
      <Text style={{ fontSize: 13, color: "gray" }}>Sell</Text>
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
