import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/common/Navbar";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar title="Categories" navigation={navigation} />
      <Text>Categories Screen</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
