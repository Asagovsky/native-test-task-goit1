import React, { useState } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { usePasswordVisibility } from "../hooks/usePasswordVisibility";

export const AuthInput = ({
  placeholder = "",
  isPassword = false,
  onChange = () => {},
  onFocus = () => {},
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = usePasswordVisibility();

  const handleFocused = () => {
    onFocus();
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyles = isFocused
    ? { ...styles.input, ...styles.inputFocused }
    : styles.input;

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={inputStyles}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        secureTextEntry={isPassword && !passwordVisibility}
        onFocus={handleFocused}
        onBlur={handleBlur}
      />
      {isPassword && isFocused && (
        <Text onPress={setPasswordVisibility} style={styles.showPassword}>
          {passwordVisibility ? "Приховати" : "Показати"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 16,
    alignItems: "center",
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputFocused: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
  },
  showPassword: {
    position: "absolute",
    right: 16,
    top: 16,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
