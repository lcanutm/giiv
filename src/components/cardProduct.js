import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { COLORS } from "../common/colors";

function CardProduct({ name, image, description, precio, onPress }) {
  return (
    <View style={{ height: 500, alignItems: "center" }}>
      <View style={styles.rect5}>
        <Text style={styles.pasteleriaMaria2}>{name}</Text>
        <Text style={styles.loremIpsum}>{description}</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.loremIpsum2Row}>
              <Text style={styles.loremIpsum2}>Ver catalogo completo</Text>
              <Entypo
                name="chevron-thin-right"
                size={25}
                resizeMode="contain"
                color={COLORS.turquesa}
              ></Entypo>
            </View>
          </TouchableOpacity>
          <View style={styles.rect7}>
            <Text style={styles.text}>{precio}€</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.imageButton} onPress={onPress}>
        <ImageBackground
          source={image}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <TouchableOpacity style={styles.button2}>
            <View style={styles.group}>
              <View style={styles.rect6}>
                <Text style={styles.patrocinado}>Patrocinado</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
}

export default CardProduct;
const styles = StyleSheet.create({
  rect5: {
    top: 0,
    left: 0,
    width: "100%",
    height: 441,
    position: "absolute",
  },
  pasteleriaMaria2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.grisoscuro,
    fontSize: 18,
    marginTop: 312,
  },
  loremIpsum: {
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    fontSize: 14,
    marginTop: 14,
    lineHeight: 22,
  },
  button: {
    flex: 1,
    height: 22,
    flexDirection: "row",
  },
  loremIpsum2: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.turquesa,
    fontSize: 14,
  },
  loremIpsum2Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
  },
  rect7: {
    paddingHorizontal: 16,
    height: 34,
    borderRadius: 22,
    backgroundColor: COLORS.turquesa,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    fontSize: 17,
  },
  buttonRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 33,
    marginRight: 28,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: 292,
    position: "absolute",
    backgroundColor: "white",
  },
  imageButton: {
    top: 0,
    alignSelf: "center",
    width: "100%",
    height: 292,
    position: "absolute",
    backgroundColor: "white",
  },
  image_imageStyle: {},
  button2: {
    width: 111,
    height: 33,
    marginTop: 17,
    marginLeft: 238,
  },
  group: {
    width: 111,
    height: 33,
  },
  rect6: {
    width: 111,
    height: 33,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,1)",
  },
  patrocinado: {
    fontFamily: "Rounded1cExtraBold",
    color: "rgba(43,135,204,1)",
    height: 17,
    width: 111,
    textAlign: "center",
    marginTop: 8,
  },
});
