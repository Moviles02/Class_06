/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const MainMenu = ({ navigation }) => {
  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.navigate('SignIn'); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Estás logeado!</Text>
      <Button title="Cerrar Sesión" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    color: 'black',

  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
  },
});

export default MainMenu;