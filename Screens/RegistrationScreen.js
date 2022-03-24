import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { AuthForm } from "../components/AuthForm";
import { AuthImage } from "../components/AuthImage";

import { AuthInput } from "../components/AuthInput";
import { Button } from "../components/Button";
import { useKeyboard } from "../hooks/useKeyboard";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);

  const [isKeyboardActive, activateKeyboard, dismissKeyboard] = useKeyboard();

  const handleEnterButtonPress = () => {
    dismissKeyboard();
    if (login && email && password) {
      console.log({
        login,
        email,
        password,
      });
    }
  };

  const formStyles = {
    paddingTop: 92,
    paddingBottom: isKeyboardActive ? 16 : 78,
  };

  return (
    <AuthForm dismissKeyboard={dismissKeyboard} customFormStyles={formStyles}>
      <AuthImage image={image} setImage={setImage} />
      <Text style={styles.title}>Реєстрація</Text>
      <AuthInput
        value={login}
        onChange={setLogin}
        placeholder="Логін"
        onFocus={activateKeyboard}
      />
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
            buttonName="Зареєструватися"
            onPress={handleEnterButtonPress}
            customStyles={{ marginTop: 27 }}
          />
          <Text style={styles.registerText}>Вже є аккаунт? Ввійти?</Text>
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
