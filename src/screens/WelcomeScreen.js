import React from "react";
import {
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import RoundedButton from "../components/AppButton";

import colors from "../configs/colors";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back" size={30} color={colors.WHITE} />
          </TouchableOpacity>

          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require("../assets/logo.jpg")}
          />
          <AppText style={styles.welcomeHeading}>WELCOME!</AppText>
          <AppText style={styles.headline}>LOGIN TO YOUR ACCOUNT</AppText>
        </SafeAreaView>
      </View>

      <View style={styles.buttonContainer}>
        <RoundedButton
          title="LOGIN WITH GOOGLE"
          containerStyle={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },

  header: {
    backgroundColor: colors.PRIMARY_GREEN,
  },

  backButton: {
    margin: 15,
  },

  logo: {
    width: 150,
    height: 75,
    alignSelf: "center",
    marginBottom: 15,
  },

  welcomeHeading: {
    color: colors.WHITE,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },

  headline: {
    color: colors.WHITE,
    textAlign: "center",
    marginTop: 15,
    marginBottom: 30,
  },

  buttonContainer: {
    marginHorizontal: 20,
  },

  buttonStyle: {
    marginTop: 15,
  },
});
