import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import colors from "../configs/colors";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{ backgroundColor: colors.PRIMARY_GREEN, paddingHorizontal: 15 }}
      >
        <SafeAreaView>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={30} color={colors.WHITE} />
          </TouchableOpacity>
          <AppText
            style={{
              marginTop: 60,
              marginLeft: 10,
              fontSize: 24,
              color: colors.WHITE,
            }}
          >
            Create An
          </AppText>
          <AppText
            style={{
              marginLeft: 10,
              fontSize: 38,
              color: colors.WHITE,
              marginBottom: 60,
            }}
          >
            Account
          </AppText>
        </SafeAreaView>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          <AppInput label="First Name" placeholder="First Name" />
          <AppInput label="Last Name" placeholder="Last Name" />
          <AppInput label="Email" placeholder="Email" />
          <AppInput label="Phone Number" placeholder="Phone Number" />
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,

          backgroundColor: colors.WHITE,
        }}
      >
        <SafeAreaView>
          <AppButton containerStyle={{ borderRadius: 0 }}>
            <AppText
              style={{ color: colors.WHITE, fontSize: 22, fontWeight: "bold" }}
            >
              Register Now
            </AppText>
          </AppButton>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
