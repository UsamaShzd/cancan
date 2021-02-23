import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

//screens
import HomeScreen from "../screens/HomeScreen";
import WishlistScreen from "../screens/WishlistScreen";

const { Navigator, Screen } = createDrawerNavigator();

const AppDrawerNav = () => {
  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Wishlist" component={WishlistScreen} />
    </Navigator>
  );
};

export default AppDrawerNav;
