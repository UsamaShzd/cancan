import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//navigators
import AppStackNav from "./AppStackNav";
import AppTabNav from "./AppTabNav";
import AppDrawerNav from "./AppDrawerNav";

const MainNav = () => {
  return (
    <NavigationContainer>
      <AppDrawerNav />
    </NavigationContainer>
  );
};

export default MainNav;
