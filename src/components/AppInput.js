import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AppText from "./AppText";

import colors from "../configs/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default (props) => {
  const {
    error,
    label,
    labelStyle,
    inputWrapperStyle,
    inputWrapperErrorStyle,
    inputStyle,
    errorStyle,
    containerStyle,
    iconName,
  } = props;

  let wrapperErrorStyle = error
    ? {
        borderWidth: 1,
        borderColor: colors.ERROR_TEXT,
        ...inputWrapperErrorStyle,
      }
    : {
        borderWidth: 1,
        borderColor: props.value ? colors.PRIMARY_GREEN : colors.LIGHT_GREY,
        ...inputWrapperErrorStyle,
      };

  let iconColor = props.value ? colors.PRIMARY_GREEN : colors.grayText;
  if (error) iconColor = colors.errorText;
  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <AppText style={[styles.label, labelStyle]}>{label}</AppText>
      <View style={[styles.inputWrapper, inputWrapperStyle, wrapperErrorStyle]}>
        {iconName && (
          <MaterialCommunityIcons
            name={iconName}
            size={25}
            style={styles.iconStyles}
            color={iconColor}
          />
        )}
        <TextInput
          {...props}
          placeholderTextColor={colors.grayText}
          style={[styles.input, inputStyle]}
        />
      </View>
      {error ? (
        <AppText style={[styles.error, errorStyle]}>{error}</AppText>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 10,
    marginBottom: 0,
  },
  label: {
    fontSize: 18,
  },
  inputWrapper: {
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 4,
  },
  iconStyles: {
    marginTop: 15,
    marginLeft: 18,
  },
  input: {
    marginLeft: 10,
    flex: 1,
    minHeight: 55,
    maxHeight: 180,
    fontSize: 18,
    paddingHorizontal: 8,
    color: colors.darkText,
  },
  error: {
    color: colors.ERROR_TEXT,
    marginTop: 5,
    fontSize: 16,
  },
});
