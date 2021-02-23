import React from "react";
import { StatusBar } from "react-native";
import MainNav from "./navigation/MainNav";
import colors from "./configs/colors";

const MyApp = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.PRIMARY_GREEN}
      />
      <MainNav />
    </>
  );
};

export default MyApp;
