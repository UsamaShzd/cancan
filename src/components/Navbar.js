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
  const { title = "", navigation } = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableWithoutFeedback onPress={openDrawer}>
            <SimpleLineIcons name="menu" size={22} />
          </TouchableWithoutFeedback>
          <AppText style={styles.title}>{title}</AppText>
        </View>

        <View style={styles.leftContainer}>
          <View style={styles.iconMargin}>
            <TouchableWithoutFeedback>
              <Ionicons name="cart-outline" size={25} />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.iconMargin}>
            <TouchableWithoutFeedback>
              <Entypo name="sound-mix" size={22} />
            </TouchableWithoutFeedback>
          </View>
          <View>
            <TouchableWithoutFeedback>
              <Ionicons name="notifications-outline" size={25} />
            </TouchableWithoutFeedback>
          </View>
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
