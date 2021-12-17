import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  BackHandler,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { dimensions } from "../../common/styles";
import { COLORS, mainColor, textColor } from "../../common/colors";
import { INTRO_SCREEN, LOGIN_SCREEN } from "../../constant/screenNames";
import BodyIntro from "./components/bodyIntro";
import HeaderIntro from "./components/headerIntro";
import { LinearGradient } from "expo-linear-gradient";
const { width } = dimensions;

const sliderContents = [
  {
    icono: "",
    description:
      "Manda un regalo a la persona que quieras sorprender con sólo su número de teléfono",
  },
  {
    icono: "",
    description:
      "Recibirá un mensaje con una experiencia de empaquetado virtual con tu mensaje",
  },
  {
    icono: "",
    description:
      "Paga sólo cuando acepte tu regalo y confirme dirección de entrega",
  },
];

const Intro = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const back = BackHandler.addEventListener("hardwareBackPress", () => {
      props.navigation.replace(INTRO_SCREEN);
      return true;
    });
    return back.remove();
  }, [props.navigation]);

  const setSliderPage = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setCurrentPage(indexOfNextScreen);
    }
  };

  return (
    <LinearGradient
      style={{ backgroundColor: "white", flex: 1 }}
      colors={[
        COLORS.azulTransparent,
        COLORS.white,
        COLORS.white,
        COLORS.turquesaTransparent,
      ]}
    >
      <HeaderIntro />
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setSliderPage(event);
        }}
      >
        {sliderContents.map((value, index) => {
          return (
            <BodyIntro
              key={index}
              iconComponent={
                <Image
                  style={{
                    width: 119,
                    height: 119,
                    resizeMode: "contain",
                    // tintColor: COLORS.tealBlue,
                  }}
                  source={require("../../assets/image/no-image.png")}
                />
              }
              // title="Agrega a tus contactos"
              description={value.description}
            />
          );
        })}
      </ScrollView>
      <View style={styles.paginationWrapper}>
        <View style={styles.paginationDots}>
          {currentPage < 2 ? (
            Array.from(Array(3).keys()).map((_key, index) => (
              <>
                {index !== currentPage ? (
                  <View style={[styles.commonStyleDots, styles.disableDots]} />
                ) : (
                  <View style={[styles.commonStyleDots, styles.enableDots]} />
                )}
              </>
            ))
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                props.navigation.replace(LOGIN_SCREEN);
              }}
            >
              <Text style={styles.textButton}>Empezar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default Intro;
const styles = StyleSheet.create({
  commonStyleDots: {
    marginLeft: 7,
    height: 11,
    width: 11,
    borderRadius: 6,
    borderWidth: 1,
  },
  disableDots: {
    borderColor: COLORS.turquesa,
  },
  enableDots: {
    borderColor: COLORS.turquesa,
    backgroundColor: COLORS.turquesa,
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 34,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  paginationDots: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    height: 45,
    alignItems: "center",
  },
  button: {
    backgroundColor: COLORS.turquesa,
    width: "90%",
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
  textButton: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    textAlign: "center",
  },
});
