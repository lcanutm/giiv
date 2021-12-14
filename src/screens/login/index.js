import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../common/colors";
import { dimensions } from "../../common/styles";
import ButtonAuth from "../../components/buttonAuth";
import ButtonAuthSocial from "../../components/buttonAuthSocial";
import InputAuth from "../../components/inputAuth";
import {
  FORGOT_PASS_SCREEN,
  HOME_SCREEN,
  REGISTER_SCREEN,
} from "../../constant/screenNames";
import HeaderIntro from "../intro/components/headerIntro";

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/splash.jpg")}
        style={{ height: dimensions.height }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={[COLORS.azulTransparent, "rgba(110,223,145,.60)"]}
          style={styles.content}
        >
          <HeaderIntro />
          <View style={styles.body}>
            <Text style={styles.textTitle}>Accede</Text>
            <View style={styles.contentInputs}>
              <InputAuth placeholder="Email" />
              <InputAuth placeholder="Contraseña" />
            </View>
            <TouchableOpacity
              style={styles.forgotPass}
              onPress={() => {
                navigation.navigate(FORGOT_PASS_SCREEN);
              }}
            >
              <Text style={styles.textForgotPass}>
                ¿Olvidaste la contraseña?
              </Text>
            </TouchableOpacity>
            <ButtonAuth
              title="Acceder"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
            <View style={styles.separedor}>
              <Text style={{ color: COLORS.white, letterSpacing: -1 }}>
                ----- o -----
              </Text>
            </View>
            <View style={styles.contentButtonSocial}>
              <ButtonAuthSocial title="Accede con Google" />
              <ButtonAuthSocial title="Accede con Facebook" />
              <ButtonAuthSocial title="Accede con Apple" />
            </View>
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

export default Login;
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
