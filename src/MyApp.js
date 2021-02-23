import React from "react";
import { Platform, StatusBar } from "react-native";
import MainNav from "./navigation/MainNav";
import colors from "./configs/colors";

const MyApp = () => {
  return (
    <>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
        backgroundColor={colors.PRIMARY_GREEN}
      />
      <MainNav />
    </>
  );
};

export default MyApp;
