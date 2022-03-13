import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottonTabs from "../components/BottonTabs";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import HouseItems, { houses } from "../components/HouseItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "l_7jCAGIhVqOEOZrBelY3HIBSMdlXUnmkaHYipA1d4d5wJJ6Phb2FLZ_WvRcn1HhejyKuupNuWx-JsjKWQsDO5EByiGQTjRsopHJEy-W24d62aBvMMtiFh-_IBktYnYx";

export default function Home() {
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
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <HouseItems houseData={houseData} />
      </ScrollView>
      <Divider width={1} />
      <BottonTabs />
    </SafeAreaView>
  );
}
