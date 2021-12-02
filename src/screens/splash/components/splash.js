import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, ImageBackground, Image } from "react-native";
import { COLORS } from "../../../common/colors";
import { dimensions } from "../../../common/styles";

const SplashBody = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/image/splash.jpg")}
        style={{ height: dimensions.height }}
        resizeMode="cover"
        // imageStyle={{ opacity: 0.8 }}
      >
        <LinearGradient
          colors={[COLORS.splashBG1, "rgba(110,223,145,.6)"]}
          style={styles.content}
        >
          <Image
            style={styles.logoVerdatis}
            source={require("../../../assets/image/no-image.png")}
          />
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default SplashBody;
const styles = StyleSheet.create({
  container: {
    width: dimensions.width,
    height: dimensions.height,
  },
  content: {
    width: dimensions.width,
    height: dimensions.height,
    alignItems: "center",
    justifyContent: "center",
  },
  logoVerdatis: {
    // tintColor: COLORS.logoColor,
    width: 180,
    resizeMode: "contain",
  },
});
