import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import HouseItems, { houses } from "../components/HouseItems";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const { houseData, setHouseData } = useState(houses);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <HouseItems houseData={houseData} />
      </ScrollView>
    </SafeAreaView>
  );
}
