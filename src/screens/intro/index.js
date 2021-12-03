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
const { width } = dimensions;

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
    <>
      <HeaderIntro />
      <ScrollView
        style={{ flex: 1 }}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          // console.log(event);
          setSliderPage(event);
        }}
      >
        <BodyIntro
          key={1}
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
          description="Aqui va la descripcion de giiv...."
        />
        <BodyIntro
          key={2}
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
          // title="Recibe y envia Verdatis"
          description="Aqui va la descripcion de giiv...."
        />
        <BodyIntro
          key={3}
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
          // title="Anónimo y gratis"
          description="Aqui va la descripcion de giiv...."
        />
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
              style={{
                backgroundColor: "green",
                width: "90%",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
              onPress={() => {
                props.navigation.replace(LOGIN_SCREEN);
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 20,
                  fontFamily: "GothamRoundedBook_21018",
                  color: "white",
                  textAlign: "center",
                }}
              >
                Empezar
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default Intro;
const styles = StyleSheet.create({
  content: {
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
    paddingBottom: "20%",
  },
  text: {
    fontSize: 20,
    color: mainColor,
    textAlign: "center",
    fontWeight: "bold",
  },
  textDescription: {
    marginTop: 10,
    fontSize: 18,
    color: textColor,
    textAlign: "center",
  },
  commonStyleDots: {
    marginLeft: 9,
    height: 12,
    width: 12,
    borderRadius: 6,
    borderWidth: 1,
  },
  disableDots: {
    borderColor: "green",
  },
  enableDots: {
    borderColor: "green",
    backgroundColor: "green",
  },
  paginationWrapper: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
  },
  paginationDots: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
});
