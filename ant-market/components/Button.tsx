import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
  TextStyle,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

type ButtonProps = {
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  label: string;
  onPress: () => void;
  renderIcon?: any;
};

const Button = ({
  style,
  textStyle,
  disabled,
  label,
  onPress,
  renderIcon,
}: ButtonProps) => {
  const bgColor = style?.hasOwnProperty("backgroundColor")
    ? style.backgroundColor
    : "#194260";

  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        { backgroundColor: disabled ? "#8e9399" : bgColor },
      ]}
    >
      <Ionicons
        name="school"
        size={30}
        color="black"
        style={{ marginHorizontal: "5%" }}
      />
      <Text style={[styles.text, textStyle]}>{label}</Text>
      {renderIcon ? renderIcon() : null}
    </TouchableOpacity>
  );
};

//TODO use a different styling convention
const styles = StyleSheet.create({
  button: {
    width: "80%",
    padding: 20,
    borderRadius: 4,
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
});

export default Button;
