import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { StyledText, InformationRow } from '@components';

import { Colors } from '@theme';
import { getStatusBarHeight } from '../functions';

export default function SettingsScreen() {

  return (
    <View style={styles.containerStyle}>
      <LinearGradient
        colors={[Colors.Blue_1, Colors.Blue_1, Colors.White]}
        style={styles.linearGradientStyle}>

        <View style={styles.panelWrapperStyle}>
          <View style={styles.headerWrapperStyle}>
            <View style={styles.myInformationWrapperStyle}>
              <Image source={require('@assets/images/profile-picture.png')} resizeMode="cover" style={styles.profilePictureStyle} />
              <View>
                <StyledText fontFamily="SB" fontSize={15} color={Colors.Black_1}>
                  {'Jenny Rose'}
                </StyledText>
                <StyledText fontSize={14} color={Colors.Grey_1}>
                {'These are your settings.'}
                </StyledText>
              </View>
            </View>
            
            <View style={styles.headerSeparatorStyle} />
          </View>
          <View style={styles.panelContentWrapperStyle}>
            <InformationRow highlightTitle title="Your account" description="Edit your information" />
            <View style={styles.contentSeparatorStyle} />
            <InformationRow highlightTitle title="Notifications" description="Manage Avy communication" />
            <View style={styles.contentSeparatorStyle} />
            <InformationRow highlightTitle title="Devices" description="Connect your trackers" />
          </View>
        </View>
       
      </LinearGradient>
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
  linearGradientStyle: {
    flex: 1,
  },
  panelWrapperStyle: {
    flex: 1,
    backgroundColor: Colors.White,
    marginHorizontal: 20,
    marginTop: 20 + getStatusBarHeight(),
    marginBottom: 40,
    borderRadius: 23,
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
    marginVertical: 20,
    marginHorizontal: 20,
  },
  myInformationWrapperStyle: {
    flexDirection: 'row',
  },
  profilePictureStyle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginRight: 12,
  },
  headerSeparatorStyle: {
    backgroundColor: Colors.Grey_2,
    height: 1,
    marginTop: 20,
  },
  panelContentWrapperStyle: {
    paddingHorizontal: 20,
  },
  contentSeparatorStyle: {
    backgroundColor: Colors.Grey_2,
    height: 1,
    marginVertical: 20,
  },
});
