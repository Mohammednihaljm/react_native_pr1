import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const DATA = [
  { id: "1", title: "alfam" },
  { id: "2", title: "mandhi" },
  { id: "3", title: "biriyan" },
  { id: "4", title: "rice" },
  { id: "5", title: "porotta" },
  { id: "6", title: "chicken curry" },
  { id: "7", title: "beef curry" },
  { id: "8", title: "beef 1" },
  { id: "9", title: "beef 2" },
  { id: "10", title: "beef 3" },
  { id: "11", title: "4" },
  { id: "12", title: "5" },
  { id: "13", title: "6" },
  { id: "14", title: "7" },
];

const index = () => {
  return (
    <ScrollView>
    <View style={{display:"flex",flexDirection:"col",flexWrap:"wrap"}}>
      {DATA.map((item) => {
        return (
          <View style={styles.title}>
            <Text style={styles.item}>{item.title}</Text>
          </View>
        );
      })}
    </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderWidth: 1,
    color: "black",
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    backgroundColor:"pink",
    padding:20,
    textAlign:"center",
    marginHorizontal:2,

  },
});
