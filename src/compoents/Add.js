import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

export default function Add() {
  const imgUri =
    'https://images.pexels.com/photos/6231818/pexels-photo-6231818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imgUri}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Title</Text>
          <Text>Separator</Text>
          <Text>Title</Text>
          <Text>Title</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10, // changed to a greater value
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    height: 110,
    width: Dimensions.get('window').width - 10,
    zIndex: 99, // added zIndex
    backgroundColor: 'white', // added a background color
  },
  title: {
    fontWeight: 'bold',
  },
  imageContainer: {
    width: 110,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: 'white',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
