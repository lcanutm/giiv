import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../common/colors";
import InputSearch from "../../components/inputSearch";

const ContactList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LinearGradient
          colors={[COLORS.splashBG1, "white", "white"]}
          style={styles.content}
        >
          <InputSearch placeholder="¿A quién quieres regalar?" />
        </LinearGradient>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.textHeader}>¿Qué te gustaría regalar?</Text>
          {/* <FlatList
            contentContainerStyle={{
              marginLeft: dimensions.width * 0.05,
              alignItems: "center",
              marginBottom: 20,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categorySearch}
            keyExtractor={(item) => {
              return item.title;
            }}
            ItemSeparatorComponent={() => {
              return <View style={{ width: 10 }}></View>;
            }}
            renderItem={({ item }) => {
              return <ButtonCategory title={item.title} />;
            }}
          /> */}
        </View>
      </View>
    </View>
  );
};

export default ContactList;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    height: 300,
  },
  textHeader: {
    fontSize: 14,
    fontFamily: "GothamRoundedBook_21018",
    color: COLORS.tealBlue,
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 5,
  },
  content: { height: "100%", paddingTop: 55 },
  body: {
    paddingTop: 10,
    backgroundColor: "white",
    marginTop: -30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: COLORS.tealBlue,
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: -8,
    },
  },
  ellipse: {
    top: 0,
    left: 89,
    width: 202,
    height: 203,
    position: "absolute",
  },
  rect5: {
    top: 0,
    left: 0,
    width: 375,
    height: 441,
    position: "absolute",
  },
  pasteleriaMaria2: {
    fontFamily: "GothamRoundedBook_21018",
    color: "#121212",
    height: 20,
    width: 135,
    fontSize: 16,
    marginTop: 312,
    marginLeft: 30,
  },
  loremIpsum: {
    fontFamily: "GothamRoundedBook_21018",
    color: "#121212",
    fontSize: 14,
    marginTop: 14,
    marginLeft: 30,
  },
  button: {
    width: 171,
    height: 22,
    flexDirection: "row",
  },
  loremIpsum2: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(29,158,112,1)",
    marginTop: 3,
  },
  icon2: {
    color: "rgba(29,158,112,1)",
    fontSize: 19,
    marginLeft: 10,
  },
  loremIpsum2Row: {
    height: 22,
    flexDirection: "row",
    flex: 1,
  },
  rect7: {
    width: 47,
    height: 22,
    borderRadius: 13,
    backgroundColor: "rgba(29,158,112,1)",
    marginLeft: 99,
  },
  text: {
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(255,255,255,1)",
    marginTop: 2,
    marginLeft: 10,
  },
  buttonRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 30,
    marginRight: 28,
  },
  image: {
    top: 0,
    alignSelf: "center",
    width: 374,
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
    fontFamily: "GothamRoundedBook_21018",
    color: "rgba(43,135,204,1)",
    height: 17,
    width: 111,
    textAlign: "center",
    marginTop: 8,
  },
  ellipseStack: {
    flex: 1,
  },
});
