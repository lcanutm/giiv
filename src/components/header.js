import React from "react";
import { StyleSheet, View } from "react-native";
import { shadowHeader } from "../common/styles";

const Header = ({ rightComponent, bodyComponent, leftComponent }) => {
  return (
    <View style={[styles.header, shadowHeader]}>
      <View style={styles.content}>
        <View style={styles.leftStyle}>{leftComponent}</View>
        <View style={styles.bodyStyle}>{bodyComponent}</View>
        <View style={styles.leftStyle}>{rightComponent}</View>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 88,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "white",
    paddingBottom: 3,
  },
  content: {
    flexDirection: "row",
    height: 46,
    paddingHorizontal: 6,
  },
  leftStyle: { width: 46, height: "100%" },
  bodyStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
