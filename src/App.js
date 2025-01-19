import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {colors} from '../android/app/src/utils/colors';
import Home from './compoents/Home';
import AppNavigator from '../android/app/src/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
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
