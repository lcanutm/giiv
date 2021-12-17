import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  INTRO_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGOT_PASS_SCREEN,
  MAIN_SCREEN,
  PRODUCT_DETAIL1_SCREEN,
  CHECKOUT_SCREEN,
  PRODUCT_DETAIL3_SCREEN,
  SENDCARD_SCREEN,
} from "./src/constant/screenNames";
import Splash from "./src/screens/splash";
import Intro from "./src/screens/intro";
import Login from "./src/screens/login";
import Register from "./src/screens/register";
import ForgotPass from "./src/screens/forgotPass";
import TabNavigation from "./src/routes/main";
import GiftsHistorical1 from "./src/screens/details1";
import Checkout from "./src/screens/checkout";
import ProductDetail3 from "./src/screens/details1copy2";
import SendCard from "./src/screens/sendCard";

const Stack = createNativeStackNavigator();
const StackInit = createNativeStackNavigator();
const StackHome = createNativeStackNavigator();

const StartStack = () => {
  return (
    <StackInit.Navigator
      initialRouteName={INTRO_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <StackInit.Screen name={INTRO_SCREEN} component={Intro} />
      <StackInit.Screen name={REGISTER_SCREEN} component={Register} />
      <StackInit.Screen name={LOGIN_SCREEN} component={Login} />
      <StackInit.Screen name={FORGOT_PASS_SCREEN} component={ForgotPass} />
    </StackInit.Navigator>
  );
};
const HomeStack = () => {
  return (
    <StackHome.Navigator
      initialRouteName={MAIN_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <StackHome.Group>
        <StackHome.Screen name={MAIN_SCREEN} component={TabNavigation} />
        <StackHome.Screen
          name={PRODUCT_DETAIL1_SCREEN}
          component={GiftsHistorical1}
        />
        <StackHome.Screen name={CHECKOUT_SCREEN} component={Checkout} />
        <StackHome.Screen name={SENDCARD_SCREEN} component={SendCard} />
      </StackHome.Group>
      <StackHome.Group screenOptions={{ presentation: "modal" }}>
        <StackHome.Screen
          name={PRODUCT_DETAIL3_SCREEN}
          component={ProductDetail3}
        />
      </StackHome.Group>
    </StackHome.Navigator>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) return <Splash setLoading={setLoading} />;
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Start"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={"Start"} component={StartStack} />
        <Stack.Screen name={"Home"} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}
