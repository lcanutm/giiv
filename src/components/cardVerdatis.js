import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../common/colors";
import { shadowItem } from "../common/styles";

const CardVerdatis = ({ iconLeft, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, shadowItem]}>
      {iconLeft && <View style={styles.leftContent}>{iconLeft}</View>}
      <View style={styles.bodyContent}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.rightContent}>
        <Image
          style={styles.iconLeft}
          source={require("../assets/iconos/arrow-next.png")}
        />
      </View>
    </TouchableOpacity>
  );
};
export default CardVerdatis;

const styles = StyleSheet.create({
  container: {
    height: 128,
    width: "100%",
    marginBottom: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  leftContent: {
    width: 84,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContent: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontFamily: "GothamRoundedMedium_21022",
    color: COLORS.gunmetal,
    letterSpacing: 0.6,
  },
  rightContent: {
    width: 42,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLeft: {
    width: 13,
    height: 22,
    resizeMode: "contain",
  },
});
