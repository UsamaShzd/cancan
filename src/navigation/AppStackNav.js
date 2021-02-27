import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../configs/colors";

//screens
import AppDrawerNav from "./AppDrawerNav";
import CartScreen from "../screens/CartScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ProductScreen from "../screens/ProductScreen";

const { Navigator, Screen } = createStackNavigator();

const AppStackNav = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        options={{ headerShown: false }}
        component={AppDrawerNav}
      />
      <Screen
        name="Product"
        options={{ headerShown: false }}
        component={ProductScreen}
      />
      <Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitle: "CART",
          headerStyle: {
            backgroundColor: colors.PRIMARY_GREEN,
          },
          headerTintColor: colors.WHITE,
        }}
      />
    </Navigator>
  );
};

export default AppStackNav;
