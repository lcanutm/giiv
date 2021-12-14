import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { LOGIN_SCREEN } from "../../constant/screenNames";
import HeaderIntro from "../intro/components/headerIntro";

const Register = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/image/splash.jpg")}
        style={{ height: dimensions.height }}
        resizeMode="cover"
        // imageStyle={{ opacity: 0.8 }}
      >
        <LinearGradient
          colors={[COLORS.azulTransparent, "rgba(110,223,145,.6)"]}
          style={styles.content}
        >
          <HeaderIntro />
          <View style={styles.body}>
            <Text style={styles.textTitle}>Regístrate</Text>
            <View style={styles.contentInputs}>
              <InputAuth placeholder="Nombre" />
              <InputAuth placeholder="Apellidos" />
              <InputAuth placeholder="Email" />
              <InputAuth placeholder="Contraseña" />
              <InputAuth placeholder="Repite contraseña" />
              <InputAuth placeholder="Teléfono móvil" />
            </View>
            <TouchableOpacity
              style={styles.aceptar}
              // onPress={() => {
              //   props.navigation.replace("Home");
              // }}
            >
              <View style={styles.contentCheck}>
                <View style={styles.check} />
                <Text style={styles.textAceptar}>
                  Acepto la{" "}
                  <Text style={{ textDecorationLine: "underline" }}>
                    política de privacidad
                  </Text>{" "}
                  y las{" "}
                  <Text style={{ textDecorationLine: "underline" }}>
                    condiciones de uso
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
            <ButtonAuth title="Registrarme" />
          </View>
          <TouchableOpacity
            style={styles.linkLogin}
            onPress={() => {
              navigation.replace(LOGIN_SCREEN);
            }}
          >
            <Text style={styles.textLogin1}>
              {"¿Tienes cuenta? "}
              <Text style={styles.textLogin2}>Accede</Text>
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Register;
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
  aceptar: {
    height: 48,
    flexDirection: "row",
    marginTop: 6,
    marginBottom: 10,
  },
  textAceptar: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
    letterSpacing: 0,
  },
  linkLogin: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 43,
  },
  textLogin1: {
    fontSize: 18,
    fontFamily: "Rounded1cRegular",
    color: COLORS.white,
  },
  textLogin2: {
    fontSize: 18,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    textDecorationLine: "underline",
  },
  contentCheck: {
    flexDirection: "row",
  },
  check: {
    borderColor: COLORS.white,
    borderWidth: 1,
    height: 14,
    width: 14,
    borderRadius: 4,
    marginTop: 3,
    marginRight: 5,
  },
});
