import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  displayFlexAndCenter,
  fullPageWidthHeight,
  whiteBackground,
} from '../themes/styles';
import LogoImage from '../Images/Spendy.png';
import IDSInput from '../compoents/IDSInput';

export default function Login() {
  return (
    <View style={[fullPageWidthHeight, whiteBackground, displayFlexAndCenter]}>
      <View style={styles.box1}>
        <Image source={LogoImage} style={styles.logoImageStyle} />
      </View>
      <View style={styles.box2}>
        <IDSInput placeHolder="Email or Phone No." />
        <IDSInput placeHolder="PassWord" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fullPageWidthHeight: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  logoImageStyle: {
    width: '50%',
    height: 100,
  },
  box1: {
    // backgroundColor: 'red',
    width: '100%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: '100%',
    height: '80%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    // backgroundColor: 'red',
  },
});
