import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

export const AuthForm = ({
  dismissKeyboard,
  customFormStyles = {},
  children,
}) => {
  const formStyles = {
    ...styles.form,
    ...customFormStyles,
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
        style={styles.container}
      >
        <ImageBackground
          source={require("../assets/images/bg1.jpeg")}
          style={styles.background}
        >
          <View style={formStyles}>{children}</View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  form: {
    justifyContent: "flex-end",
    width: "100%",
    backgroundColor: "#fff",
    position: "relative",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
});
