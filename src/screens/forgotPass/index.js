import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../common/colors";
import { dimensions } from "../../common/styles";
import ButtonAuth from "../../components/buttonAuth";
import InputAuth from "../../components/inputAuth";
import { REGISTER_SCREEN } from "../../constant/screenNames";
import HeaderIntro from "../intro/components/headerIntro";

const ForgotPass = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/splash.jpg")}
        style={{ height: dimensions.height }}
        resizeMode="cover"
        // imageStyle={{ opacity: 0.8 }}
      >
        <LinearGradient
          colors={[COLORS.splashBG1, "rgba(110,223,145,.6)"]}
          style={styles.content}
        >
          <HeaderIntro />
          <View style={styles.body}>
            <Text style={styles.textTitle}>Recuperar clave</Text>
            <View style={styles.contentInputs}>
              <InputAuth placeholder="Email" />
            </View>
            <ButtonAuth title="Recibir clave" />
          </View>
          <TouchableOpacity
            style={styles.linkRegister}
            onPress={() => {
              navigation.navigate(REGISTER_SCREEN);
            }}
          >
            <Text style={styles.textRegister1}>
              {"¿No tienes cuenta? "}
              <Text style={styles.textRegister2}>Regístrate</Text>
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default ForgotPass;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 48,
    paddingHorizontal: 47,
  },
  contentInputs: {
    marginTop: 34,
    marginBottom: 8,
  },
  separedor: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  contentButtonSocial: {
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 32,
    fontFamily: "Rounded1cMedium",
    color: "white",
    textAlign: "center",
    letterSpacing: 0,
  },
  forgotPass: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  textForgotPass: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
    letterSpacing: 0,
  },
  linkRegister: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 43,
  },
  textRegister1: {
    fontSize: 18,
    fontFamily: "Rounded1cRegular",
    color: COLORS.white,
  },
  textRegister2: {
    fontSize: 18,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    textDecorationLine: "underline",
  },
});
