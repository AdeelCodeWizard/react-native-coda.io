import React from "react";
import { View } from "react-native";
import { COLORS } from "../../constants/colors";
import { Button } from "../Button/Index";

type Item = { key: string; label: string };

type Props = {
  item: Item;
  selected: boolean;
  isDisabled?: boolean;
  onPress: () => void;
};

export const OptionButton = ({ item, selected, onPress, isDisabled }: Props) => {
  return (
    <View>
      <Button
        bgColor={selected ? COLORS.secondary : COLORS.white}
        onPress={onPress}
        buttonText={item.label}
        textColor={selected ? COLORS.secondary : COLORS.primary}
        disabled={isDisabled}
      />
    </View>
  );
};
