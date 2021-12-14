import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../common/colors";
import { dimensions } from "../../../common/styles";
import { LinearGradient } from "expo-linear-gradient";

const BodyIntro = ({ iconComponent, iconMaterialName, title, description }) => {
  return (
    <View
      // colors={[COLORS.white, COLORS.white, COLORS.turquesaTransparent]}
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
    fontFamily: "Rounded1cExtraBold",
    letterSpacing: 0,
    marginTop: 22,
  },
  textDescription: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
    fontFamily: "Rounded1cRegular",
    color: COLORS.azul,
    textAlign: "center",
  },
});
