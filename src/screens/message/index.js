import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View, Text, Modal, Image, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../common/colors";
import InputSearch from "../../components/inputSearch";
import { SENDCARD_SCREEN } from "../../constant/screenNames";

const Message = ({ navigation, visible }) => {
  return (
    <Modal visible transparent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View
            style={{
              width: "100%",
              justifyContent: "flex-end",
              marginTop: 55,
              flexDirection: "row",
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
                onPress={() => visible(false)}
                style={{
                  width: 40,
                  height: "100%",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <MaterialCommunityIcons
                    color={COLORS.white}
                    size={30}
                    name="chevron-left"
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.textHeader}>Tu mensaje</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>¿Quieres añadir un mensaje?</Text>
          <View
            style={{
              height: 150,
              width: "100%",
              paddingHorizontal: 30,
            }}
          >
            <View
              style={{
                flex: 1,
                borderRadius: 12,
                paddingHorizontal: 30,
                backgroundColor: COLORS.white,
                marginTop: 6,
              }}
            >
              <TextInput
                placeholder="Mensaje de agradecimiento..."
                onChangeText={(text) => {
                  // onChangeText && onChangeText(text);
                }}
                placeholderTextColor={COLORS.placeholder}
                style={styles.input}
                multiline
              />
            </View>
          </View>
        </View>
        <View style={styles.contentGift}>
          <TouchableOpacity
            style={styles.gift}
            onPress={() => {
              visible(false);
              navigation.navigate(SENDCARD_SCREEN);
            }}
          >
            <Text style={styles.textButton}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Message;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  header: {
    height: 130,
  },
  textHeader: {
    flex: 1,
    fontSize: 22,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
    textAlign: "center",
    marginRight: 40,
  },
  content: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 12,
  },
  image: {
    height: 34,
    width: 34,
    borderRadius: 17,
  },
  backBotton: {},
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 130,
  },
  text: {
    fontSize: 14,
    fontFamily: "Rounded1cMedium",
    color: COLORS.white,
  },
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
    borderColor: COLORS.white,
    borderWidth: 1,
  },
  textButton: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.white,
    textAlign: "center",
  },
  button: {
    width: 101,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 12,
    margin: 6,
  },
  input: {
    paddingHorizontal: 6,
    textAlign: "center",
    fontSize: 14,
    letterSpacing: 0,
    color: COLORS.placeholder,
    fontFamily: "Rounded1cMedium",
  },
});
