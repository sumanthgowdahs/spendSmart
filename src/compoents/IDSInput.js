import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {inputStyle, shadow} from '../themes/styles';

export default function IDSInput(props) {
  const {placeHolder = ''} = props;
  return (
    <View style={[styles.parent]}>
      <View style={[inputStyle, shadow]}>
        <TextInput placeholder={placeHolder} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: '100%',
  },
});
