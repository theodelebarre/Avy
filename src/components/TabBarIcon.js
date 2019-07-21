import React from 'react';
import { Image } from 'react-native';

import { Colors } from '@theme';

export default TabBarIcon = props => {
  return (
    <Image
      style={{ width: 36, height: 36, tintColor: props.focused ? Colors.Orange_1 : Colors.Grey_1 }}
      source={props.iconSource}
    />
  );
}
