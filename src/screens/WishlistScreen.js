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
      imageUrl: "https://picsum.photos/120",
    },

    {
      name: "Other Product 2",
      description: "Eagle",
      type: "AED 120",
      imageUrl: "https://picsum.photos/121",
    },

    {
      name: "Other Product 3",
      description: "Eagle",
      type: "AED 120",
      imageUrl: "https://picsum.photos/122",
    },

    {
      name: "Other Product 4",
      description: "Eagle",
      type: "AED 120",
      imageUrl: "https://picsum.photos/123",
    },

    {
      name: "Other Product 5",
      description: "Eagle",
      type: "AED 120",
      imageUrl: "https://picsum.photos/124",
    },

    {
      name: "Other Product 6",
      description: "Eagle",
      type: "AED 120",
      imageUrl: "https://picsum.photos/125",
    },

    {
      name: "Other Product 7",
      description: "Eagle",
      type: "AED 120",
      imageUrl: "https://picsum.photos/126",
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
