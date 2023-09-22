import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { COLORS } from '../constants/colors';
import { OptionsButton } from '../components/OptionsButton';
import { ValidatyModal } from '../components/ValidityModal';
import { Button } from '../components/Button/Index';
import { Translation } from '../types/translationTyps';

const { height: windowHeight } = Dimensions.get('window');

interface QuestionsScreenProps {
  translations: Translation[];
  reloadTranslations: () => void;
}
export const QuestionsScreen: React.FC<QuestionsScreenProps> = ({
  translations,
  reloadTranslations,
}) => {
  const [buttonParams, setButtonParams] = useState<string>('');
  const [validator, setValidator] = useState<boolean>(false);
  const [changeBtnText, setChangeBtnText] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [mappingId, setMappingId] = useState(0);

  const buttonHandler = (label: string) => {
    setChangeBtnText(true);
    setButtonParams(label);
    if (label === translations[mappingId]?.answer[1]) setSelectedAnswer(label);
  };
  const handleContinue = () => {
    setValidator(true);
  };

  const renderEnglishText = () => {
    const { english, answer } = translations[mappingId] || {};
    if (!english || !answer) return null;

    const renderWord = (word: string, index: number, words: string[]) => {
      const isAnswerWord = answer.includes(word);
      return (
        <Text
          key={index}
          style={isAnswerWord ? style.underlineText : undefined}
        >
          {word} {index < words.length - 1 ? '' : ''}
        </Text>
      );
    };

    return (
      <Text style={style.question}>
        {english
          .split(' ')
          .map((word, index, words) => renderWord(word, index, words))}
      </Text>
    );
  };

  const renderGermanText = () => {
    const { german, answer } = translations[mappingId] || {};
    if (!german || !answer) return null;

    const renderWord = (word: string) => {
      return answer.includes(word) ? '__________' : word;
    };

    const answerText = german
      .split(' ')
      .map((word) => renderWord(word))
      .join(' ')
      .replace('__________', buttonParams || '________');

    return <Text style={[style.answerSection]}>{answerText}</Text>;
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.questionContainer}>
        <Text style={style.questionHeaderText}>Fill in the missing words</Text>
        <View style={style.questionInnerContainer}>{renderEnglishText()}</View>
        {renderGermanText()}
        <OptionsButton
          onSelect={(parms) => buttonHandler(parms)}
          options={translations[mappingId]?.options}
          disabled={!!selectedAnswer && validator}
        />
      </View>

      <View style={style.footer}>
        {changeBtnText && validator ? (
          <ValidatyModal
            selectedAnswer={selectedAnswer}
            options={translations[mappingId]?.options}
            correctAnswer={translations[mappingId]?.answer[1]}
            setMappingId={setMappingId}
            mappingId={mappingId}
            setValidator={setValidator}
            setChangeBtnText={setChangeBtnText}
            setButtonParams={setButtonParams}
            translationsLength={translations.length}
            reloadTranslations={reloadTranslations}
          />
        ) : (
          <View style={style.continueButton}>
            <Button
              bgColor={changeBtnText ? COLORS.success : COLORS.secondary}
              buttonText={changeBtnText ? 'CHECK ANSWER' : 'Continue'}
              onPress={handleContinue}
              textColor={COLORS.white}
              disabled={!changeBtnText}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
  },
  questionContainer: {
    marginTop: windowHeight * 0.05,
    alignItems: 'center',
  },
  questionHeaderText: {
    fontSize: 16,
    color: COLORS.white,
  },
  questionInnerContainer: {
    marginTop: 24,
  },
  question: {
    fontSize: 26,
    color: COLORS.white,
    letterSpacing: 1,
  },
  underlineText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  answerSection: {
    marginVertical: 50,
    fontSize: 20,
    color: COLORS.white,
    letterSpacing: 1,
  },
  footer: {
    position: 'relative',
  },
  continueButton: {
    justifyContent: 'center',
    marginTop: 16,
    marginHorizontal: 30,
  },
});
