import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClienteHomeScreen({ navigation }) {
  const sair = async () => {
    await AsyncStorage.removeItem('usuarioLogado');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Salão Tessy 💅</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Agendar')}>
        <Text style={styles.buttonText}>📅 Marcar Horário</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={sair}>
        <Text style={styles.buttonText}>🚪 Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff0f5', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40, color: '#c94f7c' },
  button: { backgroundColor: '#c94f7c', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 10, marginBottom: 20, width: '80%', alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 18 },
});
