import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../configs/colors";

import AppText from "../components/AppText";
import SimpleNav from "../components/SimpleNav";
import CartItem from "../components/CartItem";

const CartScreen = ({ navigation }) => {
  const renderAddressBar = () => {
    return (
      <View style={styles.addressBarContainer}>
        <AppText style={styles.addressBarText}>Delivery Address</AppText>
        <AppText style={[styles.addressBarText, styles.orangeText]}>
          ADD
        </AppText>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SimpleNav
        navigation={navigation}
        title="Cart"
        goBack
        bgColor={colors.PRIMARY_GREEN}
      />
      {renderAddressBar()}

      <CartItem />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navbarContainerStyle: {
    backgroundColor: colors.PRIMARY_GREEN,
  },

  addressBarContainer: {
    backgroundColor: colors.WHITE,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
  },

  addressBarText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  orangeText: {
    color: colors.ORANGE,
  },
});
