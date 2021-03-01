import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Navbar from "../components/Navbar";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import colors from "../configs/colors";

const { width: screenWidth } = Dimensions.get("window");
const ProductScreen = ({ navigation }) => {
  const renderAddToCartContainer = () => {
    return (
      <View style={styles.addToCartContainer}>
        <SafeAreaView>
          <View style={styles.priceRow}>
            <AppText style={styles.lightText}>Price</AppText>
            <AppText style={[styles.darkText, { color: colors.PRIMARY_GREEN }]}>
              Price
            </AppText>
          </View>

          <AppButton containerStyle={styles.addToCartButtonContainer}>
            <View style={styles.addToCartButtonRow}>
              <Ionicons name="cart-outline" size={25} color={colors.WHITE} />
              <AppText style={styles.addToCartButtonTitle}>Add To Cart</AppText>
            </View>
          </AppButton>
        </SafeAreaView>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Navbar
        navigation={navigation}
        goBack
        title="Product Details"
        showNotifications={false}
        showFilters={false}
        showShare={true}
      />

      <ScrollView style={styles.scrollView}>
        <View style={styles.productImageContainer}>
          <Image
            style={styles.productImage}
            resizeMode="cover"
            source={{
              uri:
                "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/khuzam.jpg",
            }}
          />
        </View>
        <View style={styles.detailContainer}>
          <AppText style={styles.lightText}>Product Name</AppText>
          <AppText style={styles.darkText}>Product Name</AppText>
          <AppText style={styles.lightText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. popularised in the
            1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </AppText>
        </View>
      </ScrollView>

      {renderAddToCartContainer()}
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  scrollView: {
    flex: 1,
  },
  productImageContainer: {
    marginHorizontal: 15,
  },

  productImage: {
    width: screenWidth - 30,
    height: screenWidth - 30,
    backgroundColor: colors.LIGHT_GREY,
  },

  detailContainer: {
    padding: 15,
    paddingBottom: 200,
  },

  lightText: {
    fontSize: 18,
    color: colors.LIGHT_GREY,
  },

  darkText: {
    fontSize: 18,
    marginVertical: 8,
  },

  addToCartContainer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 130,
    backgroundColor: colors.WHITE,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 7,
    marginBottom: 5,
    justifyContent: "space-between",
  },

  addToCartButtonContainer: {
    marginHorizontal: 15,
  },

  addToCartButtonRow: {
    flexDirection: "row",
  },

  addToCartButtonTitle: {
    fontSize: 20,
    color: colors.WHITE,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
