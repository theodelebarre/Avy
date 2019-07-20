import React from 'react';
import { Text } from 'react-native';

export default StyledText = props => {
  const renderFontFamily = fontFamily => {
    switch (fontFamily) {
      case 'L':
        return { fontFamily: 'stilu-light' };
      case 'LO':
        return { fontFamily: 'stilu-light-oblique' };
      case 'B':
        return { fontFamily: 'stilu-bold' };
      case 'BO':
        return { fontFamily: 'stilu-bold-oblique' };
      case 'SB':
        return { fontFamily: 'stilu-semibold' };
      case 'SBO':
        return { fontFamily: 'stilu-semibold-oblique' };
      case 'O':
        return { fontFamily: 'stilu-oblique' };
      default:
        return { fontFamily: 'stilu-regular' };
    }
  };

  return (
    <Text
      {...this.props}
      suppressHighlighting
      style={[
        props.addedStyle,
        renderFontFamily(props.fontFamily),
        { fontSize: props.fontSize },
        props.color && { color: props.color },
        props.textAlign && { textAlign: props.textAlign },
        props.underline && { textDecorationLine: 'underline' },
      ]}>
      {props.children}
    </Text>
  );
};
