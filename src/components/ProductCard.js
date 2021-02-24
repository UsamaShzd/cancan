import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";
import Card from "./Card";

const { width: screenWidth } = Dimensions.get("window");

const imageWidthHeight = (screenWidth - 60) / 2 - 20;

const ProductCard = ({ product = {} }) => {
  return (
    <Card style={styles.cardStyle}>
      <View style={styles.container}>
        <Image
          resizeMode="cover"
          source={{ uri: product.imageUrl }}
          style={styles.image}
        />
        <AppText style={styles.name}>{product.name}</AppText>
        <AppText style={[styles.name, { color: colors.PRIMARY_GREEN }]}>
          {product.text}
        </AppText>

        <View style={styles.likeContainer}>
          <TouchableOpacity>
            <View
              style={[
                styles.likeIconWrapper,
                {
                  backgroundColor: product.liked
                    ? colors.PRIMARY_GREEN_TRANSPARENT
                    : colors.BLACK_TRANSPARENT,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="heart"
                color={product.liked ? colors.PRIMARY_GREEN : colors.WHITE}
                size={18}
                style={styles.likeIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableWithoutFeedback>
        <View style={styles.addToCartBtn}>
          <Ionicons name="cart-outline" size={20} color={colors.WHITE} />
          <AppText style={styles.addToCartBtnTxt}>ADD TO CART</AppText>
        </View>
      </TouchableWithoutFeedback>
    </Card>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardStyle: {
    width: (screenWidth - 60) / 2,
    marginLeft: 20,
    marginBottom: 20,
  },
  container: {
    padding: 10,
    position: "relative",
  },
  image: {
    backgroundColor: colors.LIGHT_GREY,
    width: imageWidthHeight,
    height: imageWidthHeight,
  },

  name: {
    marginTop: 8,
  },

  addToCartBtn: {
    alignItems: "center",
    backgroundColor: colors.PRIMARY_GREEN,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    padding: 8,
    paddingVertical: 5,
  },

  addToCartBtnTxt: {
    color: colors.WHITE,
    fontSize: 16,
    marginLeft: 8,
  },

  likeContainer: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  likeIconWrapper: {
    borderRadius: 20,
    height: 30,
    width: 30,
    zIndex: 3,

    alignItems: "center",
    justifyContent: "center",
  },
});
