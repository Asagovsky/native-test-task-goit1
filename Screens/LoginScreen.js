import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthForm } from "../components/AuthForm";

import { AuthInput } from "../components/AuthInput";
import { Button } from "../components/Button";
import { useKeyboard } from "../hooks/useKeyboard";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isKeyboardActive, activateKeyboard, dismissKeyboard] = useKeyboard();

  const handleEnterButtonPress = () => {
    dismissKeyboard();
    if (email && password) {
      console.log({
        email,
        password,
      });
    }
  };

  const formStyles = {
    paddingBottom: isKeyboardActive ? 16 : 144,
  };

  return (
    <AuthForm dismissKeyboard={dismissKeyboard} customFormStyles={formStyles}>
      <Text style={styles.title}>Ввійти</Text>
      <AuthInput
        value={email}
        onChange={setEmail}
        placeholder="Адреса електронної пошти"
        onFocus={activateKeyboard}
      />
      <AuthInput
        value={password}
        onChange={setPassword}
        isPassword={true}
        placeholder="Пароль"
        onFocus={activateKeyboard}
      />
      {!isKeyboardActive && (
        <>
          <Button
            buttonName="Ввійти"
            onPress={handleEnterButtonPress}
            customStyles={{ marginTop: 27 }}
          />
          <View>
            <Text style={styles.registerText}>
              Немає аккаунту? Зареєструватися?
            </Text>
          </View>
        </>
      )}
    </AuthForm>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 33,
  },
  registerText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
});
