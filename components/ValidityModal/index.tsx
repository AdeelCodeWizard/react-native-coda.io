import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button as CustomButton } from '../Button/Index';
import { COLORS } from '../../constants/colors';
import { ValidityModalProps } from '../../types/validityModal';

export const ValidatyModal = ({
  selectedAnswer,
  options,
  correctAnswer,
  setMappingId,
  mappingId,
  setValidator,
  setChangeBtnText,
  setButtonParams,
  translationsLength,
  reloadTranslations,
}: ValidityModalProps) => {
  const handleContinue = () => {
    if (translationsLength - 1 === mappingId) {
      reloadTranslations();
      setMappingId(0);
      setValidator(false);
      setChangeBtnText(false);
      setButtonParams('');
    } else {
      setMappingId(mappingId + 1);
      setValidator(false);
      setChangeBtnText(false);
      setButtonParams('');
    }
  };

  const renderButtonTypeStyles = () => {
    if (options.includes(selectedAnswer)) {
      return {
        backgroundColor: COLORS.white,
        color: COLORS.success,
      };
    }
    return {
      backgroundColor: COLORS.white,
      color: COLORS.fail,
    };
  };

  const renderContent = () => {
    if (options.includes(selectedAnswer)) {
      return 'Great job!';
    }
    return `Answer: ${correctAnswer}`;
  };

  return (
    <View
      style={[
        style.modelContainer,
        options.includes(selectedAnswer)
          ? { backgroundColor: COLORS.success }
          : { backgroundColor: COLORS.fail },
      ]}
    >
      <Text style={style.validityTxt}>{renderContent()}</Text>
      <CustomButton
        onPress={handleContinue}
        buttonText={
          translationsLength - 1 === mappingId ? 'Reload' : 'Continue'
        }
        bgColor={renderButtonTypeStyles().backgroundColor}
      />
    </View>
  );
};

const style = StyleSheet.create({
  modelContainer: {
    position: 'absolute',
    // top: 10,
    left: 0,
    right: 0,
    bottom: -35,
    padding: 16,
    borderRadius: 14,
    paddingVertical: 60,
  },
  validityTxt: {
    marginLeft: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
