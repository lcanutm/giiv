import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
  CONTACT_LIST_SCREEN,
  GIFTS_HISTORICAL_SCREEN,
  GIFTS_SCREEN,
  HOME_SCREEN,
} from "../../constant/screenNames";
import Home from "../../screens/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../common/colors";
import Gifts from "../../screens/gifts";
import ContactList from "../../screens/contactsList";
import { createStackNavigator } from "@react-navigation/stack";
import GiftsHistorical from "../../screens/giftsHistorical";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabButton = ({
  label,
  icon,
  iconDisable,
  onPress,
  accessibilityState,
}) => {
  let focused = accessibilityState.selected;
  return (
    <View style={{ height: 57, width: "33.33%" }}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        {focused ? (
          <Image
            style={{
              ...styles.icon,
              tintColor: COLORS.turquesa,
            }}
            source={icon}
          />
        ) : (
          <Image
            style={{
              ...styles.icon,
              tintColor: COLORS.gris,
            }}
            source={iconDisable ? iconDisable : icon}
          />
        )}
        {label && (
          <Text
            style={[
              styles.label,
              { color: focused ? COLORS.turquesa : COLORS.gris },
            ]}
          >
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const StackGifts = () => {
  return (
    <Stack.Navigator
      initialRouteName={GIFTS_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={GIFTS_SCREEN} component={Gifts} />
      <Stack.Screen
        name={GIFTS_HISTORICAL_SCREEN}
        component={GiftsHistorical}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.bar,
      }}
    >
      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              label="Catálogo"
              {...props}
              icon={require("../../assets/iconos/tabBarEnlaceIcono.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Gifts"}
        component={StackGifts}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              {...props}
              icon={require("../../assets/iconos/tabBarEnlaceIconoCopy.png")}
              iconDisable={require("../../assets/iconos/trackin1Copy4.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name={CONTACT_LIST_SCREEN}
        component={ContactList}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => (
            <TabButton
              label="Contactos"
              {...props}
              icon={require("../../assets/iconos/tabBarEnlaceIcono3.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;

const styles = StyleSheet.create({
  icon: {
    width: 19,
    height: 19,
    resizeMode: "contain",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    height: 57,
    position: "absolute",
    bottom: 26,
    right: 22,
    left: 22,
    paddingHorizontal: 10,
    borderRadius: 30,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  label: {
    // fontFamily
    fontSize: 12,
  },
});
