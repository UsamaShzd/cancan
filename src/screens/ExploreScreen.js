import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/common/Navbar";

const ExploreScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar title="Home" navigation={navigation} />
      <Text>Explore Screen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
