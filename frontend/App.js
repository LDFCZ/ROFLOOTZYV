import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import Navigation from './src/components/navigation'
import AppContext from './src/components/AppContext'

const App = () => {

  const [authorised, setAuthorised] = useState(false);
  const [id, setID] = useState(0);
  const [user_name, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const updID = (ID) => {
    setID(ID);
  }

  const updUserName = (user_name) => {
    setUserName(user_name);
  }

  const updPassword = (password) => {
    setPassword(password);
  }

  const updAuthorised = (state) => {
    setAuthorised(state);
  }

  const userInfo = {
    authorised: authorised,
    setAuthorised,
    updAuthorised,

    id,
    setID,
    updID,

    user_name,
    setUserName,
    updUserName,

    password,
    setPassword,
    updPassword,
  }

  return (
    <AppContext.Provider value={userInfo}>
      <SafeAreaView style={styles.root}>
        <View style={styles.root}>
          <Navigation/>
        </View>
      </SafeAreaView>
    </AppContext.Provider>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
})

export default App