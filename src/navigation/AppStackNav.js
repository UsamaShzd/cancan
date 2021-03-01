import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../configs/colors";

//screens
import AppDrawerNav from "./AppDrawerNav";
import CartScreen from "../screens/CartScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ProductScreen from "../screens/ProductScreen";
import LoginScreen from "../screens/LoginScreen";

const { Navigator, Screen } = createStackNavigator();

const AppStackNav = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={AppDrawerNav} />
      <Screen name="Cart" component={CartScreen} />
      <Screen name="Product" component={ProductScreen} />
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
};

export default AppStackNav;
