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
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514938.JPG",
    },
    {
      name: "Category 2",
      type: "COLLECTION",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514883.JPG",
    },
    {
      name: "Category 3",
      type: "COLLECTION",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514803.JPG",
    },
    {
      name: "Category 4",
      type: "COLLECTION",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/khuzam.jpg",
    },
    {
      name: "Category 5",
      type: "COLLECTION",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/3669638d06783293940954f2ae4843dc66a330cf_400_400.jpeg",
    },
    {
      name: "Category 6",
      type: "COLLECTION",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/fa0b40c6cb21395c094b8a5ea5382589.jpg",
    },
    {
      name: "Category 7",
      type: "COLLECTION",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/image1_P031.jpeg",
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
