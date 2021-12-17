import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { COLORS } from "../../common/colors";
import { dimensions } from "../../common/styles";
import InputAuth1 from "../../components/inputAuthcopy";
import {
  GIFTS_HISTORICAL_SCREEN,
  MAIN_SCREEN,
} from "../../constant/screenNames";
import CardTheme from "../home/components/cardTheme";
import Message from "../message";

const thematic = [
  {
    color: "rgb(217,181,203)",
    title: "Enhorabuena",
    icono: require("../../assets/iconos/etiquetaIconosEnhorabuena.png"),
  },
  {
    color: "rgb(254,208,213)",
    title: "Cumpleaños",
    icono: require("../../assets/iconos/etiquetaIconosCumple.png"),
  },
  {
    color: "rgb(186,237,239)",
    title: "Gracias",
    icono: require("../../assets/iconos/etiquetaIconosGracias.png"),
  },
  {
    color: "rgb(217,181,203)",
    title: "Graduación",
    icono: require("../../assets/iconos/etiquetaIconosGraduacion.png"),
  },
];
const InputCode = ({ onChangeText, placeholder }) => {
  return (
    <View style={stylesInput.container}>
      <View
        // onPress={onChangeText}
        style={stylesInput.content}
      >
        <View style={stylesInput.contentInput}>
          <Text style={stylesInput.placeholderText}>{placeholder}</Text>
          {/* <TextInput
            editable={false}
            maxLength={25}
            style={stylesInput.placeholderText}
            keyboardType="default"
            autoCapitalize="none"
            placeholder={placeholder}
            placeholderTextColor={COLORS.borderDots}
            onChangeText={onChangeText}
          /> */}
        </View>
        <TouchableOpacity style={stylesInput.contentIcon}>
          <Text style={stylesInput.textIcon}>Aplicar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const SendCard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            paddingTop: 45,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 44,
              width: "100%",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                width: 40,
                height: "100%",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  color={COLORS.azul}
                  size={30}
                  name="chevron-left"
                />
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginRight: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/image/no-image.png")}
                resizeMode="contain"
                style={styles.image}
              />
              <Text style={styles.textHeader}>Álvaro García</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <View style={styles.description}>
            <Image
              source={require("../../assets/image/no-image.png")}
              resizeMode="contain"
              style={styles.image}
            />
            <View style={{ flexWrap: "wrap", flexDirection: "row", flex: 1 }}>
              <Text style={styles.textCard}>
                Los gastos de envío estimados se calcularán cuando se tu amigo
                confirme.<Text style={styles.textCard1}> (Más detalles)</Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.itemCard}>
              <Text style={styles.textCard2}>
                Especialidad chocolate blanco
              </Text>
              <Text style={styles.textCard3}>22€</Text>
            </View>
            <View style={styles.itemCard}>
              <Text style={styles.textCard2}>Envío (estimados)</Text>
              <Text style={styles.textCard3}>8€</Text>
            </View>
            <View style={styles.itemCard}>
              <Text style={styles.textCard2}>Impuestos</Text>
              <Text style={styles.textCard3}>2€</Text>
            </View>
            <View style={styles.itemCard}>
              <Text style={[styles.textCard2, styles.textCard4]}>TOTAL</Text>
              <Text style={[styles.textCard3, styles.textCard4]}>30€</Text>
            </View>
          </View>
          <View style={styles.contentPuntas}>
            {Array.from(Array(parseInt(anchoCuadro.toString())).keys()).map(
              (_key, index) => (
                <View style={styles.puntas} />
              )
            )}
          </View>
        </View>
        <View style={styles.subContent}>
          <InputCode placeholder="Código de descuento..." />
          <View style={styles.titleSend}>
            <Text style={styles.textTitleSend}>Enviar desde:</Text>
            <Text style={styles.textTitleSend1}>
              O <Text style={styles.textTitleSend2}>inicia sesión</Text>
            </Text>
          </View>
          <InputAuth1 placeholder="Nombre" />
          <InputAuth1 placeholder="Apellidos" />
          <InputAuth1 placeholder="Tu teléfono" />
          <InputAuth1 placeholder="Email" />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.textDescrption}>
          asdf asdf asdfas. fasdf asdf asdfa sda asdf asdf asdf asdf asdfasd
          fasd asdfasdfa sfasd fasdf asdfasdf asdfasdfasfasdf asdfas dfasdfasdfa
          sdfasdfasdf asdfa sdf as dfa asdf.
        </Text>
      </View>
      <View style={styles.contentGift}>
        <TouchableOpacity
          style={styles.gift}
          onPress={() => {
            // setmessage(true);
          }}
        >
          <Text style={styles.textButton}>Continuar y enviar tarjeta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SendCard;
const anchoCuadro = (dimensions.width - 30) / 16;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 90,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: "rgb(0,0,0)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: COLORS.white,
    zIndex: 99,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.azul,
    textAlign: "center",
    marginRight: 40,
  },
  textCard: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: "rgba(143,143,143,0.4)",
    textAlign: "justify",
    lineHeight: 18,
  },
  textCard1: {
    fontSize: 12,
    color: "rgba(4,180,161,0.4)",
  },
  textCard2: {
    flex: 1,
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
  },
  textCard3: {
    fontSize: 14,
    fontFamily: "Rounded1cBlack",
    color: COLORS.gris,
  },
  textCard4: {
    fontFamily: "Rounded1cBlack",
    color: COLORS.turquesa,
  },
  content: { flex: 1, paddingHorizontal: 13 },
  image: { width: 30, height: 30, marginRight: 6, borderRadius: 15 },
  buttonLeft: {
    width: 30,
  },
  imageHeader: { width: 30, height: 30, position: "absolute", right: 15 },
  contentGift: {
    width: "100%",
    height: 44,
    position: "absolute",
    bottom: 34,
    paddingHorizontal: 24,
  },
  gift: {
    backgroundColor: COLORS.turquesa,
    width: "100%",
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
  card: {
    height: 208,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: COLORS.white,
    shadowOpacity: 0.2,
    shadowRadius: 25,
    shadowColor: "rgb(24,24,24)",
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemCard: {
    flexDirection: "row",
    marginBottom: 8,
  },
  titleSend: {
    flexDirection: "row",
    marginTop: 32,
    paddingHorizontal: 11,
  },
  textTitleSend: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    flex: 1,
  },
  textTitleSend1: {
    fontSize: 12,
    fontFamily: "Rounded1cMedium",
    color: COLORS.turquesa,
  },
  textTitleSend2: {
    textDecorationLine: "underline",
  },
  textDescrption: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    textAlign: "center",
    marginTop: 14,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.turquesa,
    marginTop: 22,
  },
  subContent: { marginHorizontal: 11, marginTop: 48 },
  contentPuntas: {
    position: "absolute",
    flexDirection: "row",
    bottom: -12,
    overflow: "hidden",
    height: 32,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  puntas: {
    width: anchoCuadro,
    height: anchoCuadro,
    // borderWidth: 1,
    backgroundColor: COLORS.white,
    transform: [{ rotate: "45deg" }],
  },
});

const stylesInput = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 44,
    width: "100%",
    alignSelf: "center",
  },
  content: {
    justifyContent: "center",
    flex: 1,
    borderRadius: 12,
    borderColor: COLORS.borderDots,
    padding: 5,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    shadowColor: "rgb(0,0,0)",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  contentInput: {
    justifyContent: "center",
    flex: 1,
    marginLeft: 7,
  },
  placeholderText: {
    fontSize: 14,
    fontFamily: "Rounded1cRegular",
    color: COLORS.gris,
    letterSpacing: 0.2,
  },
  contentIcon: {
    width: 76,
    height: 34,
    justifyContent: "center",
    backgroundColor: "rgba(4,180,161,0.3)",
    borderRadius: 12,
  },
  textIcon: {
    fontSize: 14,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    letterSpacing: 0.88,
    textAlign: "center",
  },
});
