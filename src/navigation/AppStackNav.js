import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import AppDrawerNav from "./AppDrawerNav";

const { Navigator, Screen } = createStackNavigator();

const AppStackNav = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="AppDrawerNav" component={AppDrawerNav} />
    </Navigator>
  );
};

export default AppStackNav;
