import { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, useColorScheme } from 'react-native';
import { useRouter } from 'expo-router';

const credentials = require('../../credentials.json').users;

export default function SignInScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const colorScheme = useColorScheme(); // Detects dark or light mode

  const validateInput = () => {
    const usernameValid = username.length >= 5;
    const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!usernameValid) {
      Alert.alert('Error', 'Username must be at least 5 characters long.');
      return false;
    }
    if (!passwordValid) {
      Alert.alert('Error', 'Password must have 8+ characters, one uppercase, one lowercase, one number, and one special character.');
      return false;
    }
    return true;
  };

  const handleSignIn = () => {
    if (!validateInput()) return;

    const user = credentials.find(user => user.username === username);
    if (!user) {
      Alert.alert('Error', 'Username not found.');
      return;
    }
    if (user.password !== password) {
      Alert.alert('Error', 'Incorrect password.');
      return;
    }

    router.replace('/home');
  };

  return (
    <View style={colorScheme === 'dark' ? styles.darkContainer : styles.lightContainer}>
      <Text style={colorScheme === 'dark' ? styles.darkTitle : styles.lightTitle}>Sign In</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
        value={username}
        onChangeText={setUsername}
        style={colorScheme === 'dark' ? styles.darkInput : styles.lightInput}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={colorScheme === 'dark' ? styles.darkInput : styles.lightInput}
      />

      <Button title="Sign In" onPress={handleSignIn} color={colorScheme === 'dark' ? '#ffcc00' : '#007bff'} />
    </View>
  );
}

// STYLESHEET WITH LIGHT & DARK MODE SUPPORT
const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  darkContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },

  lightTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  darkTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },

  lightInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    color: 'black',
  },
  darkInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#333',
    color: 'white',
  },
});




