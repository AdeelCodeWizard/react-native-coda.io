import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CompletedTasksScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Task Completed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CompletedTasksScreen;
