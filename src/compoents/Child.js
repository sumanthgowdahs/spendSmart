import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import LoginBackgroundImage from '../Images/LoginBackgroundImage.png';

export default function Child() {
  return <Image style={styles.image} source={LoginBackgroundImage} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
