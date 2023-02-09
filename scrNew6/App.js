import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store';
import AppTab from './AppTab';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AppTab/>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// const App = () => {
//   const [email, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const handleSignIn = () => {
//     fetch('http://192.168.1.10:8002/signin', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.message === 'Success') {
//           console.log('Sign in successful');
//         } else {
//           console.log('Sign in failed');
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         value={email}
//         onChangeText={(text) => setUsername(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         value={password}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry
//       />
//       <Button title="Sign In" onPress={handleSignIn} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     width: 200,
//     height: 44,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginBottom: 10,
//   },
// });

// export default App;
