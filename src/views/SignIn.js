/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, ingresa tu correo electrónico y contraseña');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(email, password);
      // Navegación hacia el menú principal tras el inicio de sesión exitoso
      navigation.navigate('MainMenu'); // Reemplaza 'MainMenu' con el nombre de tu ruta del menú principal
    } catch (e) {
      console.error(e);
      let errorMessage;
      switch (e.code) {
        case 'auth/invalid-email':
          errorMessage = 'El correo electrónico no es válido.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'El usuario ha sido deshabilitado.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No se encontró usuario con ese correo electrónico.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'La contraseña es incorrecta.';
          break;
        default:
          errorMessage = 'Ha ocurrido un error al intentar iniciar sesión.';
          break;
      }
      Alert.alert('Error de inicio de sesión', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Iniciar Sesión"
        onPress={handleLogin}
      />
      <Button
        title="¿No tienes una cuenta? Regístrate"
        onPress={() => navigation.navigate('SignUp')} // Asegúrate de que 'SignUp' es el nombre de tu ruta de registro
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,

  },
  input: {

    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    backgroundColor:'#A0A0A0'

  },
});

export default Login;
