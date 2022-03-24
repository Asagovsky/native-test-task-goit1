import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { LoginScreen } from "./Screens/LoginScreen";
import { RegistrationScreen } from "./Screens/RegistrationScreen";

const loadApplication = async () => {
  await Font.loadAsync({
    "Roboto-Thin": require("./assets/fonts/Roboto/Roboto-Thin.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
  });
};

export default function App() {
  const [isAppLoaded, setIsAppLoaded] = useState(false);

  if (!isAppLoaded) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsAppLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
