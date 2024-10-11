import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import ChildComponent from "../components/ChildComponent";

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
  { id: "11", title: "nice pathri" },
  { id: "12", title: "fried" },
  { id: "13", title: "kunafa" },
  { id: "14", title: "shawram" },
];

const index = () => {
  const renderItem=({item})=>(
   <View style={styles.item}>
    <ChildComponent item={item} />
   </View>
  );
  return (
    <View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item)=>item.id} />
    </View>

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
