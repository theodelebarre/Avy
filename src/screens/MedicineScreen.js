import React, { useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { useNavigation } from 'react-navigation-hooks';

import { Colors } from '@theme';

import { StyledText, InformationRow } from '@components';

import { getStatusBarHeight } from '../functions';

export default function MedicineScreen() {
  const [tab, setTab] = useState(1);

  const { navigate } = useNavigation();

  const MEDS_DATA = [
    {
      key: 'a',
      title: 'Lisinopril',
      description: '1x daily • 1mg • 1 capsule',
      done: false,
    },
    {
      key: 'b',
      title: 'Bisoprolol',
      description: '1x daily • 1mg • 1 capsule',
      done: false,
    },
    {
      key: 'c',
      title: 'Bumetadine',
      description: '2x daily • 1mg • 1 capsule',
      done: false,
    },
    {
      key: 'd',
      title: 'Digoxine',
      description: '2x daily • 1mg • 1 capsule',
      done: false,
    },
    {
      key: 'e',
      title: 'Warfarine',
      description: '2x daily • 1mg • 1 capsule',
      done: false,
    },
  ];

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
      circleIcon: require('@assets/icons/Forward.png'),
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
        colors={[Colors.Blue_1, Colors.Blue_2]}
        style={styles.linearGradientStyle}>

        <View style={styles.panelWrapperStyle}>
          {/* <View style={styles.headerWrapperStyle}>
            <StyledText fontFamily="SB" fontSize={15} color={Colors.Black_1}>
              {'Your medication'}
            </StyledText>
            <View style={styles.headerSeparatorStyle} />
          </View> */}


            <View>
              <View style={styles.tabsWrapperStyle}>
                <TouchableOpacity  onPress={() => setTab(1)} style={styles.tabButtonStyle}>
                  <StyledText fontFamily={tab === 1 ? "SB" : null}  fontSize={14} color={Colors.Orange_1}>
                    {'Timeline'}
                  </StyledText>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab(2)} style={styles.tabButtonStyle}>
                  <StyledText fontFamily={tab === 2 ? "SB" : null}  fontSize={14} color={Colors.Orange_1}>
                    {'All meds'}
                  </StyledText>
                </TouchableOpacity>
              </View>
              <View style={styles.headerSeparatorStyle} />
            </View>

          {tab === 1 && <View>
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
                      <TouchableOpacity onPress={() => navigate('TakeYourMedication')} disabled={item.missed || item.taken} style={[styles.circleStyle, { backgroundColor: !item.taken && !item.missed ? Colors.Orange_2 : item.missed ? Colors.White : Colors.Blue_1, borderColor: !item.taken && !item.missed ? Colors.Orange_1 : item.missed ? Colors.Blue_1 : Colors.White,  }]}>
                        <Image source={item.circleIcon} style={[styles.circleIconStyle, { tintColor: !item.taken && !item.missed ? Colors.Orange_1 : item.missed ? Colors.Blue_1 : Colors.White }]} resizeMode="cover" />
                      </TouchableOpacity>
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
          </View>}

          {tab === 2 && 
            <FlatList
              data={MEDS_DATA}
              ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
              style={{ marginTop: 20 }}
              contentContainerStyle={{ paddingHorizontal: 24 }}
              renderItem={({item, index}) => <InformationRow key={item.key} circleIcon={require('@assets/icons/Medicine.png')}title={item.title} description={item.description} showCheckIcon={item.done} />}
            />
          }
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
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 5,
  },
  headerWrapperStyle: {
    backgroundColor: Colors.Grey_2,
    height: 1,
    marginHorizontal: 20,
    marginBottom: 24,
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
});
