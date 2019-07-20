import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <View style={styles.containerStyle}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
