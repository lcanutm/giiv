import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../common/colors";
import { shadowItem } from "../common/styles";

const ItemList = ({ title, iconRight, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, shadowItem]}>
      <View style={styles.contentText}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.contentIcon}>{iconRight}</View>
    </TouchableOpacity>
  );
};
export default ItemList;

const styles = StyleSheet.create({
  container: {
    height: 54,
    width: "100%",
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
    backgroundColor: "white",
  },
  contentText: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.gunmetal,
    letterSpacing: 0.4,
  },
  contentIcon: {
    width: 100,
    height: "100%",
  },
});
