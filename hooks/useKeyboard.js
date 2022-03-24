import { useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);

  const activateKeyboard = () => {
    setIsKeyboardActive(true);
  };

  const dismissKeyboard = () => {
    setIsKeyboardActive(false);
    Keyboard.dismiss();
  };

  return [isKeyboardActive, activateKeyboard, dismissKeyboard];
};
