import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import Card from "./Card";
import AppText from "./AppText";
import colors from "../configs/colors";

const AppButton = ({
  children,
  title,
  onPress,
  containerStyle,
  ImageComponent,
}) => {
  const containerStyleProp = Array.isArray(containerStyle)
    ? [styles.container, ...containerStyle]
    : [styles.container, containerStyle];
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={containerStyleProp}>
        {children ? (
          children
        ) : (
          <>
            {ImageComponent && <ImageComponent />}
            <AppText style={styles.title}>{title}</AppText>
          </>
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY_GREEN,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
