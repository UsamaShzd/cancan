import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//icons
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

//configs
import colors from "../configs/colors";

//screens
import WishlistScreen from "../screens/WishlistScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import MyAccountScreen from "../screens/MyAccountScreen";

const ICON_SIZE = 30;

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabNav = () => {
  return (
    <Navigator
      screenOptions={{}}
      tabBarOptions={{
        activeTintColor: colors.PRIMARY_GREEN,
      }}
    >
      <Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="storefront-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="heart" color={color} size={size} />
            );
          },
        }}
      />
      <Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="cards" color={color} size={size} />
            );
          },
        }}
      />
      <Screen
        name="MyAccount"
        component={MyAccountScreen}
        options={{
          tabBarLabel: "My Account",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="person" color={color} size={32} />;
          },
        }}
      />
    </Navigator>
  );
};

export default AppTabNav;
