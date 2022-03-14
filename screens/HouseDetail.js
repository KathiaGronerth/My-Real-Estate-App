import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/HomeDetailScreen/About";
import RoomItems from "../components/HomeDetailScreen/RoomItems";

export const rooms = [
  {
    name: "Living Room",
    description: "Extra wide living room",
    price: 70,
    image: require("../assets/interior1.png"),
  },
  {
    name: "Kitchen",
    description: "Beautiful and modern kitchen",
    price: 70,
    image: require("../assets/interior1.png"),
  },
  {
    name: "Room1",
    description: "Cozy room",
    price: 70,
    image: require("../assets/interior3.png"),
  },
  {
    name: "Room2",
    description: "Room for kids",
    price: 70,
    image: require("../assets/interior3.png"),
  },
  {
    name: "Room3",
    description: "Beautiful room",
    price: 70,
    image: require("../assets/interior3.png"),
  },
];

export default function HouseDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <RoomItems houseName={route.params.name} rooms={rooms} />
    </View>
  );
}
