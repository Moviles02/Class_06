/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
  
// Asegúrate de que SignUp reciba la prop 'navigation'
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSignUp = async () => {
    if (!email || !password || !name || !job) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    try {
      let response = await auth().createUserWithEmailAndPassword(email, password);
      if (response && response.user) {
        await firestore().collection('users').doc(response.user.uid).set({
          iduser: response.user.uid,
          name: name,
          email: email,
          job: job,
        });

        // Usuario registrado con éxito, ahora redirige al menú principal o pantalla de inicio
        Alert.alert('Éxito', 'Usuario registrado con éxito', [
          { text: 'OK', onPress: () => navigation.navigate('SignIn') } // Asegúrate de que 'MainMenu' es el nombre de tu pantalla principal o de inicio
        ]);

      }
    } catch (e) {
      console.error(e);
      let errorMessage;
      if (e.code === 'auth/email-already-in-use') {
        errorMessage = 'Ese correo electrónico ya está en uso.';
      } else if (e.code === 'auth/invalid-email') {
        errorMessage = 'Ese correo electrónico no es válido.';
      } else {
        errorMessage = e.message;
      }
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
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
        placeholder="Profesión"
        value={job}
        onChangeText={setJob}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Registrarse"
        onPress={handleSignUp}
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
    backgroundColor:'#A0A0A0'

  },
});

export default SignUp;
