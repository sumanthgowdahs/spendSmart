import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import Nav from '../Nav';
import ExpenseList from './ExpenseList';
import {useDispatch, useSelector} from 'react-redux';
import {serInitialValue} from '../redux/reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await AsyncStorage.getItem('expenseList');
      dispatch(serInitialValue(JSON.parse(data) || []));
    };
    getData();
  }, []);
  return (
    <View>
      <Nav />
      <ExpenseList />
    </View>
  );
}

const styles = StyleSheet.create({});
