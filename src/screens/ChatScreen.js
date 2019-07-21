import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

export default function ChatScreen() {
  const { popToTop } = useNavigation();

  return (
    <TouchableOpacity activeOpacity={1} onPress={() => popToTop()} style={styles.containerStyle}>
      <Image source={require('@assets/images/ChatScreen.png')} style={{ height: '100%', width: '100%' }} resizeMode="contain" />
    </TouchableOpacity>
  );
}

ChatScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
