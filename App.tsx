import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { QuestionsScreen } from './screens/QuestionsScreen';
import { FIRESTORE_DB } from './config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Translation } from './types/translationTyps';
import { COLORS } from './constants/colors';

export default function App() {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fetchTranslations = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(FIRESTORE_DB, 'translations')
      );
      const translationData: Translation[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data() as Translation;
        translationData.push(data);
      });

      setTranslations(translationData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching translations:', error);
      setIsLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchTranslations();
  }, []);

  return (
    <View style={[styles.container, isLoading ? styles.loading : {}]}>
      {isLoading ? (
        <ActivityIndicator size={'large'} color={COLORS.black} />
      ) : hasError ? (
        <View>
          <Text>Something went wrong.</Text>
        </View>
      ) : (
        <QuestionsScreen
          translations={translations}
          reloadTranslations={fetchTranslations}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: { justifyContent: 'center', alignItems: 'center' },
});
