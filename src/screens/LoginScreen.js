import React from "react";
import {
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Card from "../components/Card";
import colors from "../configs/colors";
import LineText from "../components/LineText";
import AppInput from "../components/AppInput";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri:
              "http://ecommerce.sidtechnology.me/public/assets/media/products/uploaded/1606203999.jpeg",
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.cardContainer}>
          <SafeAreaView>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back" size={30} color={colors.WHITE} />
            </TouchableOpacity>
            <Card style={styles.card}>
              <AppText style={{ fontSize: 25 }}>Login To Your</AppText>
              <AppText style={styles.underLineGreenText}>Account</AppText>
              <View
                style={{
                  width: 100,
                  height: 4,
                  marginVertical: 10,
                  backgroundColor: colors.PRIMARY_GREEN,
                }}
              />
              <AppInput label="Email" placeholder="Email" value="email" />

              <AppInput
                label="Password"
                placeholder="Password"
                secureTextEntry={true}
              />

              <View style={{ alignItems: "flex-end", marginTop: 20 }}>
                <AppText style={{ color: colors.PRIMARY_GREEN, fontSize: 20 }}>
                  Forgot Password
                </AppText>
              </View>
              <AppButton containerStyle={styles.loginBtn}>
                <AppText style={styles.btnText}>LOGIN</AppText>
              </AppButton>
              <LineText text="OR" />

              <AppButton
                containerStyle={[
                  styles.loginBtn,
                  {
                    marginTop: 0,
                    backgroundColor: colors.WHITE,
                    borderWidth: 2,
                    borderColor: colors.PRIMARY_GREEN,
                  },
                ]}
                onPress={() => navigation.navigate("CreateAccount")}
              >
                <AppText
                  style={[styles.btnText, { color: colors.PRIMARY_GREEN }]}
                >
                  Create New Account
                </AppText>
              </AppButton>
            </Card>
          </SafeAreaView>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // height: "80%",
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.LIGHT_GREY,
  },

  cardContainer: {
    marginHorizontal: 15,
  },
  card: { marginTop: 160, padding: 20 },

  underLineGreenText: {
    fontSize: 32,
    fontWeight: "bold",

    color: colors.PRIMARY_GREEN,
  },
  loginBtn: {
    marginTop: 20,
    borderRadius: 50,
  },

  btnText: {
    color: colors.WHITE,
    fontWeight: "bold",
    fontSize: 18,
  },
});
