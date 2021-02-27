import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configs/colors";
import AppText from "./AppText";

const CartItem = () => {
  const renderQtyBlock = () => {
    return (
      <View style={styles.qtyRow}>
        <AppText style={styles.qtyText}>QTY</AppText>
        <TouchableOpacity>
          <View style={styles.qtyBtn}>
            <AppText>-</AppText>
          </View>
        </TouchableOpacity>
        <AppText style={[styles.qtyText, styles.qtyNum]}>1</AppText>
        <TouchableOpacity>
          <View style={[styles.qtyBtn, styles.incrementBtn]}>
            <AppText style={styles.greenText}>+</AppText>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderRemoveItem = () => {
    return (
      <View style={styles.removeItemContainer}>
        <TouchableOpacity style={[styles.row, { alignItems: "center" }]}>
          <Ionicons name="trash-outline" size={25} />
          <AppText style={[styles.qtyText, { marginLeft: 8 }]}>Remove</AppText>
        </TouchableOpacity>
      </View>
    );
  };

  const renderMeasurementsRow = () => {
    return (
      <View style={[styles.detailRow, { borderBottomWidth: 0 }]}>
        <View>
          <AppText style={styles.lightHeading}>Measurements</AppText>
          <AppText style={[styles.greenText, { fontSize: 12 }]}>52 Cm</AppText>
        </View>

        <TouchableOpacity style={styles.outLineBtn}>
          <MaterialCommunityIcons
            name="pencil"
            color={colors.PRIMARY_GREEN}
            size={18}
          />
          <AppText style={styles.greenText}>Change</AppText>
        </TouchableOpacity>
      </View>
    );
  };

  const renderRepeatRow = () => {
    return (
      <View style={styles.detailRow}>
        <View>
          <AppText style={styles.lightHeading}>Item Details</AppText>
          <AppText style={[styles.greenText, { fontSize: 12 }]}>
            AED 120
          </AppText>
        </View>

        <TouchableOpacity style={styles.outLineBtn}>
          <AppText style={styles.greenText}>Repeat</AppText>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: "https://picsum.photos/304" }}
          />
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.productName}>Name</AppText>
          <AppText style={styles.productPrice}>AED 120</AppText>
        </View>
      </View>
      {renderMeasurementsRow()}
      {renderRepeatRow()}
      <View style={styles.bottomRow}>
        {renderQtyBlock()}

        {renderRemoveItem()}
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  row: {
    flexDirection: "row",
  },
  topRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: colors.LIGHT_GREY,
  },
  imageContainer: {
    borderRadius: 8,
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: colors.LIGHT_GREY,
  },

  textContainer: {
    marginLeft: 10,
    height: 70,
    justifyContent: "center",
  },
  greenText: {
    color: colors.PRIMARY_GREEN,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 24,
    color: colors.PRIMARY_GREEN,
  },

  bottomRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingRight: 15,
  },
  qtyText: {
    fontSize: 18,
  },
  qtyNum: {
    marginHorizontal: 8,
  },
  qtyBtn: {
    borderWidth: 1,
    borderColor: colors.LIGHT_GREY,
    borderRadius: 6,
    backgroundColor: colors.WHITE,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    paddingHorizontal: 9,
  },

  incrementBtn: {
    borderColor: colors.PRIMARY_GREEN,
  },

  removeItemContainer: {
    borderLeftWidth: 1,
    borderLeftColor: colors.LIGHT_GREY,
    flex: 1,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  lightHeading: {
    color: colors.LIGHT_GREY,
    fontSize: 22,
  },
  detailRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: colors.LIGHT_GREY,
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },

  outLineBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.PRIMARY_GREEN,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 50,
  },
});
