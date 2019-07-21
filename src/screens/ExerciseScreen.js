import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { StyledText, InformationRow } from '@components';

import { Colors } from '@theme';
import { getStatusBarHeight } from '../functions';

export default function ExerciceScreen() {

  const EXERCICES_DATA = [
    {
      key: 'a',
      title: 'Daily work out @ 9pm',
      description: 'Friday, 19 Jul 2019',
      done: false,
    },
    {
      key: 'b',
      title: 'Daily work out @ 9pm',
      description: 'Thursday, 18 Jul 2019',
      done: false,
    },
    {
      key: 'c',
      title: 'Daily work out @ 9pm',
      description: 'Wednesday, 17 Jul 2019',
      done: false,
    },
    {
      key: 'd',
      title: 'Daily work out @ 9pm',
      description: 'Tuesday, 16 Jul 2019',
      done: false,
    },
  ];

  return (
    <View style={styles.containerStyle}>
      <LinearGradient
        colors={[Colors.Blue_1, Colors.Blue_1, Colors.White]}
        style={styles.linearGradientStyle}>

        <View style={[styles.panelWrapperStyle, { flex: 0, padding: 32, borderRadius: 23, alignItems: 'center' }]}>
          <View style={styles.blueCircleStyle}>

          </View>
          <StyledText fontFamily="SB" fontSize={15} color={Colors.Black_1}>
            {'Next exercice'}
          </StyledText>
          <StyledText fontSize={14} color={Colors.Grey_1}>
            {'Planned for 9:00pm'}
          </StyledText>
          <TouchableOpacity style={styles.buttonStyle}>
            <StyledText fontFamily="SB"  fontSize={14} color={Colors.Orange_1}>
              {'Do work out'}
            </StyledText>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.panelWrapperStyle, { marginTop: 8 }]}>
          <View>
            <View style={styles.tabsWrapperStyle}>
              <TouchableOpacity style={styles.tabButtonStyle}>
                <StyledText fontFamily="SB"  fontSize={14} color={Colors.Orange_1}>
                  {'Timeline'}
                </StyledText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabButtonStyle}>
                <StyledText fontFamily={null}  fontSize={14} color={Colors.Orange_1}>
                  {'Schedule'}
                </StyledText>
              </TouchableOpacity>
            </View>
            <View style={styles.headerSeparatorStyle} />
          </View>
          
          <FlatList
            data={EXERCICES_DATA}
            ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            renderItem={({item, index}) => <InformationRow key={item.key} circleIcon={require('@assets/icons/Exercice.png')}title={item.title} description={item.description} showCheckIcon={item.done} />}
          />
        </View>
        
       
      </LinearGradient>
    </View>
  );
}

ExerciceScreen.navigationOptions = {
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
  blueCircleStyle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Blue_2,
    marginBottom: 8,
  },
  buttonStyle: {
    marginTop: 8,
    width: 167,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.Orange_2,
    borderWidth: 1,
    borderColor: Colors.Orange_1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.Orange_Shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 2,
    shadowOpacity: 1,
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
    paddingBottom: 8,
  },
  headerSeparatorStyle: {
    backgroundColor: Colors.Grey_2,
    height: 1,
    marginHorizontal: 20,
    marginBottom: 24,
  },
});
