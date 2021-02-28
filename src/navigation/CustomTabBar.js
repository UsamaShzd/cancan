import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import colors from "../configs/colors";

function MyTabBar({ state, descriptors, navigation, ...rest }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.WHITE }}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const TabIcon = options.tabBarIcon || null;

          const isFocused = state.index === index;

          const onPress = () => {
            if (route.name === "MyAccount") {
              navigation.navigate("Welcome");
              return;
            }
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                alignItems: "center",
                paddingTop: 5,
              }}
            >
              <TabIcon
                size={23}
                color={isFocused ? colors.PRIMARY_GREEN : colors.TAB_BAR_GREY}
              />
              <Text
                style={{
                  color: isFocused ? colors.PRIMARY_GREEN : colors.TAB_BAR_GREY,
                  marginVertical: 4,
                }}
              >
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default MyTabBar;
