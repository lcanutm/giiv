import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Thumbnail,
  Image,
} from "react-native";
import { COLORS } from "../common/colors";

const ConfirmMessage = (props) => {
  let title = props.title != undefined ? props.title : "Atención";
  let message = props.message != undefined ? props.message : "";
  let icono = props.icono != undefined ? props.icono : "";

  return (
    <Modal
      animationType="fade"
      transparent
      onRequestClose={() => {
        props.hideModal && props.hideModal();
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPressOut={() => {
          props.hideModal && props.hideModal();
        }}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.contentTexts}>
            <View style={styles.contentTitle}>
              <Text uppercase style={styles.title}>
                {title}
              </Text>
            </View>
            <Text style={styles.message}>{message}</Text>
            <View style={{ width: "100%", alignItems: "center" }}>
              {icono != "" ? (
                <Thumbnail
                  square
                  resizeMode="contain"
                  source={icono}
                  style={{ height: 80, tintColor: "rgb(49, 27, 49)" }}
                />
              ) : (
                <View style={styles.contentIcon}>
                  <Image
                    style={styles.icon}
                    source={require("../assets/iconos/cabecera-monedas.png")}
                  />
                  <Text style={styles.textIcon}>+2</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.contentButton}>
            <TouchableOpacity
              style={styles.buttonCancel}
              onPress={() => {
                props.hideModal && props.hideModal();
              }}
            >
              <Text style={[styles.textCancel, styles.textCommonStyle]}>
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSend}
              onPress={() => {
                props.onSend && props.onSend();
              }}
            >
              <Text style={[styles.textSend, styles.textCommonStyle]}>
                Enviar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ConfirmMessage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 54,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.alertBG,
  },
  content: {
    backgroundColor: COLORS.alertBGContent,
    // shadowRadius: 10,
    borderRadius: 15,
    width: 270,
    height: 180,
  },
  contentTexts: {
    width: "100%",
    height: 138,
    paddingHorizontal: 30,
    paddingTop: 30,
    justifyContent: "flex-end",
  },
  contentTitle: {
    height: 55,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    color: COLORS.tealBlue,
    fontFamily: "Rounded1cExtraBold",
    letterSpacing: 0,
  },
  message: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.gunmetal,
    fontFamily: "Rounded1cExtraBold",
    lineHeight: 16,
    height: 19,
  },
  contentIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  icon: {
    width: 26,
    height: "100%",
    resizeMode: "contain",
    tintColor: COLORS.tealBlue,
    marginRight: 5,
  },
  textIcon: {
    fontSize: 33.6,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.tealBlue,
    letterSpacing: 0.84,
    marginTop: 2.5,
  },
  contentButton: {
    flex: 1,
    alignSelf: "flex-end",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: COLORS.tealBlue,
  },
  buttonCancel: {
    borderRightWidth: 1,
    borderRightColor: COLORS.tealBlue,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCommonStyle: {
    textAlign: "center",
    fontSize: 17,
    letterSpacing: -0.41,
    fontFamily: "Rounded1cExtraBold",
  },
  textCancel: {
    color: COLORS.notificationColor,
  },
  buttonSend: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textSend: {
    color: COLORS.tealBlue,
  },
});
