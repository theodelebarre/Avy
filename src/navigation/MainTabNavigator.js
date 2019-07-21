import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { TabBarIcon } from '@components';

import { Colors } from '@theme';

import JournalScreen from '../screens/JournalScreen';
import HowYouFeelScreen from '../screens/HowYouFeelScreen';
import MedicineScreen from '../screens/MedicineScreen';
import TakeYourMedicationScreen from '../screens/TakeYourMedicationScreen';
import ContactScreen from '../screens/ContactScreen';
import ChatScreen from '../screens/ChatScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import DoWorkOutScreen from '../screens/DoWorkOutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const ChatScreenModalStack = createStackNavigator(
  {
    ChatScreen: {
      screen: ChatScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const TakeYourMedicationModalStack = createStackNavigator(
  {
    TakeYourMedication: {
      screen: TakeYourMedicationScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const DoWorkOutModalStack = createStackNavigator(
  {
    DoWorkOut: {
      screen: DoWorkOutScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      iconSource={require('@assets/icons/MainTab_1.png')}
    />
  ),
};

const MedicineStack = createStackNavigator({
  Medicine: MedicineScreen,
});
MedicineStack.navigationOptions = {
  tabBarLabel: 'Medicine',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      iconSource={require('@assets/icons/MainTab_2.png')}
    />
  ),
};

const ContactStack = createStackNavigator({
  Contact: ContactScreen,
});
ContactStack.navigationOptions = {
  tabBarLabel: 'Contact',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      iconSource={require('@assets/icons/MainTab_3.png')}
    />
  ),
};

const ExerciseStack = createStackNavigator({
  Exercice: ExerciseScreen,
});
ExerciseStack.navigationOptions = {
  tabBarLabel: 'Exercice',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      iconSource={require('@assets/icons/MainTab_4.png')}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});
SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     iconSource={require('@assets/icons/MainTab_4.png')}
  //   />
  // ),
};

const MainTabNavigator = createBottomTabNavigator(
  {
    JournalStack,
    MedicineStack,
    ExerciseStack,
    ContactStack,
    // SettingsStack,
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'JournalStack',
    tabBarOptions: {
      activeTintColor: Colors.Orange_1,
      labelStyle: {
        fontSize: 12,
        fontFamily: 'stilu-regular',
      },
      style: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 0,
        borderColor: 'transparent',
        height: 74,
        shadowOpacity: 0,
        borderTopColor: 'transparent',
      },
    }
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
    DoWorkOut: DoWorkOutModalStack,
    TakeYourMedication: TakeYourMedicationModalStack,
    ChatScreen: ChatScreenModalStack,
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);
