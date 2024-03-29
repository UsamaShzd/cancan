import React from "react";
import { View, Image, StyleSheet } from "react-native";
import colors from "../configs/colors";
import AppText from "./AppText";

const StoryItem = ({ imageUrl, text, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
};

export default StoryItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: colors.LIGHT_GREY,
  },
  text: {
    marginTop: 7,
  },
});
