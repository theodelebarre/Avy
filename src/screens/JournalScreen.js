import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
import { useNavigation } from 'react-navigation-hooks';

import { StyledText } from '@components';

import { Colors } from '@theme';
import { getStatusBarHeight } from '../functions';

export default function JournalScreen() {
  const { navigate } = useNavigation();

  const MOOD_DATA = [
    {
      key: 'a',
      title: 'Your blood pressure is high!',
      description: '19 Jul 2019, 5:02pm',
    },
    {
      key: 'b',
      title: 'Little low on the blood sugar',
      description: '18 Jul 2019, 6:27pm',
    },
    {
      key: 'c',
      title: 'You are feeling good',
      description: '17 Jul 2019, 8:33pm',
    },
  ];

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
          
          <TouchableOpacity onPress={()=> navigate('HowYouFeel')} style={styles.recordButtonStyle}>
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

          <FlatList
            data={MOOD_DATA}
            ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            style={{ marginTop: 16 }}
            renderItem={({item, index}) => <InformationRow highlightTitle key={item.key} title={item.title} description={item.description} showCheckIcon={item.done} />}
          />
          
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
