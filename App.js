import React, { useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  INTRO_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  FORGOT_PASS_SCREEN,
  MAIN_SCREEN,
} from "./src/constant/screenNames";
import Splash from "./src/screens/splash";
import Intro from "./src/screens/intro";
import Login from "./src/screens/login";
import Register from "./src/screens/register";
import ForgotPass from "./src/screens/forgotPass";
import MainNavigation from "./src/screens/main";

const Stack = createNativeStackNavigator();
const StackHome = createNativeStackNavigator();

const StartStack = () => {
  return (
    <StackHome.Navigator
      initialRouteName={INTRO_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={INTRO_SCREEN} component={Intro} />
      <StackHome.Screen name={REGISTER_SCREEN} component={Register} />
      <StackHome.Screen name={LOGIN_SCREEN} component={Login} />
      <StackHome.Screen name={FORGOT_PASS_SCREEN} component={ForgotPass} />
    </StackHome.Navigator>
  );
};
const HomeStack = () => {
  return (
    <StackHome.Navigator
      initialRouteName={MAIN_SCREEN}
      screenOptions={{ headerShown: false }}
    >
      <StackHome.Screen name={MAIN_SCREEN} component={MainNavigation} />
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
