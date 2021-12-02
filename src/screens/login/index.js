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
              Accede
            </Text>
            <View style={styles.contentInputs}>
              <InputAuth placeholder="Email" />
              <InputAuth placeholder="Contraseña" />
            </View>
            <TouchableOpacity
              style={{
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate(FORGOT_PASS_SCREEN);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "GothamRoundedBook_21018",
                  color: "white",
                }}
              >
                ¿Olvidaste la contraseña?
              </Text>
            </TouchableOpacity>
            <ButtonAuth
              title="Acceder"
              onPress={() => {
                navigation.navigate(HOME_SCREEN);
              }}
            />
            <View style={styles.separedor}>
              <Text style={{ color: "white" }}>----- o -----</Text>
            </View>
            <View style={styles.contentButtonSocial}>
              <ButtonAuthSocial title="Accede con Google" />
              <ButtonAuthSocial title="Accede con Facebook" />
              <ButtonAuthSocial title="Accede con Apple" />
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 20,
            }}
            onPress={() => {
              navigation.navigate(REGISTER_SCREEN);
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "GothamRoundedBook_21018",
                color: "white",
              }}
            >
              ¿No tienes cuenta?
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "GothamRoundedBold_21016",
                  color: "white",
                  textDecorationLine: "underline",
                }}
              >
                {" Regístrate"}
              </Text>
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
