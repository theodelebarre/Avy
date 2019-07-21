import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from '@theme';

export default InformationRow = props => {
  return (
    <View style={[styles.mainWrapperStyle, props.addedStyle]}>
      <View style={styles.circleStyle}>

      </View>
      <View>
        <StyledText fontFamily={props.highlightTitle && "SB"} fontSize={14} color={Colors.Black_1}>
          {props.title}
        </StyledText>
        <StyledText fontSize={14} color={Colors.Grey_1}>
          {props.description}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapperStyle: {
    flexDirection: 'row',
  },
  circleStyle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    backgroundColor: Colors.Blue_2
  },
  iconStyle: {
    height: 32,
    width: 32,
  },
})
