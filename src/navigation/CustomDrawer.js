import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import colors from "../configs/colors";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.header} />
        {/* <DrawerContentScrollView {...props}>
         */}
        <DrawerItemList {...props} />
        {/* </DrawerContentScrollView> */}
      </ScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 150,
    backgroundColor: colors.PRIMARY_GREEN,
  },
});
