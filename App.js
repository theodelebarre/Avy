import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const cacheResourcesAsync = async () => {
    await Font.loadAsync({
      'stilu-regular': require('@assets/fonts/Stilu-Regular.otf'),
      'stilu-oblique': require('@assets/fonts/Stilu-Oblique.otf'),
      'stilu-semibold': require('@assets/fonts/Stilu-SemiBold.otf'),
      'stilu-semibold-oblique': require('@assets/fonts/Stilu-SemiBoldOblique.otf'),
      'stilu-bold': require('@assets/fonts/Stilu-Bold.otf'),
      'stilu-bold-oblique': require('@assets/fonts/Stilu-BoldOblique.otf'),
      'stilu-light': require('@assets/fonts/Stilu-Light.otf'),
      'stilu-light-oblique': require('@assets/fonts/Stilu-LightOblique.otf'),
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={() => console.warn('ERROR LOADING INTRO <<')}
      />
    );
  }
  else {
    return (
    <View style={styles.containerStyle}>
      <AppNavigator />
    </View>
  );
}
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
