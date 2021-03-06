import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { COLORS } from "../../../common/colors";

const HeaderIntro = () => (
  <View
    // colors={[COLORS.azulTransparent, COLORS.white]}
    style={styles.content}
  >
    <Image
      style={styles.image}
      source={require("../../../assets/image/no-image.png")}
    />
  </View>
);

export default HeaderIntro;

const styles = StyleSheet.create({
  content: {
    height: 206,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    width: 55,
    height: 55,
    resizeMode: "contain",
    // tintColor: COLORS.tealBlue,
  },
});
