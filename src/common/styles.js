import { Dimensions, Platform, StyleSheet } from "react-native";
import { COLORS } from "./colors";

const { width, height } = Dimensions.get("window");
export const dimensions = { width, height };

const shadowHeaderIos = {
  shadowColor: "black",
  shadowOpacity: 0.1,
  shadowRadius: 25,
  shadowOffset: {
    width: 0,
    height: 10,
  },
};
const shadowHeaderAndroid = {
  elevation: 20,
};
const shadowItemIos = {
  shadowColor: "black",
  shadowOpacity: 0.1,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 5,
  },
};
const shadowItemAndroid = {
  elevation: 11,
};
const shadowFooterIos = {
  shadowColor: "black",
  shadowOpacity: 0.2,
  shadowRadius: 20,
  shadowOffset: {
    width: 0,
    height: 15,
  },
};
const shadowFooterAndroid = {
  elevation: 24,
};
export const shadowHeader =
  Platform.OS === "ios" ? shadowHeaderIos : shadowHeaderAndroid;
export const shadowItem =
  Platform.OS === "ios" ? shadowItemIos : shadowItemAndroid;
export const shadowFooter =
  Platform.OS === "ios" ? shadowFooterIos : shadowFooterAndroid;

export const textStyle = StyleSheet.create({
  txt_xl: {
    fontFamily: "Rounded1cExtraBold",
    fontSize: 22,
    color: COLORS.azul,
  },
  txt_l: {
    fontFamily: "Rounded1cExtraBold",
    fontSize: 18,
    color: COLORS.grisoscuro,
  },
  txt_m: {
    fontFamily: "Rounded1cMedium",
    fontSize: 16,
    color: COLORS.gris,
  },
  txt_s: {
    fontFamily: "Rounded1cMedium",
    fontSize: 14,
    color: COLORS.gris,
  },
  txt_xxs: {
    fontFamily: "Rounded1cMedium",
    fontSize: 12,
    color: COLORS.gris,
  },
  txt_xxxs: {
    fontFamily: "Rounded1cExtraBold",
    fontSize: 10,
    color: COLORS.turquesa,
  },
});
