import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { Colors } from '@theme';

import { StyledText } from '@components';

import { getStatusBarHeight } from '../functions';

export default function MedicineScreen() {

  return (
    <View style={styles.containerStyle}>
      <LinearGradient
        colors={[Colors.Blue_1, Colors.Blue_1, Colors.White]}
        style={styles.linearGradientStyle}>

        <View style={styles.panelWrapperStyle}>
          <View style={styles.headerWrapperStyle}>
            <StyledText fontFamily="SB" fontSize={15} color={Colors.Black_1}>
              {'Your medication'}
            </StyledText>
            <View style={styles.headerSeparatorStyle} />
          </View>
        </View>
       
      </LinearGradient>
    </View>
  );
}

MedicineScreen.navigationOptions = {
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
  panelWrapperStyle: {
    flex: 1,
    marginTop: 20 + getStatusBarHeight(),
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
  },
  headerWrapperStyle: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  headerSeparatorStyle: {
    backgroundColor: Colors.Grey_2,
    height: 1,
    marginTop: 11,
  },
});
