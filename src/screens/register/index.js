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
          colors={[COLORS.splashBG1, "rgba(110,223,145,.6)"]}
          style={styles.content}
        >
          <HeaderIntro />
          <View style={styles.body}>
            <Text
              style={{
                fontSize: 32,
                fontFamily: "GothamRoundedMedium_21022",
                color: "white",
                textAlign: "center",
              }}
            >
              Regístrate
            </Text>
            <View style={styles.contentInputs}>
              <InputAuth placeholder="Nombre" />
              <InputAuth placeholder="Apellidos" />
              <InputAuth placeholder="Email" />
              <InputAuth placeholder="Contraseña" />
              <InputAuth placeholder="Repite contraseña" />
              <InputAuth placeholder="Teléfono móvil" />
            </View>
            <TouchableOpacity
              style={{
                height: 60,
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
              }}
              // onPress={() => {
              //   props.navigation.replace("Home");
              // }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <MaterialCommunityIcons
                  style={{ fontSize: 20, color: "white" }}
                  name="checkbox-blank-outline"
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "GothamRoundedBook_21018",
                    color: "white",
                    lineHeight: 20,
                  }}
                >
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
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.replace(LOGIN_SCREEN);
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "GothamRoundedBook_21018",
                color: "white",
              }}
            >
              ¿Tienes cuenta?
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "GothamRoundedBold_21016",
                  color: "white",
                  textDecorationLine: "underline",
                }}
              >
                {" Accede"}
              </Text>
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
    // alignItems: "center",
    paddingHorizontal: 30,
  },
  contentInputs: {
    marginTop: 20,
  },
  separedor: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  contentButtonSocial: {
    justifyContent: "center",
  },
});
