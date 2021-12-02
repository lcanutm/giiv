import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../common/colors";

const ContentBody = ({ typeVerdati }) => {
  switch (typeVerdati) {
    case "verdatis":
      return (
        <Image
          style={styles.logoImage}
          source={require("../assets/iconos/logo-blanco-verdatis.png")}
        />
      );
    case "verdatis1":
      return (
        <>
          <Image
            style={styles.logoVerdatis}
            source={require("../assets/iconos/tipo-bueno.png")}
          />
          <Text style={styles.textLogo}>Algo bueno...</Text>
        </>
      );
    case "verdatis2":
      return (
        <>
          <Image
            style={styles.logoVerdatis}
            source={require("../assets/iconos/tipo-consejo.png")}
          />
          <Text style={styles.textLogo}>Un consejo...</Text>
        </>
      );
    case "verdatis3":
      return (
        <>
          <Image
            style={styles.logoVerdatis}
            source={require("../assets/iconos/tipo-ligar.png")}
          />
          <Text style={styles.textLogo}>Ligoteo...</Text>
        </>
      );

    default:
      return <></>;
  }
};

const colorsBG = (typeVerdati) => {
  switch (typeVerdati) {
    case "verdatis":
      return [COLORS.footerBG1, COLORS.footerBG2];
    case "verdatis1":
      return [COLORS.kelleyGreen, COLORS.kelleyGreen];
    case "verdatis2":
      return [COLORS.gunmetal, COLORS.gunmetal];
    case "verdatis3":
      return [COLORS.scarlet, COLORS.scarlet];

    default:
      return [COLORS.footerBG1, COLORS.footerBG2];
  }
};

const HeaderVerdatis = (props) => {
  return (
    <View
      style={[
        styles.containerHeader,
        // { backgroundColor: background ? background : mainColor },
      ]}
    >
      <LinearGradient
        start={[0, 1]}
        end={[1, 0]}
        style={{ flex: 1, justifyContent: "flex-end" }}
        colors={colorsBG(props.typeVerdati)}
      >
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              props.navigation.navigate(props.screenName);
            }}
          >
            <Image
              style={styles.iconLeft}
              source={require("../assets/iconos/cabecera-volver.png")}
            />
          </TouchableOpacity>
          <View style={styles.contentBody}>
            <ContentBody typeVerdati={props.typeVerdati} />
          </View>
          <View style={styles.backButton} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default HeaderVerdatis;

const styles = StyleSheet.create({
  containerHeader: {
    height: 158,
    width: "100%",
  },
  contentBody: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 21,
  },
  content: {
    flexDirection: "row",
    marginTop: 51,
    height: 119,
  },
  backButton: {
    width: 46,
    height: 46,
    marginLeft: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLeft: {
    resizeMode: "contain",
    height: 22,
    width: 15,
    tintColor: COLORS.logoColor,
  },
  logoImage: {
    width: 120,
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.logoColor,
  },
  logoVerdatis: {
    width: 120,
    height: 72,
    resizeMode: "contain",
    tintColor: COLORS.logoColor,
  },
  textLogo: {
    textAlign: "center",
    fontSize: 18,
    color: COLORS.logoColor,
    fontFamily: "GothamRoundedMedium_21022",
    letterSpacing: 0.45,
    marginTop: 15,
  },
});
