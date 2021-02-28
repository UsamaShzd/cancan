import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";

const MyAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar title="My Account" navigation={navigation} />
      <Text>My Account Screen</Text>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
