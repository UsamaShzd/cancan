import React, { useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Carousel, { Pagination } from "react-native-snap-carousel";

import AppText from "../components/AppText";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import StoryItem from "../components/StoryItem";
import colors from "../configs/colors";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const ExploreScreen = ({ navigation }) => {
  const [storyItems, setStoryItems] = useState([
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514938.JPG",
      text: "Item 1",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514883.JPG",
      text: "Item 2",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514803.JPG",
      text: "Item 3",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/khuzam.jpg",
      text: "Item 4",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/3669638d06783293940954f2ae4843dc66a330cf_400_400.jpeg",
      text: "Item 5",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/fa0b40c6cb21395c094b8a5ea5382589.jpg",
      text: "Item 6",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/image1_P031.jpeg",
      text: "Item 7",
    },
  ]);

  const [saleImages, setSaleImages] = useState([
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/slider-images/1607074269.jpeg",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/slider-images/1607074240.jpeg",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/slider-images/1607074269.jpeg",
    },
    {
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/slider-images/1607074240.jpeg",
    },
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [productsList, setProductList] = useState([
    {
      name: "Product 1",
      text: "AED 150",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514938.JPG",
      liked: true,
    },
    {
      name: "Product 2",
      text: "AED 150",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514883.JPG",
      liked: false,
    },
    {
      name: "Product 3",
      text: "AED 150",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1607514803.JPG",
      liked: false,
    },
    {
      name: "Product 4",
      text: "AED 150",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/khuzam.jpg",
      liked: false,
    },
    {
      name: "Product 5",
      text: "AED 150",
      imageUrl:
        "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/3669638d06783293940954f2ae4843dc66a330cf_400_400.jpeg",
      liked: false,
    },
  ]);
  const renderStoryList = () => {
    return (
      <View style={styles.storyContainer}>
        <FlatList
          horizontal
          data={storyItems}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <StoryItem
                imageUrl={item.imageUrl}
                text={item.text}
                containerStyle={{
                  marginRight: 15,
                  marginLeft: index === 0 ? 15 : 0,
                }}
              />
            );
          }}
          keyExtractor={(item) => item.text}
        />
      </View>
    );
  };

  const renderSaleCarousal = () => {
    return (
      <View style={styles.saleCarousalWrapper}>
        <Carousel
          data={saleImages}
          renderItem={({ item }) => {
            return (
              <View style={styles.saleCarousalImageWrapper}>
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.saleCarousalImage}
                  resizeMode="cover"
                />
              </View>
            );
          }}
          sliderWidth={screenWidth - 30}
          itemWidth={screenWidth - 30}
          onSnapToItem={(slideIndex) => setCurrentSlideIndex(slideIndex)}
        />

        <Pagination
          dotsLength={saleImages.length}
          activeDotIndex={currentSlideIndex}
          containerStyle={{
            width: 5,
            padding: 0,
            margin: -8,
            height: 20,
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            backgroundColor: "rgba(3, 3, 0, 1)",
          }}
        />
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <>
        {renderStoryList()}
        {renderSaleCarousal()}
        <View style={styles.saleBannerWrapper}>
          <TouchableWithoutFeedback>
            <Image
              source={{
                uri:
                  "http://ecommerce.sidtechnology.me/public/assets/media/slider-images/1607074294.jpeg",
              }}
              resizeMode="cover"
              style={styles.saleBanner}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.newArrivalWrapper}>
          <AppText style={styles.arrivalText}>New Arrival</AppText>

          <TouchableWithoutFeedback>
            <AppText
              style={[styles.arrivalText, { color: colors.PRIMARY_GREEN }]}
            >
              View All
            </AppText>
          </TouchableWithoutFeedback>
        </View>
      </>
    );
  };

  const renderProductsList = () => {
    return (
      <FlatList
        ListHeaderComponent={renderListHeader}
        numColumns={2}
        data={productsList}
        renderItem={({ item }) => {
          return (
            <ProductCard
              product={item}
              onPress={() => navigation.navigate("Product")}
              onLike={() => alert("like")}
              onAddToCart={() => alert("add to cart")}
            />
          );
        }}
        keyExtractor={(item) => item.name}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Navbar title="Home" navigation={navigation} />
      {renderProductsList()}
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  storyContainer: {
    marginTop: 5,
  },

  saleCarousalWrapper: {
    margin: 15,
    alignItems: "center",
  },
  saleCarousalImageWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  saleCarousalImage: {
    width: "100%",
    height: 180,
    backgroundColor: colors.LIGHT_GREY,
  },

  saleBannerWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    marginHorizontal: 15,
    width: screenWidth - 30,
    marginTop: -20,
  },
  saleBanner: {
    height: 120,
    width: screenWidth - 30,
    backgroundColor: colors.LIGHT_GREY,
  },

  newArrivalWrapper: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  arrivalText: {
    fontSize: 20,
  },
});
