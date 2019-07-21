import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, TextInput, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { NavigationActions } from 'react-navigation';

import { Colors, Metrics } from '@theme';

import { getStatusBarHeight, getBottomSpace } from '../functions';

export default function HowYouFeelScreen() {
  const { navigate, goBack, popToTop, reset } = useNavigation();
  const [step, setStep] = useState(1);

  const renderStepTitle = step => {
    switch (step) {
      case 1:
        return 'How are you feeling\nright now?';
      case 2:
        return 'Let’s add your blood\npressures?';
      case 3:
        return 'And your blook sugar\nlevel?';
      case 4:
        return 'Well done!';
      default:
        return 'How are you feeling\nright now?';
    }
  };

  const onBackPress = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onCheckPress = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      popToTop();
    }
  };

  return (
    <View style={styles.containerStyle}>
      <KeyboardAvoidingView style={styles.containerStyle} contentContainerStyle={styles.containerStyle} behavior='position' enabled>
      <View style={styles.headerNavigationWrapperStyle}>
        <TouchableOpacity onPress={onBackPress} disabled={step === 1} style={{ opacity: step === 1 ? 0 : 1}}>
          <Image source={require('@assets/icons/Back.png')} resizeMode="cover" style={styles.navigationIconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => popToTop()}>
          <Image source={require('@assets/icons/Close.png')} resizeMode="cover" style={styles.navigationIconStyle} />
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Image source={step !== 4 ? require('@assets/images/How-are-you-feeling-today.gif') : require('@assets/images/Good-job.gif')} resizeMode="cover" style={styles.bigGifStyle} />
        <View flex={1} />

        <View style={styles.contentWrapperStyle}>
          <StyledText fontFamily="B" fontSize={24} color={Colors.Black_1} textAlign="center">
            {renderStepTitle(step)}
          </StyledText>

          {step === 1 && (
            <View style={styles.voterWrapperStyle}>
              <TouchableOpacity onPress={() => setStep(step + 1)} style={styles.buttonStyle}>
                <Image source={require('@assets/icons/Rating_1.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setStep(step + 1)} style={styles.buttonStyle}>
                <Image source={require('@assets/icons/Rating_2.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setStep(step + 1)} style={styles.buttonStyle}>
                <Image source={require('@assets/icons/Rating_3.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setStep(step + 1)} style={styles.buttonStyle}>
                <Image source={require('@assets/icons/Rating_4.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setStep(step + 1)} style={styles.buttonStyle}>
                <Image source={require('@assets/icons/Rating_5.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
            </View>
          )}
          {step === 2 && (
            <View style={styles.bloodPressureWrapperStyle}>
              <View>
                <StyledText fontFamily="SB" fontSize={14} color={Colors.Grey_1}>
                {'Top'}
                </StyledText>
                <TextInput
                  placeholder="..."
                  placeholderTextColor={Colors.Grey_1}
                  underlineColorAndroid="transparent"
                  style={[styles.textInput, { width: 44 }]}
                />
              </View>
              <View>
                <StyledText fontFamily="SB" fontSize={14} color={Colors.Grey_1}>
                {'Bottom'}
                </StyledText>
                <TextInput
                  placeholder="..."
                  placeholderTextColor={Colors.Grey_1}
                  underlineColorAndroid="transparent"
                  style={[styles.textInput, { width: 44 }]}
                />
              </View>
            </View>
          )}

          {step === 3 && (
            <View style={styles.sugarLevelWrapperStyle}>
              <TextInput
                placeholder="0 mg/dl"
                placeholderTextColor={Colors.Grey_1}
                underlineColorAndroid="transparent"
                style={[styles.textInput, { width: 107 }]}
              />
            </View>
          )}

          {step !== 1 && (
            <View style={[styles.footerNavigationWrapperStyle, { justifyContent: step !== 4 ? 'flex-end' : 'center' }]}>
              <TouchableOpacity onPress={onCheckPress} style={[styles.buttonStyle, { marginBottom: 23 }]}>
                <Image source={require('@assets/icons/Check.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>

              {step !== 4 && (
                <TouchableOpacity onPress={() => setStep(step + 1)}>
                  <StyledText fontSize={14} color={Colors.Orange_1}>
                    {'Skip'}
                  </StyledText>
                </TouchableOpacity>
              )}
            </View>
          )}

        </View>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
}

HowYouFeelScreen.navigationOptions = {
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
