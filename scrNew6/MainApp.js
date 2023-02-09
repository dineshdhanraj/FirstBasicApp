
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import App from './App';
import { useNavigation } from '@react-navigation/native';

const MainApp = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignIn = async () => {
    console.log('O AM O');
    fetch('http://192.168.0.221:3000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Success') {console.log('I AM HERE SUCCES');
        setIsSignedIn(true);
        } else {
          console.log('Sign in failed');
        }
      })
      .catch((error) => {
        console.log('I AM GETTING FIALED');
        console.error(error);
      });
  };


  if (isSignedIn) {
    return <App />;
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default MainApp;
