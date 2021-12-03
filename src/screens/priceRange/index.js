import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { COLORS } from "../../common/colors";

const PriceRange = ({ navigation, visible }) => {
  return (
    <Modal visible transparent>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <TouchableOpacity
                onPress={() => {
                  visible(false);
                }}
                style={styles.buttonLeft}
              >
                <MaterialCommunityIcons
                  name="chevron-left"
                  size={30}
                  color="white"
                />
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <Text style={styles.textHeader}>Tu pones el precio</Text>
              </View>
              <View style={{ width: 30 }}></View>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.group}>
            <Text style={styles.loremIpsum}>
              Indica el rango que te insteresa
            </Text>
            <View style={styles.rectRow}>
              <View style={styles.rect}>
                <Text style={styles.desde}>Desde</Text>
              </View>
              <View style={styles.rect1}>
                <Text style={styles.hasta}>Hasta</Text>
              </View>
            </View>
          </View>
          <View style={styles.group2}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.aplicar}>Aplicar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PriceRange;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  header: {
    height: 88,
  },
  textHeader: {
    fontSize: 22,
    fontFamily: "GothamRoundedBook_21018",
    color: "white",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  textBody1: {
    fontSize: 24,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.tealBlue,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  textBody2: {
    fontSize: 17,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.gunmetal,
    textAlign: "center",
    marginHorizontal: 15,
    lineHeight: 22,
  },
  iniciar: {
    fontSize: 17,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.kelleyGreen,
  },
  description: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  content: { height: "100%", paddingTop: 33 },
  body: {
    paddingTop: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: 30, height: 30, position: "absolute", right: 15 },
  imageBody: { width: 150, height: 150 },
  contentHeader: {
    flexDirection: "row",
    alignItems: "center",
    height: 55,
    paddingHorizontal: 15,
  },
  group: {
    width: "100%",
    height: 77,
    marginTop: 367,
    alignItems: "center",
  },
  loremIpsum: {
    fontFamily: "GothamRoundedBook_21018",
    color: "white",
  },
  rect: {
    width: 126,
    height: 59,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
  },
  desde: {
    fontFamily: "GothamRoundedBook_21018",
    color: "#121212",
    marginTop: 21,
    marginLeft: 43,
  },
  rect1: {
    width: 126,
    height: 59,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    marginLeft: 8,
  },
  hasta: {
    fontFamily: "GothamRoundedBook_21018",
    color: "#121212",
    marginTop: 21,
    marginLeft: 44,
  },
  rectRow: {
    height: 59,
    flexDirection: "row",
    marginTop: 2,
  },
  group2: {
    width: "100%",
    height: 42,
    marginTop: 274,
  },
  button: {
    width: 283,
    height: 42,
    backgroundColor: "rgba(86,159,73,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 26,
    alignSelf: "center",
  },
  aplicar: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(255,255,255,1)",
    marginTop: 13,
    marginLeft: 119,
  },
});
