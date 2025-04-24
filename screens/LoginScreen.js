import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = async () => {
    if (email === 'cliente@tessy.com' && senha === '1234') {
      await AsyncStorage.setItem('usuarioLogado', 'true');
      navigation.replace('ClienteHome'); // <- AGORA FUNCIONA!
    } else {
      alert('Email ou Senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Cliente</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry value={senha} onChangeText={setSenha} />
      <Button title="Entrar" onPress={logar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff0f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5 },
});
