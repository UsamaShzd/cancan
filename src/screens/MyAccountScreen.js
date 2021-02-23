import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyAccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text>My Account Screen</Text>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
