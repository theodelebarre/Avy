import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import AuthNavigator from './AuthNavigator';
import MainTabNavigator from './MainTabNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    // Auth: AuthNavigator,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Main',
    resetOnBlur: false,
  }
);

export default createAppContainer(SwitchNavigator);
