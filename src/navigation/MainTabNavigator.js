import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import JournalScreen from '../screens/JournalScreen';
import HowYouFeelScreen from '../screens/HowYouFeelScreen';
import MedicineScreen from '../screens/MedicineScreen';
import ContactScreen from '../screens/ContactScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HowYouFeelModalStack = createStackNavigator(
  {
    HowYouFeel: {
      screen: HowYouFeelScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const JournalStack = createStackNavigator({
  Journal: {
    screen: JournalScreen,
  },
});
JournalStack.navigationOptions = {
  tabBarLabel: 'Journal',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

const MedicineStack = createStackNavigator({
  Medicine: MedicineScreen,
});
MedicineStack.navigationOptions = {
  tabBarLabel: 'Medicine',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});
ContactStack.navigationOptions = {
  tabBarLabel: 'Contact',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

const ExerciseStack = createStackNavigator({
  Exercice: ExerciseScreen,
});
ExerciseStack.navigationOptions = {
  tabBarLabel: 'Exercice',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

const MainTabNavigator = createBottomTabNavigator(
  {
    JournalStack,
    MedicineStack,
    ContactStack,
    ExerciseStack,
    // SettingsStack,
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'JournalStack',
  }
);

const MainStacks = createStackNavigator({
  Tabs: {
    screen: MainTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
});

export default createStackNavigator(
  {
    Main: {
      screen: MainStacks,
    },
    HowYouFeel: HowYouFeelModalStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
