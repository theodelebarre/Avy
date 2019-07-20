import React from 'react';
import { Text } from 'react-native';

export default StyledText = props => {
  // const renderFontFamily = fontFamily => {
  //   switch (fontFamily) {
  //     case 'R':
  //       return { fontFamily: 'open-sans-regular' };
  //     case 'SB':
  //       return { fontFamily: 'open-sans-semibold' };
  //     case 'B':
  //       return { fontFamily: 'open-sans-bold' };
  //     case 'BI':
  //       return { fontFamily: 'open-sans-bold-italic' };
  //     case 'L':
  //       return { fontFamily: 'open-sans-light' };
  //     default:
  //       return { fontFamily: 'open-sans-regular' };
  //   }
  // };

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
