import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";

import AppTabNav from "./AppTabNav";

const { Navigator, Screen } = createDrawerNavigator();

const AppDrawerNav = () => {
  return (
    <Navigator drawerContent={CustomDrawer}>
      <Screen name="AppTabNav" component={AppTabNav} />
    </Navigator>
  );
};

export default AppDrawerNav;
