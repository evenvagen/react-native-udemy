import React from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  var name = "Evan";

  return (
    <View>
      <Text style={styles.textStyle}>
        Getting started with react native
      </Text>
      <Text style={styles.firstName}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    firstName: {
        fontSize: 20,
    }
});

export default ComponentsScreen;
