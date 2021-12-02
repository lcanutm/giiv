import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../common/colors";
import { shadowItem } from "../common/styles";

const StripeVerdatis = ({
  title,
  button,
  onPress,
  bgColor,
  titleColor,
  heightItem,
  iconRight,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        shadowItem,
        { backgroundColor: bgColor ? bgColor : COLORS.kelleyGreen },
        { height: heightItem ? heightItem : 44 },
      ]}
    >
      <View style={styles.contentText}>
        <Text
          style={[styles.title, { color: titleColor ? titleColor : "white" }]}
        >
          {title}
        </Text>
      </View>
      {iconRight ? (
        <View style={styles.contentIcon}>{iconRight}</View>
      ) : (
        <View style={styles.contentButton}>
          <Text style={styles.textButton}>Crear Nueva</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};
export default StripeVerdatis;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingLeft: 16,
    flexDirection: "row",
    marginBottom: 2,
    alignItems: "center",
  },
  contentText: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "GothamRoundedMedium_21022",
    letterSpacing: 0.5,
  },
  contentButton: {
    width: 120,
    height: 25,
    marginRight: 14,
    borderColor: COLORS.logoColor,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 14,
    color: COLORS.logoColor,
    fontFamily: "GothamRoundedMedium_21022",
    letterSpacing: 0.35,
  },
  contentIcon: {
    width: 42,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
