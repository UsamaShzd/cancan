import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//navigators
import AppStackNav from "./AppStackNav";
import AppTabNav from "./AppTabNav";

const MainNav = () => {
  return (
    <NavigationContainer>
      <AppTabNav />
    </NavigationContainer>
  );
};

export default MainNav;
