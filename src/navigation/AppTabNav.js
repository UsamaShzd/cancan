import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import WishlistScreen from "../screens/WishlistScreen";
import HomeScreen from "../screens/HomeScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabNav = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Wishlist" component={WishlistScreen} />
    </Navigator>
  );
};

export default AppTabNav;
