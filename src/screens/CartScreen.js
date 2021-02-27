import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../configs/colors";

import AppText from "../components/AppText";

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <AppText>Cart Screen</AppText>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
