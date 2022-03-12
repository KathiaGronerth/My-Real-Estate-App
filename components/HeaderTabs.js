import { View, Text, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Sell");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text="Sell"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActive={setActiveTab}
      />
      <HeaderButton
        text="Rent"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActive={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);
