import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  displayFlexAndCenter,
  fullPageWidthHeight,
  shadow,
  whiteBackground,
} from '../themes/styles';
import LogoImage from '../Images/Spendy.png';
import IDSInput from '../compoents/IDSInput';
import IDSBackgroundWrapper from '../compoents/IDSBackgroundWrapper';
import LoginBackgroundImage from '../Images/LoginBackgroundImage.png';
import {colors} from '../utils/colors';
import {Button} from '@react-navigation/elements';

export default function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  return (
    <>
      <StatusBar
        // barStyle={barStyle}
        backgroundColor={colors.lightGreen}
        translucent
      />
      <IDSBackgroundWrapper
        image={LoginBackgroundImage}
        style={[displayFlexAndCenter]}>
        <View style={[styles.modal, shadow]}>
          <View style={styles.box1}>
            <Text style={styles.text}>{isLogin ? 'Login' : 'SignUp'}</Text>
          </View>
          <View style={styles.box2}>
            <IDSInput placeHolder="Email or Phone No." />
            <IDSInput placeHolder="PassWord" />
            {!isLogin ? <IDSInput placeHolder="Conferm password" /> : <></>}
          </View>
          <View style={styles.box3}>
            <Text>
              {isLogin ? 'create new Account ' : 'Already have an Account '}
            </Text>
            <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
              <Text style={styles.loginSignupButton}>
                {isLogin ? 'SignUp' : 'Login'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box4}>
            <TouchableOpacity style={[shadow, styles.button]}>
              <Text style={styles.buttonText}>
                {isLogin ? 'Login' : 'Signup'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </IDSBackgroundWrapper>
    </>
  );
}

const styles = StyleSheet.create({
  logoImageStyle: {
    width: '50%',
    height: 100,
  },
  box1: {
    // backgroundColor: 'red',
    width: '100%',
    // height: '20%',
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: '100%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    // backgroundColor: 'green',
  },
  box3: {
    width: '100%',
    height: '15%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  box4: {
    width: '100%',
    height: '15%',
    // backgroundColor: 'green',
    alignItems: 'flex-end',
  },
  button: {
    width: 70,
    height: 40,
    borderRadius: 9,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGreen,
  },
  buttonText: {
    color: 'white',
  },
  modal: {
    backgroundColor: 'white',
    width: 300,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
  },
  loginSignupButton: {
    color: 'blue',
  },
});
