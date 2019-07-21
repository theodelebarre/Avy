import React, { useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';

import { Colors } from '@theme';

import { StyledText } from '@components';

import { getStatusBarHeight } from '../functions';

export default function MedicineScreen() {

  const MEDICINE_DATA = [
    {
      key: 'a',
      hour: '20:00',
      prescription: '1 mg Bumetadine, 1 capsule',
      taken: false,
      missed: false,
      circleIcon: require('@assets/icons/Forward.png'),
    },
    {
      key: 'b',
      hour: '20:00',
      prescription: '30 mg Bumetadine, 1 capsule',
      taken: false,
      missed: false,
      circleIcon: require('@assets/icons/Check.png'),
    },
    {
      key: 'bc',
      hour: '12:00',
      prescription: '1 mg Bumetadine, 1 capsule',
      taken: true,
      missed: false,
      circleIcon: require('@assets/icons/Check.png'),
    },
    {
      key: 'd',
      hour: '12:00',
      prescription: '1 mg Bisoprolol, 1 capsule',
      taken: true,
      missed: false,
      circleIcon: require('@assets/icons/Check.png'),
    },
    {
      key: 'e',
      hour: '12:00',
      prescription: '0.0125 mg Digoxine, 1 capsule',
      taken: false,
      missed: true,
      circleIcon: require('@assets/icons/Close.png'),
    },
    {
      key: 'f',
      hour: '12:00',
      prescription: '3 mg Warfarine, 1 capsule',
      taken: true,
      missed: false,
      circleIcon: require('@assets/icons/Check.png'),
    },
  ];

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
          
          <View style={styles.sectionHeaderWrapperStyle}>
            <StyledText fontFamily="SB" fontSize={14} color={Colors.Grey_1}>
              {'Today, 20 Jul 2019'}
            </StyledText>
            <TouchableOpacity>
              <Image source={require('@assets/icons/Arrow.png')} resizeMode="cover" style={styles.sectionHeaderIconStyle} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={MEDICINE_DATA}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            style={{ marginTop: 16 }}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View style={styles.hourWrapperStyle}>
                      <View style={[styles.circleStyle, { backgroundColor: !item.taken && !item.missed ? Colors.Orange_2 : item.missed ? Colors.White : Colors.Blue_1, borderColor: !item.taken && !item.missed ? Colors.Orange_1 : item.missed ? Colors.Blue_1 : Colors.White,  }]}>
                        <Image source={item.circleIcon} style={[styles.circleIconStyle, { tintColor: !item.taken && !item.missed ? Colors.Orange_1 : item.missed ? Colors.Blue_1 : Colors.White }]} resizeMode="cover" />
                      </View>
                      <StyledText fontFamily="SB" fontSize={14} color={!item.taken && !item.missed ? Colors.Orange_1 : Colors.Blue_1}>
                        {item.hour}
                      </StyledText>
                  </View>
                  <View style={styles.prescriptionWrapperStyle}>
                    <View style={[styles.barStyle, { backgroundColor: !item.taken && !item.missed ? Colors.Orange_1 : Colors.Blue_1 }]} />
                    <StyledText fontSize={14} color={Colors.Grey_1}>
                      {item.prescription}
                    </StyledText>
                  </View>

                </View>
              );
            }}
          />
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
    marginBottom: 16,
  },
  sectionHeaderWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 24,
  },
  sectionHeaderIconStyle: {
    width: 24,
    height: 24,
  },
  hourWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleStyle: {
    marginRight: 8,
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: Colors.Orange_2,
    borderWidth: 1,
    borderColor: Colors.Orange_1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prescriptionWrapperStyle: {
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
  },
  barStyle: {
    height: 24,
    width: 2,
    backgroundColor: Colors.Blue_1,
    marginLeft: 15,
    marginRight: 15 + 8,
  },
  circleIconStyle: {
    width: 22,
    height: 22,
  }
});
