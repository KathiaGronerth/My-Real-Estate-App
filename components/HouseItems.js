import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const houses = [
  {
    name: "house1",
    image: require("../assets/house1.png"),
    categories: ["Rent", "Sell"],
    price: "$800,000",
    reviews: 1,
    rating: 5,
  },
  {
    name: "house2",
    image: require("../assets/house2.png"),
    categories: ["Rent", "Sell"],
    price: "$700,000",
    reviews: 2,
    rating: 4,
  },
  {
    name: "house3",
    image: require("../assets/house3.png"),
    categories: ["Rent", "Sell"],
    price: "$600,000",
    reviews: 2,
    rating: 4,
  },
];

export default function HouseItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {/* to avoid flash activeOpacity */}
      {houses.map((house, index) => (
        <View
          key={index}
          style={{
            marginTop: 10,
            padding: 15,
            backgroundColor: "white",
          }}
        >
          <HouseImage image={house.image} />
          <HouseInfo name={house.name} rating={house.rating} />
        </View>
      ))}
    </TouchableOpacity>
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
