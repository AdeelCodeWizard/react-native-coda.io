import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { OptionButton } from "./OptionButton";

interface ButtonProps {
  onSelect: (label: string) => void;
  options?: string[];
  disabled: boolean;
}

export const OptionsButton = ({ onSelect, options, disabled }: ButtonProps) => {
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  const handleButtonPress = (label: string) => {
    if (selectedLabel === label) {
      setSelectedLabel(null);
    } else {
      setSelectedLabel(label);
      onSelect(label);
    }
  };

  const optionsMapping = options?.map((item, index) => ({
    key: index.toString(),
    label: item,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={optionsMapping}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.buttonRow}>
            <OptionButton
              item={item}
              selected={selectedLabel === item.label}
              onPress={() => {
                handleButtonPress(item.label);
              }}
              isDisabled={disabled}
            />
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    paddingHorizontal: 84,
  },
  buttonRow: {
    flex: 1,
    maxWidth: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
