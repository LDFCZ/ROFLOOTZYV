import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';
import axios from 'axios';

import AppContext from '../../components/AppContext';
import { useContext } from 'react'

const SignInScreen = () => {
  const [auth, setAuth] = useState(false);
  
  const myContext = useContext(AppContext);
  
  const baseUrl = 'http://37.192.52.216:1103/'
  
  const navigation = useNavigation(); 

  const {
    control, 
    handleSubmit,  
    formState: {errors}
  } = useForm();

  const onSignInPressed = (data) => {
    myContext.updAuthorised(true);
    _data = {
      user_name: data.user_name,
      password: data.password
    }
    //console.log(_data);
    axios.post(`${baseUrl}auth/login`, _data).then((response) => {
      //console.log(response.data)
      myContext.updID(response.data.id);
      myContext.updUserName(response.data.user_name);
      myContext.updPassword(response.data.password);
      myContext.updAuthorised(true);
      setAuth(false)
      navigation.navigate('Home'); 
    }).catch((error) => {

      setAuth(true)
    })
  }

  const OnForgotPasswordPressed = () => {
      
    navigation.navigate('ConfirmResetPassword');
  }

  const OnRegButtonPressed = () => {

    navigation.navigate('SignUp');
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>
        ROFLOOTZYV
      </Text>
      <CustomInput
        name = 'user_name'
        placeholder = 'Логин'
        control = {control} 
        secureTextEntry = {false}
        multiline = {false}
        rules = {{required: 'Это обязательное поле',}}
      />

      <CustomInput 
        name = 'password'
        placeholder = 'Пароль'
        control = {control} 
        secureTextEntry = {true}
        multiline = {false}
        rules = {{
          required: 'Это обязательное поле', 
        }}
      />

      <CustomButton
        text = 'Авторизироваться'
        onPress={handleSubmit(onSignInPressed)}
      />

      <CustomButton
        text = 'Еще не зарегистрированы?'
        onPress={OnRegButtonPressed}
        type = 'TERTIARY_SIGNIN'
      />

      <View style={{top: '25%', }}>
        <Text style = {{fontSize: 20, color: 'red',}}>{auth ? 'Неверное имя пользователя\n               или пароль!' : ''}</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
  },

  logo: {
    fontFamily: 'Caladea-Regular',
    fontSize: 40,
    top: '20%',
  },
})
export default SignInScreen