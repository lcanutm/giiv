import React, { useEffect } from "react";
import * as Font from "expo-font";
import SplashBody from "./components/splash";

const Splash = ({ setLoading }) => {
  useEffect(() => {
    const goToScreen = () => {
      setTimeout(() => {
        getFonts();
      }, 2000);
    };
    goToScreen();
    const getFonts = async () => {
      try {
        await Font.loadAsync({
          GothamRoundedBold_21016: require("../../assets/fonts/gotham-rounded/GothamRoundedBold_21016.ttf"),
          GothamRoundedBook_21018: require("../../assets/fonts/gotham-rounded/GothamRoundedBook_21018.ttf"),
          GothamRoundedMedium_21022: require("../../assets/fonts/gotham-rounded/GothamRoundedMedium_21022.ttf"),
        });
        setLoading && setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
  }, [setLoading]);

  return <SplashBody />;
};

export default Splash;
