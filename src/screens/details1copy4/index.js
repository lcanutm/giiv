import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, ImageBackground } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../common/colors";
import CardCategoria from "../../components/cardCategoria";
import { CHECKOUT_SCREEN } from "../../constant/screenNames";

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
const DatailsProducts4 = ({
  navigation,
  visible,
  name,
  image,
  description,
  precio,
  onPress,
  hideModals,
}) => {
  const [selectProduct, setSelectProduct] = useState(null);
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
            {/* <Text style={styles.description}>{description}</Text> */}
          </View>
          <FlatList
            contentContainerStyle={{ marginHorizontal: 24, marginTop: 24 }}
            data={categorias}
            keyExtractor={(item) => {
              return item.name;
            }}
            // ItemSeparatorComponent={() => {
            //   return <View style={{ width: 10 }}></View>;
            // }}
            renderItem={({ item, index }) => {
              return (
                <CardCategoria
                  select={selectProduct === index}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                  precio={item.precio}
                  onPress={() => {
                    setSelectProduct(index);
                  }}
                />
              );
            }}
          />
        </View>
      </View>
      <View style={styles.contentGift}>
        {selectProduct !== null ? (
          <TouchableOpacity
            style={styles.gift}
            onPress={() => {
              hideModals();
              navigation.navigate(CHECKOUT_SCREEN);
            }}
          >
            <Text style={styles.textButton}>Regalar</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.disablegift}>
            <Text style={styles.textButton}>Regalar</Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default DatailsProducts4;
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    textAlign: "center",
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
  },
  disablegift: {
    backgroundColor: COLORS.turquesaTransparent,
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
});
