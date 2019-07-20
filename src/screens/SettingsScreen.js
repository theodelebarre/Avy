import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

export default function SettingsScreen() {

  return (
    <View style={styles.containerStyle}>
      
    </View>
  );
}

SettingsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
