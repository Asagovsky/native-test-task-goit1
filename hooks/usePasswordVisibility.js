import { useState } from "react";

export const usePasswordVisibility = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const switchVisibility = () => {
    if (isPasswordVisible) {
      setIsPasswordVisible(false);
    } else {
      setIsPasswordVisible(true);
    }
  };

  return [isPasswordVisible, switchVisibility];
};
