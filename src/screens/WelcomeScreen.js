import React from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons, EvilIcons, Fontisto } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

import colors from "../configs/colors";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SafeAreaView>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
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
        <ScrollView style={{ flex: 1 }}>
          <AppButton containerStyle={[styles.buttonStyle, styles.googleBtn]}>
            <Ionicons name="logo-google" size={20} style={{ marginRight: 8 }} />
            <AppText style={styles.btnTextStyle}>Login With Google</AppText>
          </AppButton>

          <AppButton containerStyle={[styles.buttonStyle, styles.facebookBtn]}>
            <EvilIcons
              name="sc-facebook"
              size={30}
              style={{ marginRight: 8 }}
              color={colors.WHITE}
            />
            <AppText style={[styles.btnTextStyle, styles.whiteText]}>
              Login With Facebook
            </AppText>
          </AppButton>

          <AppButton containerStyle={[styles.buttonStyle, styles.appleBtn]}>
            <Ionicons
              name="logo-apple"
              size={20}
              style={{ marginRight: 8 }}
              color={colors.WHITE}
            />
            <AppText style={[styles.btnTextStyle, styles.whiteText]}>
              Login With Apple
            </AppText>
          </AppButton>

          <AppButton containerStyle={[styles.buttonStyle, styles.mobileBtn]}>
            <Fontisto
              name="mobile"
              size={20}
              style={{ marginRight: 8 }}
              color={colors.WHITE}
            />
            <AppText style={[styles.btnTextStyle, styles.whiteText]}>
              Login With Mobile
            </AppText>
          </AppButton>

          <AppButton containerStyle={[styles.buttonStyle, styles.appleBtn]}>
            <EvilIcons
              name="envelope"
              size={30}
              style={{ marginRight: 8 }}
              color={colors.WHITE}
            />
            <AppText style={[styles.btnTextStyle, styles.whiteText]}>
              Login With Email
            </AppText>
          </AppButton>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.LIGHT_GREY,
                marginHorizontal: 20,
              }}
            />
            <AppText>OR</AppText>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: colors.LIGHT_GREY,
                marginHorizontal: 20,
              }}
            />
          </View>

          <AppButton
            containerStyle={[
              styles.buttonStyle,
              styles.appleBtn,
              { marginTop: 0 },
            ]}
          >
            <EvilIcons
              name="envelope"
              size={30}
              style={{ marginRight: 8 }}
              color={colors.WHITE}
            />
            <AppText style={[styles.btnTextStyle, styles.whiteText]}>
              Login With Email
            </AppText>
          </AppButton>
        </ScrollView>
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
    paddingTop: 20,
    flex: 1,
  },

  buttonStyle: {
    marginTop: 25,
    borderRadius: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    height: 50,
  },

  btnTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  googleBtn: {
    backgroundColor: colors.WHITE,
  },
  facebookBtn: {
    backgroundColor: "#3b5998",
  },
  appleBtn: {
    backgroundColor: colors.BLACK,
  },

  mobileBtn: {
    backgroundColor: "#d1021c",
  },
  whiteText: {
    color: colors.WHITE,
  },
});
