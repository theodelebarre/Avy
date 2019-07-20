import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { Colors, Metrics } from '@theme';

import { getStatusBarHeight } from '../functions';

export default function HowYouFeelScreen() {
  const { navigate, goBack, popToTop } = useNavigation();
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

  return (
    <View style={styles.containerStyle}>
      <View style={styles.navigationHeaderWrapperStyle}>
        <TouchableOpacity onPress={onBackPress} disabled={step === 1} style={{ opacity: step === 1 ? 0 : 1}}>
          <Image source={require('@assets/icons/Back.png')} resizeMode="cover" style={styles.navigationIconStyle} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => popToTop()}>
          <Image source={require('@assets/icons/Close.png')} resizeMode="cover" style={styles.navigationIconStyle} />
        </TouchableOpacity>
      </View>
      <View flex={1}>
        <Image source={require('@assets/images/How-are-you-feeling-today.gif')} resizeMode="cover" style={styles.bigGifStyle} />
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
              <TouchableOpacity style={styles.buttonStyle}>
                <Image source={require('@assets/icons/Rating_5.png')} resizeMode="cover" style={styles.ratingIconStyle} />
              </TouchableOpacity>
            </View>
          )}

        </View>
      </View>
      
      
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
  navigationHeaderWrapperStyle: {
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
});
