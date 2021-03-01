import React from "react";
import { View, StyleSheet } from "react-native";

import AppText from "./AppText";

import colors from "../configs/colors";

const LineText = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <AppText>{text}</AppText>
      <View style={styles.line} />
    </View>
  );
};

export default LineText;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: colors.LIGHT_GREY,
    marginHorizontal: 20,
  },
});
