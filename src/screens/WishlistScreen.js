import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Navbar from "../components/common/Navbar";

const WishlistScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar title="Wishlist" navigation={navigation} />
      <Text>Wishlist Screen</Text>
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
