import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Text style={styles.text}>Btn</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate('Components')}
      />

       <Button
        title="Go to list view"
        onPress={() => navigation.navigate('List')}
      />

       <Button
        title="Go to image view"
        onPress={() => navigation.navigate('Image')}
      />
    
    </View>
  
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
