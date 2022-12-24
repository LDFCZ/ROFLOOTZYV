import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import SignInScreen from '../../screens/SignInScreen';
import Review from '../Review';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'Home' component={HomeScreen} />
        <Stack.Screen name = 'SignIn' component={SignInScreen} />
        <Stack.Screen name = 'SignUp' component={SignUpScreen} />
        <Stack.Screen name = 'Review' component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation