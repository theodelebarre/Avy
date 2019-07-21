import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { NavigationActions } from 'react-navigation';

import { Colors, Metrics } from '@theme';

import { getStatusBarHeight, getBottomSpace } from '../functions';

export default function TakeYourMedicationScreen() {
  const { navigate, goBack, popToTop, reset } = useNavigation();
  const [step, setStep] = useState(1)

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
        {step === 1 && <Image source={require('@assets/images/Time-to-take-your-medication.gif')} resizeMode="cover" style={styles.bigGifStyle} />}
        <View flex={1} style={{ justifyContent: 'center'}}>
          {step === 2 && <View>
            <StyledText fontFamily="SB" fontSize={24} color={Colors.Red_1} textAlign="center">
              {'Your medication'}
            </StyledText>
            <StyledText fontFamily="SB" fontSize={15} color={Colors.Grey_1} textAlign="center">
              {'Planned for 2:00pm'}
            </StyledText>
            <View style={[styles.contentSeparatorStyle, { marginTop: 12 }]} />
            <StyledText fontFamily="SB" fontSize={14} color={Colors.Black_1} textAlign="center">
              {'1mg Metformin'}
            </StyledText>
            <StyledText fontSize={14} color={Colors.Black_1} textAlign="center">
              {'1 capsule'}
            </StyledText>
            <View style={styles.contentSeparatorStyle} />
            <StyledText fontFamily="SB" fontSize={14} color={Colors.Red_1} textAlign="center">
              {'Instructions'}
            </StyledText>
            <StyledText fontSize={14} color={Colors.Black_1} textAlign="center">
              {'Only take medicine with food to avoid side effects.'}
            </StyledText>
          </View>}
        </View>

        <View style={styles.contentWrapperStyle}>
          <StyledText fontFamily="B" fontSize={24} color={Colors.Black_1} textAlign="center" addedStyle={{ opacity: step === 1 ? 1 : 0 }}>
            {'Time to take your\nmedication'}
          </StyledText>

            <View style={[styles.footerNavigationWrapperStyle, { justifyContent: 'center' }]}>
              <TouchableOpacity 
                onPress={() => {
                  if (step === 1) setStep(step + 1);
                  if (step === 2) popToTop();
                }}
                style={[styles.buttonStyle, { marginBottom: 23 }]}>
                <Image source={step === 1 ? require('@assets/icons/Forward.png') : require('@assets/icons/Check.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
              <StyledText fontSize={14} color={Colors.Orange_1} textAlign="center" addedStyle={{ opacity: step === 2 ? 1 : 0 }}>
                {'Press when medication is complete'}
              </StyledText>
            </View>

        </View>
      </View>
      <KeyboardSpacer/>
    </View>
  );
}

TakeYourMedicationScreen.navigationOptions = {
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
    tintColor: Colors.Orange_1
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
  },
  contentSeparatorStyle: {
    backgroundColor: Colors.Grey_2,
    height: 1,
    width: 295,
    alignSelf: 'center',
    marginVertical: 24,
  }
});
