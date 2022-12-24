import { View, Text, TextInput, StyleSheet, TextArea } from 'react-native'
import React from 'react'

import { Controller } from 'react-hook-form'

 const CustomInput = ({control, rules = {}, placeholder, name, secureTextEntry = false,  type = 'SIGNIN', multiline = false, maxLengh}) => {
  return (
    <Controller
      control = {control}
      name = {name}
      rules = {rules}
      render = {({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View style={[styles.container, styles[`container_${type}`], {borderColor: error ? 'red' : '#000'}]}>
            <TextInput 
              value={value}
              onChangeText={onChange}
              onBlur = {onBlur}
              placeholder={placeholder} 
              secureTextEntry={secureTextEntry}
              maxLength = {maxLengh}
              multiline = {multiline}
              style={styles[`input_${type}`]}
            />
          </View>
          {error && (<Text style={styles[`errorText_${type}`]}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#51AE77',
    width: '72%',

    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
  },

  container_SIGNIN: {
    top: '20%',
  },

  container_SIGNUP: {
    top: '8%',
  },
  
  container_HOME: {
    backgroundColor: '#BDF6D5',
    width: '40%',
    height: '90%',
    borderRadius: 100,
    paddingHorizontal: 0,
    alignItems: 'center',
    marginVertical: 0,
    marginEnd: '20%',
    top: '5%',
  },

  container_NAME_FIELD: {
    paddingHorizontal: 0,
    width: '70%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },
  container_COMM_NAME_FIELD: {
    paddingHorizontal: 0,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },

  container_COMM_RATING: {
    paddingHorizontal: 0,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },

  container_SHORT_DESC: {
    paddingHorizontal: 0,
    width: '90%',
    paddingBottom: 20,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    paddingLeft: 10,
    
  },

  container_LONG_DESC: {
    paddingHorizontal: 0,
    width: '90%',
    paddingBottom: 70,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    paddingLeft: 10,
  },

  container_RATING: {
    paddingHorizontal: 0,
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
  },

  input_HOME: {
    fontSize: 20,
    color: 'black',
    height: '100%',
    top: '2%',
  },

  input_NAME_FIELD: {
    alignItems: 'center',

  },

  input_SHORT_DESC: {
    
  },

  input_LONG_DESC: {

  },

  input_RATING: {
    color: '#cda419'
  },

  input_COMM_RATING: {
    color: '#cda419'
  },

  errorText_RATING: {
    color: 'red',
  },
  errorText_COMM_RATING: {
    color: 'red',
  },
  errorText_LONG_DESC: {
    color: 'red',
  },
  errorText_SHORT_DESC: {
    color: 'red',
  },
  errorText_NAME_FIELD: {
    color: 'red',
  },
  errorText_COMM_NAME_FIELD: {
    color: 'red',
  },

  errorText_SIGNIN: {
    top: '20%',
    color: 'red',
    width: '100%',
    alignSelf: 'stretch',
    paddingHorizontal: '15%',
    fontFamily: 'SF-Pro-Display-Light',
    fontSize: 16,
  },
  errorText_SIGNUP: {
    top: '8%',
    color: 'red',
    width: '100%',
    alignSelf: 'stretch',
    paddingHorizontal: '15%',
    fontFamily: 'SF-Pro-Display-Light',
    fontSize: 16,
  }
})

export default CustomInput