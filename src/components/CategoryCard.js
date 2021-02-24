import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";

import colors from "../configs/colors";
import AppText from "./AppText";

const { width: screenWidth } = Dimensions.get("window");

const imageWidthHeight = (screenWidth - 15 * 3) / 2;

const CategoryCard = ({ name, type, imageUrl, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <TouchableOpacity>
        <ImageBackground
          resizeMode="cover"
          source={{ uri: imageUrl }}
          style={styles.image}
        >
          <AppText style={[styles.categoryText, styles.name]}>{name}</AppText>
          <AppText style={styles.categoryText}>{type}</AppText>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  image: {
    width: imageWidthHeight,
    height: imageWidthHeight,
    backgroundColor: colors.LIGHT_GREY,
    alignItems: "center",
    justifyContent: "center",
  },

  categoryText: {
    color: colors.WHITE,
    fontSize: 24,
  },

  name: {
    fontWeight: "bold",
  },
});
