import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import colors from "../configs/colors";

import Navbar from "../components/Navbar";
import CategoryCard from "../components/CategoryCard";

const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState([
    {
      name: "Category 1",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/150",
    },
    {
      name: "Category 2",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/151",
    },
    {
      name: "Category 3",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/152",
    },
    {
      name: "Category 4",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/153",
    },
    {
      name: "Category 5",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/154",
    },
    {
      name: "Category 6",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/155",
    },
    {
      name: "Category 7",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/156",
    },
    {
      name: "Category 8",
      type: "COLLECTION",
      imageUrl: "https://picsum.photos/157",
    },
  ]);

  const renderCategoryList = () => {
    return (
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <CategoryCard
              containerStyle={[
                styles.categoryCardStyle,
                { marginTop: index === 0 || index === 1 ? 15 : 0 },
              ]}
              name={item.name}
              type={item.type}
              imageUrl={item.imageUrl}
            />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Navbar title="Categories" navigation={navigation} />
      {renderCategoryList()}
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  categoryCardStyle: {
    marginLeft: 15,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 15,
  },
});
