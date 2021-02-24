import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";
import AppText from "./AppText";
import colors from "../configs/colors";

const WishlistItem = ({
  name,
  description,
  type,
  imageUrl,
  containerStyle,
}) => {
  return (
    <View style={containerStyle}>
      <Card style={styles.card}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.container}>
          <AppText style={styles.lightText}>{name}</AppText>
          <AppText style={styles.darkText}>{description}</AppText>
          <AppText style={styles.primaryText}>{type}</AppText>

          <View style={styles.btnContainer}>
            <View style={styles.addToCartBtnContainer}>
              <TouchableOpacity>
                <AppText style={styles.addToCartBtn}>Add To Cart</AppText>
              </TouchableOpacity>
            </View>
            <View style={styles.removeBtnContainer}>
              <TouchableOpacity>
                <AppText style={styles.removeBtn}>Remove</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    flexDirection: "row",
    padding: 8,
  },
  image: {
    width: 110,
    height: 110,
    backgroundColor: colors.LIGHT_GREY,
  },
  container: {
    marginLeft: 8,
    flex: 1,
  },

  lightText: {
    fontSize: 18,
    color: colors.LIGHT_GREY,
  },

  darkText: {
    fontSize: 16,
    marginTop: 3,
  },
  primaryText: {
    fontSize: 16,
    color: colors.PRIMARY_GREEN,
    marginTop: 3,
  },

  btnContainer: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: colors.LIGHT_GREY,
    flexDirection: "row",
    paddingTop: 10,
    marginTop: 5,
  },
  addToCartBtnContainer: {
    flex: 1,
    alignItems: "center",
  },
  addToCartBtn: {
    color: colors.PRIMARY_GREEN,
    fontSize: 17,
  },
  removeBtnContainer: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: colors.LIGHT_GREY,
    alignItems: "center",
  },
  removeBtn: {
    color: colors.DANGER,
    fontSize: 17,
  },
});
