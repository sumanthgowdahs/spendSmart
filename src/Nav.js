import {
  Alert,
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {addExpense} from './redux/reducers';
import {colors} from '../android/app/src/utils/colors';
import {backUpData} from './utils';

export default function Nav() {
  const dispatch = useDispatch();
  let [addModal, setAddModal] = useState(false);
  const [inputText, setInputText] = useState({spentAmount: '', details: ''});
  const {expenseList = []} = useSelector(store => store.slice);

  const spentAmount = expenseList.reduce((a, b, c) => {
    return a + Number(b.spentAmount);
  }, 0);

  async function addExpenseToStore() {
    if (inputText.spentAmount === '') {
      Alert.alert('Please enter the amount');
      return;
    }
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();

    const properDate = `${day}/${month}/${year}`;

    backUpData('ADD', {...inputText, date: properDate});
    dispatch(addExpense({...inputText, date: properDate}));

    setAddModal(false);
  }
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <TouchableOpacity>
        <EntypoIcon color="white" name="menu" size={40} />
      </TouchableOpacity>
      <View style={styles.spentInfo}>
        <View style={styles.spent}>
          <Text style={styles.spentText}>-{spentAmount}</Text>
        </View>

        <View style={styles.remaining}>
          <Text style={styles.remainingText}></Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setAddModal(true);
        }}
        style={styles.button}>
        <EntypoIcon color="white" size={35} name="plus" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="slide"
        style={styles.modal}
        visible={addModal}>
        <View style={styles.addModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => {
                setAddModal(false);
              }}
              style={styles.modalCloseButton}>
              <EntypoIcon color="black" name="cross" size={35} />
            </TouchableOpacity>
            <View style={styles.inputView}>
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={'black'}
                keyboardType="numeric"
                value={inputText.spentAmount}
                placeholder="Enter amount"
                onChangeText={text =>
                  setInputText({...inputText, spentAmount: text})
                }
              />
              <TextInput
                style={styles.inputStyle}
                placeholderTextColor={'black'}
                value={inputText.details}
                placeholder="Enter details"
                onChangeText={text =>
                  setInputText({...inputText, details: text})
                }
              />
            </View>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.addButton}
                onPress={addExpenseToStore}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 40,
    borderRadius: 9,
    elevation: 5,
  },
  addModal: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.transparentColor,
    // backgroundColor: 'white',
  },
  modalContainer: {
    width: 330,
    height: 400,
    // backgroundColor: colors.whiteBackgroundColor,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  modalCloseButton: {
    width: '100%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  },
  spentInfo: {
    display: 'flex',
    flexDirection: 'row',

    width: 250,
  },
  spent: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remaining: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spentText: {
    color: 'red',
    fontWeight: 'bold',
  },
  remainingText: {
    color: 'black',
  },
  buttonView: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: '50%',
  },
  addButton: {
    width: 70,
    height: 40,
    backgroundColor: colors.orangeBorderColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 30,
    borderRadius: 9,
  },
  addButtonText: {
    color: 'white',
  },
  inputView: {
    width: '100%',
    display: 'flex',
    gap: 5,
    alignItems: 'center',
  },
  inputStyle: {
    // borderColor: '#FF785A',
    borderRadius: 9,
    // borderStyle: 'solid',
    // borderWidth: 1,
    backgroundColor: '#e0e0e0',
    // backgroundColor: 'white',
    width: '90%',
    height: 45,
  },
});
