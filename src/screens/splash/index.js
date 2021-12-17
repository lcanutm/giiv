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
          Rounded1cExtraBold: require("../../assets/fonts/rounded_1c/Rounded1c-ExtraBold.ttf"),
          Rounded1cMedium: require("../../assets/fonts/rounded_1c/Rounded1c-Medium.ttf"),
          Rounded1cRegular: require("../../assets/fonts/rounded_1c/Rounded1c-Regular.ttf"),
          Rounded1cBlack: require("../../assets/fonts/rounded_1c/Rounded1c-Black.ttf"),
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
