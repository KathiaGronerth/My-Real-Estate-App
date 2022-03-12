import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/HouseCartoon.png"),
    text: "Houses",
  },
  {
    image: require("../assets/ApartmentCartoon.png"),
    text: "Apartment",
  },
  {
    image: require("../assets/Land.png"),
    text: "Land",
  },
  {
    image: require("../assets/condosCartoon.jpeg"),
    text: "Condos",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingLeft: 50,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
