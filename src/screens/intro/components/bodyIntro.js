import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../common/colors";
import { dimensions } from "../../../common/styles";

const BodyIntro = ({ iconComponent, iconMaterialName, title, description }) => {
  return (
    <View
      style={{
        width: dimensions.width,
        height: "100%",
      }}
    >
      <View style={styles.content}>
        {iconComponent ? (
          iconComponent
        ) : (
          <MaterialCommunityIcons
            name={iconMaterialName}
            size={120}
            color={COLORS.tealBlue}
          />
        )}
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.textDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default BodyIntro;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 33,
    paddingBottom: "20%",
  },
  text: {
    fontSize: 22,
    color: COLORS.tealBlue,
    textAlign: "center",
    fontFamily: "GothamRoundedBold_21016",
    letterSpacing: 0.55,
    marginBottom: 14,
    marginTop: 28,
  },
  textDescription: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.tealBlue,
    textAlign: "center",
  },
});
