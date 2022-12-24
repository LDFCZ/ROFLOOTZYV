import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React, {useContext, useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton';

import { useNavigation } from "@react-navigation/native";
import { useForm } from 'react-hook-form';
import axios from 'axios';

import AppContext from '../../components/AppContext';

const SignUpScreen = () => {
  const [reg, setReg] = useState(false)
  
  const myContext = useContext(AppContext);
  
  const baseUrl = 'http://37.192.52.216:1103/'
  
  const navigation = useNavigation(); 

  const {
    control, 
    handleSubmit,  
    formState: {errors},
    watch
  } = useForm();

  const pwd = watch('password');

  const onSignUpPressed = (data) => {
    _data = {
      user_name: data.user_name,
      password: data.password
    }
    //console.log(_data);
    axios.post(`${baseUrl}auth/register`, _data).then((response) => {
        myContext.updID(response.data.id);
        myContext.updUserName(response.data.user_name);
        myContext.updPassword(response.data.password);
        myContext.updAuthorised(true);
        setReg(false)
        navigation.navigate('Home');
    }).catch((error) => {
        setReg(true)
        //console.log(error.response.data)
    })
     
  }

  const OnSignInButtonPressed = () => {

    navigation.navigate('SignIn');
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
                    minLength: {
                      value: 3, 
                      message: 'Пароль должен быть больше 3 символов'
                    },
        }}
      />

      <CustomInput 
        name = 'repeat_password'
        placeholder = 'Повторите пароль'
        control = {control} 
        secureTextEntry = {true}
        multiline = {false}
        rules = {{
          required: 'Это обязательное поле', 
          validate: value => value === pwd || 'Пароли не совпадают'
        }}
      />

      <CustomButton
        text = 'Зарегистрироваться'
        onPress={handleSubmit(onSignUpPressed)}
      />

      <CustomButton
        text = 'Есть аккаунт?'
        onPress={OnSignInButtonPressed}
        type = 'TERTIARY_SIGNIN'
      />
      
      <View style={{top: '25%'}}>
      <Text style = {{fontSize: 20, color: 'red'}}>{reg ? 'Такой рофлоник занят!' : ''}</Text>
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
export default SignUpScreen