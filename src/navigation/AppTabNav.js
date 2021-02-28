import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "./CustomTabBar";
//icons
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

//configs
import colors from "../configs/colors";

//screens
import WishlistScreen from "../screens/WishlistScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabNav = () => {
  return (
    <Navigator
      screenOptions={{}}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_GREEN,
      }}
      tabBar={CustomTabBar}
    >
      <Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="storefront-outline"
                color={color}
                size={25}
              />
            );
          },
        }}
      />
      <Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="heart" color={color} size={25} />
            );
          },
        }}
      />
      <Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons name="cards" color={color} size={25} />
            );
          },
        }}
      />
      <Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="person" color={color} size={26} />;
          },
        }}
      />
    </Navigator>
  );
};

export default AppTabNav;
