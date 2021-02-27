import React from "react";
import {
  View,
  TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { Entypo, SimpleLineIcons, Ionicons } from "@expo/vector-icons";

import colors from "../configs/colors";

import AppText from "./AppText";

const Navbar = (props) => {
  const {
    title = "",
    navigation,
    goBack = false,
    showCart = true,
    showFilters = true,
    showNotifications = true,
    showShare = false,
  } = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const goBackScreen = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableWithoutFeedback
            onPress={goBack ? goBackScreen : openDrawer}
          >
            {goBack ? (
              <Ionicons name="arrow-back" size={30} />
            ) : (
              <SimpleLineIcons name="menu" size={22} />
            )}
          </TouchableWithoutFeedback>
          <AppText style={styles.title}>{title}</AppText>
        </View>

        <View style={styles.leftContainer}>
          {showCart && (
            <View style={styles.iconMargin}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate("Cart")}
              >
                <Ionicons name="cart-outline" size={25} />
              </TouchableWithoutFeedback>
            </View>
          )}
          {showFilters && (
            <View style={styles.iconMargin}>
              <TouchableWithoutFeedback>
                <Entypo name="sound-mix" size={22} />
              </TouchableWithoutFeedback>
            </View>
          )}
          {showNotifications && (
            <View>
              <TouchableWithoutFeedback>
                <Ionicons name="notifications-outline" size={25} />
              </TouchableWithoutFeedback>
            </View>
          )}

          {showShare && (
            <View>
              <TouchableWithoutFeedback>
                <Ionicons name="share-social-outline" size={25} />
              </TouchableWithoutFeedback>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.WHITE,
  },
  container: {
    height: 55,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  rightContainer: { flexDirection: "row", alignItems: "center" },

  iconMargin: {
    marginRight: 20,
  },
  title: {
    fontSize: 23,
    marginLeft: 40,
  },
});
