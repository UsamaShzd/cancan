import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import colors from "../configs/colors";

import Navbar from "../components/Navbar";
import WishlistItem from "../components/WishlistItem";

const WishlistScreen = ({ navigation }) => {
  const [wishlist, setWishlist] = useState([
    {
      name: "Other Product 1",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514938.JPG",
    },

    {
      name: "Other Product 2",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514883.JPG",
    },

    {
      name: "Other Product 3",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514803.JPG",
    },

    {
      name: "Other Product 4",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/khuzam.jpg",
    },

    {
      name: "Other Product 5",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/3669638d06783293940954f2ae4843dc66a330cf_400_400.jpeg",
    },

    {
      name: "Other Product 6",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/fa0b40c6cb21395c094b8a5ea5382589.jpg",
    },

    {
      name: "Other Product 7",
      description: "Eagle",
      type: "AED 120",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/image1_P031.jpeg",
    },
  ]);

  const renderWishList = () => {
    return (
      <FlatList
        data={wishlist}
        renderItem={({ item, index }) => {
          return (
            <WishlistItem
              containerStyle={[
                styles.wishlistItemContainer,
                { marginTop: index === 0 ? 15 : 0 },
              ]}
              {...item}
            />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Navbar title="Wishlist" navigation={navigation} />
      {renderWishList()}
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  wishlistItemContainer: {
    marginHorizontal: 15,
    marginBottom: 15,
  },
});
