import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function RoomItems({
  houseName,
  rooms,
  hideCheckbox,
  marginLeft,
}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {rooms.map((room, index) => (
        <View key={index}>
          <View style={StyleSheet.roomItemStyle}>
            <RoomInfo room={room} />
            <RoomImage room={room} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const RoomInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.room.name}</Text>
    <Text>{props.room.description}</Text>
  </View>
);

const RoomImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={props.room.image}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: marginLeft,
      }}
    />
  </View>
);
