import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './compoents/Home';
import Child from './compoents/Child';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FoundationIcon from 'react-native-vector-icons/Foundation';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import Add from './compoents/Add';
import Login from './screens/Login';

const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      options={{
        tabBarPressAnimationEnabled: false,
      }}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: () => (
            <EntypoIcon color={'black'} name="home" size={20} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="All"
        component={Add}
        options={{
          tabBarIcon: () => (
            <FoundationIcon color={'black'} name="indent-more" size={30} />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="Child"
        component={Child}
        options={{
          tabBarIcon: () => (
            <EntypoIcon
              type="EvilIcons"
              color={'black'}
              name="menu"
              size={20}
            />
          ),
          headerShown: false,
          animationEnabled: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
