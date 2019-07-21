import React, { useState } from 'react';
import { View, TouchableOpacity, TextInput, Image, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { StyledText } from '@components';

import { Colors, Metrics } from '@theme';
import { getStatusBarHeight } from '../functions';

export default function ContactScreen() {

  const CONTACT_DATA = [
    {
      key: 'a',
      name: 'Bernd Pfeffer',
      description: 'Cardiologist',
      cloud: true,
    },
    {
      key: 'b',
      name: 'Phak Sikali',
      description: 'Cardiologist',
      cloud: false,
    },
    {
      key: 'c',
      name: 'Devees Nandi',
      description: 'Cardiologist',
      cloud: false,
    },
    {
      key: 'd',
      name: 'Fariba Mirzaii',
      description: 'Cardiologist',
      cloud: false,
    },
  ]

  return (
    <View style={styles.containerStyle}>
    <LinearGradient
        colors={[Colors.Blue_1, Colors.Blue_1, Colors.White]}
        style={styles.linearGradientStyle}>
        <View style={styles.panelWrapperStyle}>
          <View style={styles.tabsWrapperStyle}>
            <TouchableOpacity style={styles.tabButtonStyle}>
              <StyledText fontFamily="SB"  fontSize={14} color={Colors.Orange_1}>
                {'St. Francis'}
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButtonStyle}>
              <StyledText fontFamily={null}  fontSize={14} color={Colors.Orange_1}>
                {'Family'}
              </StyledText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabButtonStyle}>
              <StyledText fontFamily={null}  fontSize={14} color={Colors.Orange_1}>
                {'Friends'}
              </StyledText>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Search"
            placeholderTextColor={Colors.Grey_1}
            underlineColorAndroid="transparent"
            style={[styles.textInput, { width: Metrics.screenWidth - 80 }]}
          />
        </View>
        <FlatList
          data={CONTACT_DATA}
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          style={{ marginTop: 12 }}
          renderItem={({item, index}) => {
            return (
              <View style={styles.contactWrapperStyle}>
                <TouchableOpacity style={styles.iconButtonStyle}>
                  <Image source={require('@assets/icons/Cloud.png')} resizeMode="cover" style={styles.contactIconsStyle} />
                </TouchableOpacity>
                <Image source={require('@assets/images/profile-picture.png')} resizeMode="cover" style={styles.profilePictureStyle} />
                <View flex={1}>
                  <StyledText fontFamily="SB" fontSize={14} color={Colors.Black_1}>
                    {item.name}
                  </StyledText>
                  <StyledText fontSize={14} color={Colors.Grey_1}>
                    {item.description}
                  </StyledText>
                </View>
                <TouchableOpacity style={[styles.iconButtonStyle, { marginRight: 24 }]}>
                  <Image source={require('@assets/icons/Call.png')} resizeMode="cover" style={styles.contactIconsStyle} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButtonStyle}>
                  <Image source={require('@assets/icons/Message.png')} resizeMode="cover" style={styles.contactIconsStyle} />
                </TouchableOpacity>

              </View>
            );
          }}
        />
      </LinearGradient>
    </View>
  );
}

ContactScreen.navigationOptions = {
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
    // flex: 1,
    backgroundColor: Colors.White,
    marginHorizontal: 20,
    marginTop: 20 + getStatusBarHeight(),
    borderRadius: 8,
    shadowColor: '#acbdd6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 5,
  },
  tabsWrapperStyle: {
    flexDirection: 'row',
  },
  tabButtonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  textInput: {
    fontFamily: 'stilu-semibold',
    color: Colors.Black_1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.Grey_2,
    paddingBottom: 5,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  profilePictureStyle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginHorizontal: 12,
  },
  iconButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIconsStyle: {
    width: 24,
    height: 24,
  },
  contactWrapperStyle: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    height: 76,
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 8,
    shadowColor: '#acbdd6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 5,
  },
});
