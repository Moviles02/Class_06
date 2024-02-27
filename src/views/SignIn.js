/* eslint-disable prettier/prettier */
// SignIn.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { styles } from '../styles/styles'; // Asegúrate de que la ruta sea correcta

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      // Navegar a la pantalla principal después del inicio de sesión.
    } catch (e) {
      setError(e.message);
    }
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Asegúrate de que 'SignUp' es el nombre correcto de la ruta de tu pantalla de registro.
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <Text 
        style={styles.linkText} 
        onPress={navigateToSignUp}
      >
        ¿No tienes una cuenta? Regístrate
      </Text>
    </View>
  );

};

export default SignIn;
