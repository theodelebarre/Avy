import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { NavigationActions } from 'react-navigation';

import { Colors, Metrics } from '@theme';

import { getStatusBarHeight, getBottomSpace } from '../functions';

export default function DoWorkOutScreen() {
  const { navigate, goBack, popToTop, reset } = useNavigation();

  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerNavigationWrapperStyle}>
        <TouchableOpacity disabled={true} style={{ opacity: 0 }}>
          <Image source={require('@assets/icons/Back.png')} resizeMode="cover" style={styles.navigationIconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => popToTop()}>
          <Image source={require('@assets/icons/Close.png')} resizeMode="cover" style={styles.navigationIconStyle} />
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Image source={require('@assets/images/Ready-for-exercise.gif')} resizeMode="cover" style={styles.bigGifStyle} />
        <View flex={1} />

        <View style={styles.contentWrapperStyle}>
          <StyledText fontFamily="B" fontSize={24} color={Colors.Black_1} textAlign="center">
            {"Let's do your daily\nexercice! "}
          </StyledText>

            <View style={[styles.footerNavigationWrapperStyle, { justifyContent: 'center' }]}>
              <TouchableOpacity onPress={() => popToTop()} style={[styles.buttonStyle, { marginBottom: 23 }]}>
                <Image source={require('@assets/icons/Check.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
            </View>

        </View>
      </View>
      <KeyboardSpacer/>
    </View>
  );
}

DoWorkOutScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerNavigationWrapperStyle: {
    marginTop: 20 + getStatusBarHeight(),
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationIconStyle: {
    height: 24,
    width: 24,
  },
  contentWrapperStyle: {
    flex: 1,
  },
  bigGifStyle: {
    position: 'absolute',
    top: 20,
    alignSelf: 'center',
    width: 275,
    height: 488.89,
  },
  voterWrapperStyle: {
    marginTop: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    alignSelf: 'center',
  },
  buttonStyle: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: Colors.Orange_2,
    borderWidth: 1,
    borderColor: Colors.Orange_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingIconStyle: {
    height: 32,
    width: 32,
  },
  bloodPressureWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 179,
    alignSelf: 'center',
    marginTop: 25,
  },
  textInput: {
    fontFamily: 'stilu-semibold',
    color: Colors.Black_1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Grey_2,
    paddingBottom: 5,
  },
  footerNavigationWrapperStyle: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 24 + getBottomSpace(),
  },
  sugarLevelWrapperStyle: {
    marginTop: 59,
    alignItems: 'center',
  }
});
