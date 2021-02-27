import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { Entypo } from "@expo/vector-icons";

import colors from "../configs/colors";

import AppText from "../components/AppText";
import SimpleNav from "../components/SimpleNav";
import CartItem from "../components/CartItem";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
    { id: "skfjl" },
    { id: "sdfjlsdjf" },
    { id: "nkdnf" },
  ]);
  const renderAddressBar = () => {
    return (
      <View style={styles.addressBarContainer}>
        <AppText style={styles.addressBarText}>Delivery Address</AppText>
        <AppText style={[styles.addressBarText, styles.orangeText]}>
          ADD
        </AppText>
      </View>
    );
  };

  const renderCoupinBar = () => {
    return (
      <View style={styles.couponBarContainer}>
        <View style={styles.ticketIconContainer}>
          <Entypo name="ticket" color={colors.WHITE} size={25} />
        </View>
        <AppText style={styles.addressBarText}>Apply Coupon</AppText>
      </View>
    );
  };

  const renderCartDetail = () => {
    return (
      <View style={styles.cartDetailContainer}>
        <AppText style={styles.lightHeading}>PRICE DETAILS</AppText>

        <View style={styles.detailRow}>
          <View>
            <AppText style={styles.detailText}>Item Price Total</AppText>
            <AppText style={{ fontSize: 12, color: colors.LIGHT_GREY }}>
              Inclusive All Taxes
            </AppText>
          </View>

          <AppText style={styles.detailText}>AED 120</AppText>
        </View>

        <View
          style={[
            styles.detailRow,
            {
              borderBottomWidth: 1,
              borderBottomColor: colors.LIGHT_GREY,
              paddingBottom: 15,
            },
          ]}
        >
          <AppText style={styles.detailText}>Delivery Charge</AppText>
          <AppText style={styles.detailText}>AED 30</AppText>
        </View>

        <View style={styles.detailRow}>
          <AppText style={styles.detailText}>Total Amount</AppText>

          <AppText style={styles.detailText}>AED 150</AppText>
        </View>
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <>
        {renderAddressBar()}
        {}
      </>
    );
  };

  const renderListFooter = () => {
    return (
      <>
        {renderCoupinBar()}
        {renderCartDetail()}
        <View style={{ height: 200 }} />
      </>
    );
  };
  const renderCartItemList = () => {
    return (
      <FlatList
        data={cartItems}
        renderItem={({ item }) => {
          return <CartItem />;
        }}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderListHeader}
        ListFooterComponent={renderListFooter}
      />
    );
  };

  const renderProceedSection = () => {
    return (
      <View style={styles.proceedContainer}>
        <SafeAreaView>
          <View style={styles.proceedRow}>
            <View style={styles.proceedDetails}>
              <AppText style={{ fontSize: 22 }}>AED 150</AppText>
              <AppText style={[styles.greenText, { fontSize: 12 }]}>
                View Price Details
              </AppText>
            </View>
            <View style={styles.proceedBtn}>
              <TouchableOpacity
                style={[
                  styles.proceedBtn,
                  {
                    alignItems: "center",
                    justifyContent: "center",

                    padding: 17,
                  },
                ]}
              >
                <AppText style={{ color: colors.WHITE, fontSize: 22 }}>
                  Proceed To Pay
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <SimpleNav
        navigation={navigation}
        title="Cart"
        goBack
        bgColor={colors.PRIMARY_GREEN}
      />
      {renderCartItemList()}
      {renderProceedSection()}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navbarContainerStyle: {
    backgroundColor: colors.PRIMARY_GREEN,
  },

  addressBarContainer: {
    backgroundColor: colors.WHITE,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: "space-between",
  },

  addressBarText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  greenText: {
    color: colors.PRIMARY_GREEN,
  },
  orangeText: {
    color: colors.ORANGE,
  },

  couponBarContainer: {
    backgroundColor: colors.WHITE,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 10,
  },

  ticketIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.ORANGE,
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 20,
  },

  cartDetailContainer: {
    backgroundColor: colors.WHITE,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  lightHeading: {
    color: colors.LIGHT_GREY,
    fontSize: 22,
  },

  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    justifyContent: "space-between",
  },
  detailText: {
    fontSize: 22,
  },

  proceedContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.WHITE,
  },

  proceedRow: {
    flexDirection: "row",
  },

  proceedDetails: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    minWidth: 150,
  },

  proceedBtn: {
    backgroundColor: colors.PRIMARY_GREEN,
    flex: 1,
  },
});
