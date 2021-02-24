import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../configs/colors";

const Card = ({ children, style }) => {
  const styleProp = Array.isArray(style)
    ? [styles.card, ...style]
    : [styles.card, style];
  return <View style={styleProp}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.WHITE,
    borderRadius: 8,

    //////
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
