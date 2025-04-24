import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LoginScreen from './screens/LoginScreen';
import ClienteHomeScreen from './screens/HomeScreen';
import AgendarScreen from './screens/AgendarScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    verificarLogin();
  }, []);

  const verificarLogin = async () => {
    const status = await AsyncStorage.getItem('usuarioLogado');
    setLogado(status === 'true');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {logado ? (
          <>
            <Stack.Screen name="ClienteHome" component={ClienteHomeScreen} />
            <Stack.Screen name="Agendar" component={AgendarScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
