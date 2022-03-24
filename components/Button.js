import { TouchableOpacity, Text, StyleSheet } from "react-native";

export const Button = ({ onPress, buttonName, customStyles = {} }) => {
  const buttonStyles = {
    ...styles.button,
    ...customStyles,
  };

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.title}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    marginBottom: 16,
    minHeight: 50,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
});
