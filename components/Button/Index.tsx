import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

type Props = {
  bgColor: string;
  textColor?: string;
  buttonText: string;
  onPress?: () => void;
  disabled?: boolean;
};

export const Button = ({
  bgColor,
  buttonText,
  onPress,
  textColor,
  disabled = false,
}: Props) => {
  const buttonStyles = [
    style.container,
    {
      backgroundColor: bgColor,
      opacity: disabled ? 0.5 : 1,
    },
  ];

  const textStyles = [
    style.text,
    { color: textColor || (disabled ? "#888" : "#002244") },
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
    >
      <Text style={textStyles}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
