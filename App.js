/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ValiUser from './src/components/fb_Valiusers';
import SignIn from './src/views/SignIn';
import SignUp from './src/views/SignUp'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={ValiUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
