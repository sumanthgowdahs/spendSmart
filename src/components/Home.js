import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Nav from '../Nav';
import ExpenseList from './ExpenseList';
import {useSelector} from 'react-redux';

export default function Home() {
  return (
    <View>
      <Nav />
      <View>
        {/* <View style={styles.headingView}>
          <Text style={styles.headingText}>Recent spends</Text>
          {expenseList.length > 10 ? (
            <TouchableOpacity style={styles.viewAllButton}>
              <Text> View All</Text>
            </TouchableOpacity>
          ) : null}
        </View> */}
        <ExpenseList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
