import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {deleteExpense} from '../redux/reducers';
import {colors} from '../../android/app/src/utils/colors';
import {backUpData} from '../utils';

export default function ExpenseTile({ele, index}) {
  const [infoHeight, setInfoHeight] = useState(false);
  const dispatch = useDispatch();
  function removeExpense(id) {
    backUpData('REMOVE', id);
    dispatch(deleteExpense(id));
  }

  return (
    <View style={[styles.tile, {height: infoHeight ? 80 : 40}]}>
      <View style={styles.infoTile}>
        <View style={[styles.upperInfo, {height: infoHeight ? '50%' : '100%'}]}>
          <Text style={styles.text}>{ele?.spentAmount}</Text>
          <Text>{ele?.date}</Text>

          <TouchableOpacity
            onPress={() => {
              setInfoHeight(!infoHeight);
            }}>
            <AntDesign
              name={infoHeight ? 'up' : 'down'}
              color="black"
              size={20}
            />
          </TouchableOpacity>
        </View>
        {infoHeight ? (
          <View style={styles.lowerInfo}>
            <Text>{ele.details}</Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>

      <View style={styles.buttonTile}>
        <TouchableOpacity
          onPress={() => {
            removeExpense(index);
          }}>
          <AntDesign name="delete" color="red" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  tile: {
    width: 350,
    // backgroundColor: 'red',
    marginBottom: 3,
    // textAlign: 'cennter',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingRight: 2,
    paddingLeft: 7,
    gap: 2,
  },

  infoTile: {
    backgroundColor: '#e0e0e0',
    width: '85%',
    height: '100%',
    borderRadius: 9,
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: colors.orangeBorderColor,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  buttonTile: {
    // backgroundColor: 'green',
    width: '15%',
    height: '100%',
    borderRadius: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperInfo: {
    // backgroundColor: 'white',
    width: '85%',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  lowerInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: '100%',
    height: '50%',
  },
});
