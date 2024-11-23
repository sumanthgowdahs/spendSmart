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
// import Icon from 'react-native-vector-icons/FontAwesome';
// import EntypoIcon from 'react-native-vector-icons/Entypo';
// import AntDesign from 'react-native-vector-icons/AntDesign';
export default function App() {
  const [navModalVisible, setNavModalVisible] = useState(false);



  return (
    <View style={styles.container}>
      <Home/>
    </View>
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
