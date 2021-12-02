import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../common/colors";

const BlackStripe = ({ nameContact }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>para:</Text>
      <Text style={styles.name}>{nameContact}</Text>
    </View>
  );
};
export default BlackStripe;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 12,
    color: COLORS.logoColor,
    fontFamily: "GothamRoundedMedium_21022",
    letterSpacing: 0.3,
    marginVertical: 2,
  },
  name: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.logoColor,
    fontFamily: "GothamRoundedMedium_21022",
    letterSpacing: 0.4,
  },
});
