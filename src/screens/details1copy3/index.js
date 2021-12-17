import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, ImageBackground } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../common/colors";
import CardCategoria from "../../components/cardCategoria";
import DatailsProducts4 from "../details1copy4";

const categorias = [
  {
    image: require("../../assets/image/no-image.png"),
    name: "Tarta Red velvet",
    description: "Dos bizcochos aterciopeladamente rojos.",
    precio: 25,
  },
  {
    image: require("../../assets/image/no-image.png"),
    name: "Tarta Botánica",
    description: "Hecha con bizcochos de vainilla y crema chantillí.",
    precio: 60,
  },
  {
    image: require("../../assets/image/no-image.png"),
    name: "Tarta Charlotte",
    description:
      "Llama la atención en cualquier fiesta y además está deliciosa.",
    precio: 18,
  },
];
const DatailsProducts3 = ({
  navigation,
  visible,
  name,
  image,
  description,
  precio,
  onPress,
}) => {
  const [visibleDetailsCategoria, setVisibleDetailsCategoria] = useState(false);
  const [currentCategoria, setCurrentCategoria] = useState({});
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

              {/* <Image
                  source={require("../../assets/image/no-image.png")}
                  resizeMode="contain"
                  style={styles.image}
                /> */}
              <Text style={styles.textHeader}>Álvaro García</Text>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          ></ImageBackground>
          <View style={styles.rect5}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <FlatList
            contentContainerStyle={{ marginHorizontal: 12, marginTop: 24 }}
            data={categorias}
            keyExtractor={(item) => {
              return item.name;
            }}
            // ItemSeparatorComponent={() => {
            //   return <View style={{ width: 10 }}></View>;
            // }}
            renderItem={({ item }) => {
              return (
                <CardCategoria
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  precio={item.precio}
                  onPress={() => {
                    setCurrentCategoria(item);
                    setVisibleDetailsCategoria(true);
                  }}
                />
              );
            }}
          />
        </View>
      </View>
      {visibleDetailsCategoria && (
        <DatailsProducts4
          hideModals={visible}
          navigation={navigation}
          name={currentCategoria.name}
          description={currentCategoria.description}
          image={currentCategoria.image}
          visible={setVisibleDetailsCategoria}
        />
      )}
    </Modal>
  );
};

export default DatailsProducts3;
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
  image: {
    alignSelf: "center",
    width: "100%",
    height: 250,
    overflow: "hidden",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  body: {
    height: "100%",
    backgroundColor: "white",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.white,
  },
  rect5: {
    width: "100%",
    paddingHorizontal: 24,
  },
  name: {
    fontFamily: "Rounded1cExtraBold",
    color: COLORS.grisoscuro,
    fontSize: 18,
    marginTop: 18,
  },
  description: {
    fontFamily: "Rounded1cMedium",
    color: COLORS.gris,
    fontSize: 14,
    marginTop: 8,
    lineHeight: 22,
  },
});
