import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 26 },
    { name: "Friend #2", age: 29 },
    { name: "Friend #3", age: 20 },
    { name: "Friend #4", age: 40 },
    { name: "Friend #5", age: 50 },
    { name: "Friend #6", age: 33 },
    { name: "Friend #7", age: 90 },
    { name: "Friend #8", age: 87 },
    { name: "Friend #9", age: 37 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical: 15,
    fontSize: 20
  }
});

export default ListScreen;
