import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import WishlistScreen from "../screens/WishlistScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabNav = () => {
  return (
    <Navigator>
      <Screen name="Explore" component={ExploreScreen} />
      <Screen name="Wishlist" component={WishlistScreen} />
      <Screen name="Categories" component={CategoriesScreen} />
      <Screen
        name="MyAccount"
        options={{ tabBarLabel: "My Account" }}
        component={MyAccountScreen}
      />
    </Navigator>
  );
};

export default AppTabNav;
