/* eslint-disable prettier/prettier */
// styles/styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switchText: {
    marginTop: 20,
    color: 'blue',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkText: {
    color: '#1E90FF',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  // Asegúrate de que los estilos de tus botones son aplicables tanto al botón de 'SignIn' como al de 'SignUp'
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    color: 'black',
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles; // Solo un export default al final del archivo
