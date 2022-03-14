import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurant = {
  name: "Home1",
  image: require("../../assets/house1.png"),
  price: 900000,
  reviews: 1.5,
  categories: [{ title: "x" }, { title: "y" }],
};

export default function About(props) {
  const { name, image, price, reviews, categories } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } ⭐ (${reviews}+)`;

  return (
    <View>
      <HouseImage image={image} />
      <HouseName name={name} />
      <HouseDescription description={description} />
    </View>
  );
}
const HouseImage = (props) => (
  <Image source={props.image} style={{ width: "100%", height: 180 }} />
);
const HouseName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const HouseDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);
