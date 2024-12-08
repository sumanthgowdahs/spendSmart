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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from './components/Home';
import {Provider} from 'react-redux';
import {store} from './redux/store';

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
    backgroundColor: '#10375C',
  },
  input: {
    width: 400,
    height: 40,
    backgroundColor: 'red',
  },
});
