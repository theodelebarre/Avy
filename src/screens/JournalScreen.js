import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { StyledText } from '@components';

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
          <View style={styles.welcomeWrapperStyle}>
            <StyledText fontFamily="SB" fontSize={15} color={Colors.Black_1}>
              {'Hi Jenny,\nwelcome to your Journal.'}
            </StyledText>
            <StyledText fontSize={15} color={Colors.Grey_1}>
              {'Keep here a record of how you feel.'}
            </StyledText>
          </View>
          
          <TouchableOpacity style={styles.recordButtonStyle}>
            <Image source={require('@assets/icons/Bell.png')} resizeMode="cover" style={styles.bellIconStyle} />

            <View style={styles.recordButtonTitleWrapperStyle}>
              <StyledText fontFamily="SB" fontSize={14} color={Colors.Orange_1}>
                {'How are you feeling?'}
              </StyledText>
              <StyledText fontSize={14} color={Colors.Orange_1}>
                {'Record it here.'}
              </StyledText>
            </View>
          </TouchableOpacity>
          
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
  },
  welcomeWrapperStyle: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  recordButtonStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 70,
    borderWidth: 1,
    borderColor: Colors.Orange_1,
    borderRadius: 9,
    backgroundColor: Colors.Orange_2,
    alignItems: 'center',
  },
  bellIconStyle: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginRight: 18,
  }
});