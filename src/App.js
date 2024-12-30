import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Nav from './Nav';
import Home from './components/Home';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {colors} from '../android/app/src/utils/colors';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.whiteBackgroundColor,
  },
  input: {
    width: 400,
    height: 40,
    backgroundColor: 'red',
  },
});
