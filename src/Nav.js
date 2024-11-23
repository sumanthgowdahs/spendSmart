import {
  Alert,
  Button,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BlurView } from '@react-native-community/blur';

export default function Nav() {
  let [addModal, setAddModal] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor="transparent" />
      <TouchableOpacity>
        <EntypoIcon color="white" name="menu" size={40} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setAddModal(true);
        }}
        style={styles.button}>
        <EntypoIcon color="black" size={35} name="plus" />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        style={styles.modal}
        visible={addModal}>
       {/* <BlurView
          style={styles.absolute}
          blurType="light"  // You can use 'light', 'dark', or 'xlight'
          blurAmount={10}   // Adjust the blur intensity
          reducedTransparencyFallbackColor="white"  // Fallback color for Android
        /> */}
        {/* <BlurView style={styles.absolute}> */}
        <View style={styles.addModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={()=>{setAddModal(false)}} style={styles.modalCloseButton}>
              <EntypoIcon color="black" name="cross" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        {/* </BlurView> */}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"green",
    paddingTop: 35,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'yellow',
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
    backgroundColor:"#10375cd9"
    // backgroundColor:"rgba(0,0,0,0.5)"
  },
  modalContainer: {
    width: 330,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  modalCloseButton: {
    width: '100%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // backgroundColor:"red"
  },
  absolute: {
  
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width:"100%",
    height:"100%"
  },
});
