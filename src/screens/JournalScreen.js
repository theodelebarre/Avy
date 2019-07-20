import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { Colors } from '@theme';

import { getStatusBarHeight } from '../functions';

export default function JournalScreen() {

  return (
    <View style={styles.containerStyle}>
      <LinearGradient
        colors={[Colors.Blue_1, Colors.Blue_1, Colors.White]}
        style={styles.linearGradientStyle}>
        <View style={styles.profilePictureWrapperStyle}>
          <Image source={require('@assets/images/profile-picture.png')} resizeMode="cover" style={styles.profilePictureStyle} />
        </View>

        <View style={styles.panelWrapperStyle}>

        </View>
       
      </LinearGradient>
    </View>
  );
}

JournalScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  linearGradientStyle: {
    flex: 1,
  },
  profilePictureWrapperStyle: {
    alignSelf: 'center',
    marginTop: 20 + getStatusBarHeight(),
    marginBottom: 20,
    width: 168,
    height: 168,
    borderRadius: 168 / 2,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#acbdd6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 5,
  },
  profilePictureStyle: {
    width: 144,
    height: 144,
    borderRadius: 144 / 2,
  },
  panelWrapperStyle: {
    flex: 1,
    backgroundColor: Colors.White,
    marginHorizontal: 20,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    shadowColor: '#acbdd6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 5,
  }
});
