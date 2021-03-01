import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTabNav from "./AppTabNav";

import colors from "../configs/colors";

const { Navigator, Screen } = createDrawerNavigator();

const AppDrawerNav = () => {
  return (
    <Navigator
      drawerContent={CustomDrawer}
      drawerContentOptions={{
        activeTintColor: colors.PRIMARY_GREEN,

        activeBackgroundColor: colors.WHITE,
        itemStyle: {
          borderBottomColor: colors.LIGHT_GREY,
          borderBottomWidth: 1,
          borderRadius: 0,
          width: "100%",
          marginLeft: 0,
          paddingLeft: 10,
        },
      }}
    >
      <Screen
        name="AppTabNav"
        component={AppTabNav}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              color={color}
              size={25}
            />
          ),
          drawerLabel: "HOME",
        }}
      />
    </Navigator>
  );
};

export default AppDrawerNav;
