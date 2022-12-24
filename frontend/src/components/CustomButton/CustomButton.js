import { View, Text, StyleSheet, Pressable, } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type = 'PRIMARY_SIGNIN'}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderRadius: 5,
    padding: 9,
    marginVertical: 7,
    alignItems: 'center',
  },

  container_PRIMARY_SIGNIN: {
    top: '20%',
    backgroundColor: '#397350',
  },

  container_TERTIARY_SIGNIN: {
    top: '40%',
    marginVertical: 0,
    width: '100%',
  },

  container_HOME: {
    width: '40%',
    backgroundColor: '#50FB96',
    height: '90%',
    borderRadius: 100,
    paddingHorizontal: 0,
    alignItems: 'center', 
    marginVertical: 0,
    top: '5%',
  },

  container_CANCEL: {
    
    width: '30%',
    backgroundColor: '#50FB96',
    borderRadius: 100,
    top: '6%',
     
  },

  container_POST: {
    width: '50%',
    backgroundColor: '#397350',
    borderRadius: 100,
  },

  container_COMMENT: {
    width: '10%',
    borderRadius: 100,
  },

  text: {
      fontSize: 23,
      color: '#e8e8e8',    
      fontWeight: '500'    
  },

  text_HOME: {
    color: 'black',
    fontSize: 17,
    fontWeight: '0'    
  },

  text_COMMENT: {
    color: '#397350',
    fontSize: 17,
    fontWeight: '600',
    
  },

  text_CANCEL: {
    color: 'black',
    fontSize: 17,
    fontWeight: '0'    
  },
  
  text_TERTIARY_SIGNIN: {
      color: 'black',
  },

  text_TERTIARY_SIGNUP: {
    color: 'gray',
  },

  text_POST: {
    color: 'white',
  },
})

export default CustomButton