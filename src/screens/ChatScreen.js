import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Alert, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { LinearGradient } from 'expo';

import { StyledText } from '@components';

import { Colors } from '@theme';
import { getStatusBarHeight, getBottomSpace} from '../functions';

export default function ChatScreen() {
  const { popToTop } = useNavigation();
  const [cloudStatus, setCloudStatus] = useState(false);

  return (
    <View style={styles.containerStyle}>
      <LinearGradient
        colors={[Colors.Blue_1, Colors.Blue_2]}
        style={styles.linearGradientStyle}>
        <View style={[styles.panelWrapperStyle]}>
          <View style={styles.contactWrapperStyle}>
            <TouchableOpacity onPress={() => popToTop()} style={[styles.iconButtonStyle, { marginRight: 12 }]}>
              <Image source={require('@assets/icons/Back.png')} resizeMode="cover" style={styles.contactIconsStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
              if (!cloudStatus) {
                Alert.alert(
                  'Your Avy medical data will be shared',
                  'Your data will be shared with this contact!',
                    [
                      {
                        text: 'OK', 
                        onPress: () => setCloudStatus(!cloudStatus)
                      },
                      {
                        text: 'Cancel',
                        style: 'cancel',
                      },
                    ],
                  { cancelable: false },
                );
              } else {
                setCloudStatus(cloudStatus);
              } 
              }} 
              style={styles.iconButtonStyle}>
              <Image source={cloudStatus ? require('@assets/icons/Cloud_plain.png') : require('@assets/icons/Cloud.png')} resizeMode="cover" style={styles.contactIconsStyle} />
            </TouchableOpacity>
            <Image source={require('@assets/images/user-picture-2.png')} resizeMode="cover" style={styles.profilePictureStyle} />
            <View flex={1}>
              <StyledText fontFamily="SB" fontSize={14} color={Colors.Black_1}>
                {'Salomé Fernán'}
              </StyledText>
              <StyledText fontSize={14} color={Colors.Grey_1}>
                {'Cardiologist'}
              </StyledText>
            </View>
            <TouchableOpacity style={[styles.iconButtonStyle]}>
              <Image source={require('@assets/icons/Call.png')} resizeMode="cover" style={styles.contactIconsStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.chatWrapperStyle}>
          <View style={styles.chatInputStyle}>
            <StyledText  fontSize={15} color={Colors.Grey_1}>
                {'Message'}
              </StyledText>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

ChatScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  linearGradientStyle: {
    flex: 1,
  },
  // panelWrapperStyle: {
  //   flexDirection: 'row',
  //   backgroundColor: Colors.White,
  //   marginHorizontal: 20,
  //   marginTop: 20 + getStatusBarHeight(),
  //   borderRadius: 8,
  //   shadowColor: '#acbdd6',
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 9,
  //   elevation: 5,
  // },
  profilePictureStyle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    marginHorizontal: 12,
  },
  iconButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIconsStyle: {
    width: 24,
    height: 24,
  },
  contactWrapperStyle: {
    marginTop: 20 + getStatusBarHeight(),
    paddingHorizontal: 20,
    marginHorizontal: 20,
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.White,
    borderRadius: 8,
    shadowColor: '#acbdd6',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9,
    elevation: 5,
  },
  searchIconStyle: {
    width: 16,
    height: 16,
    position: 'absolute',
    left: 4,
  },
  chatWrapperStyle: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  chatInputStyle: {
    height: 76 + getBottomSpace(),
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingBottom: getBottomSpace(),
  },
});
