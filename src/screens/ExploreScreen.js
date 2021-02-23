import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Navbar from "../components/common/Navbar";
import StoryItem from "../components/StoryItem";
import colors from "../configs/colors";

const ExploreScreen = ({ navigation }) => {
  const [storyItems, setStoryItems] = useState([
    { imageUrl: "https://picsum.photos/50", text: "Item 1" },
    { imageUrl: "https://picsum.photos/50", text: "Item 2" },
    { imageUrl: "https://picsum.photos/50", text: "Item 3" },
    { imageUrl: "https://picsum.photos/50", text: "Item 4" },
    { imageUrl: "https://picsum.photos/50", text: "Item 5" },
    { imageUrl: "https://picsum.photos/50", text: "Item 6" },
    { imageUrl: "https://picsum.photos/50", text: "Item 7" },
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
  return (
    <View style={styles.container}>
      <Navbar title="Home" navigation={navigation} />

      {renderStoryList()}
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
});
