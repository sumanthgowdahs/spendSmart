import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function IDSBackgroundWrapper({children, image, style}) {
  return (
    <ImageBackground
      source={image}
      resizeMethod="cover"
      style={[styles.background, style]}>
      <View>{children}</View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Ensure full screen usage
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1, // This ensures children take up available space
    justifyContent: 'center', // Align content in the center
    alignItems: 'center',
  },
});
