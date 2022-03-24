import { View, TouchableOpacity, StyleSheet } from "react-native";

import AddIcon from "../assets/icons/add.svg";

export const AuthImage = ({ image, setImage }) => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.image}>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.8}
          onPress={setImage}
        >
          <AddIcon
            style={image ? styles.deleteButtonSvg : styles.addButtonSVG}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "relative",
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    position: "absolute",
    top: -60,
    right: 0,
    left: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  addButtonSVG: {
    backgroundColor: "transparent",
    width: 25,
    height: 25,
    color: "#FF6C00",
  },
  deleteButtonSvg: {
    backgroundColor: "transparent",
    width: 25,
    height: 25,
    color: "#E8E8E8",
    transform: [{ rotateZ: "45deg" }],
  },
});
