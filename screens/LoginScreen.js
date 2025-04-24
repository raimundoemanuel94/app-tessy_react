import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Marca no topo */}
      <Text style={styles.brand}>Tessy Nails</Text>

      <Text style={styles.title}>AGENDA CLIENTES</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail cadastrado"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>Criar Nova Conta</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Ou entre com:</Text>

      <TouchableOpacity style={styles.socialButtonGoogle}>
        <Text style={styles.socialTextGoogle}>Entrar com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonFacebook}>
        <Text style={styles.socialText}>Entrar com Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  brand: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginBottom: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#8e24aa',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#8e24aa',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  loginText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  createButton: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#f3e5f5',
    marginBottom: 20,
    shadowColor: '#ba68c8',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  createText: {
    color: '#000',
  },
  orText: {
    marginBottom: 10,
    color: '#333',
    fontSize: 16,
  },
  socialButtonGoogle: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFF',
    borderColor: '#4285F4',
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#9e9e9e',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  socialTextGoogle: {
    color: '#4285F4',
    fontWeight: 'bold',
  },
  socialButtonFacebook: {
    width: '100%',
    padding: 15,
    backgroundColor: '#3b5998',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#3b5998',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  socialText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
