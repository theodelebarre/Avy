import { Platform, Dimensions, StatusBar } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

export function isIphonePlus() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 736 && dimen.width === 414)
  );
}

export function ifIphonePlus(iphonePlusStyle, regularStyle) {
  if (isIphonePlus()) {
    return iphonePlusStyle;
  }
  return regularStyle;
}

export function isIphoneXOrPlus() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 ||
      dimen.width === 812 ||
      (dimen.height === 896 || dimen.width === 896) ||
      (dimen.height === 736 && dimen.width === 414))
  );
}

export function ifIphoneXOrPlus(iphoneXStyle, regularStyle) {
  if (isIphoneXOrPlus()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export function getStatusBarHeight(safe) {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
  });
}

export function getBottomSpace() {
  return isIphoneX() ? 34 : 0;
}

export function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
  );
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
}

export const animatedXTranslation = (value, toValue) => {
  Animated.timing(value, {
    duration: 375,
    toValue,
    easing: Easing.inOut(Easing.ease),
  }).start();
};
