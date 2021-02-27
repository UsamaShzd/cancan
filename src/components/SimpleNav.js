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

const SimpleNav = (props) => {
  const {
    title = "",
    navigation,
    goBack = false,
    bgColor = colors.PRIMARY_GREEN,
    contentColor = colors.WHITE,
  } = props;

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const goBackScreen = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bgColor }]}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.navBtn}>
            <TouchableWithoutFeedback
              onPress={goBack ? goBackScreen : openDrawer}
            >
              {goBack ? (
                <Ionicons name="arrow-back" size={30} color={contentColor} />
              ) : (
                <SimpleLineIcons name="menu" size={22} color={contentColor} />
              )}
            </TouchableWithoutFeedback>
          </View>
          <AppText style={[styles.title, { color: contentColor }]}>
            {title}
          </AppText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SimpleNav;

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
    justifyContent: "center",
    width: "100%",
  },
  navBtn: {
    position: "absolute",
    left: 0,
  },
  title: {
    fontSize: 23,
  },
});
