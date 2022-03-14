import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/HomeScreen/BottomTabs";
import Categories from "../components/HomeScreen/Categories";
import HeaderTabs from "../components/HomeScreen/HeaderTabs";
import HouseItems, { houses } from "../components/HomeScreen/HouseItems";
import SearchBar from "../components/HomeScreen/SearchBar";

const YELP_API_KEY =
  "l_7jCAGIhVqOEOZrBelY3HIBSMdlXUnmkaHYipA1d4d5wJJ6Phb2FLZ_WvRcn1HhejyKuupNuWx-JsjKWQsDO5EByiGQTjRsopHJEy-W24d62aBvMMtiFh-_IBktYnYx";

export default function Home({ navigation }) {
  const [houseData, setHouseData] = useState(houses);
  const [city, setCity] = useState("Austin");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getHousesFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setHouseData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getHousesFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs houses={houses} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <HouseItems houseData={houseData} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}
