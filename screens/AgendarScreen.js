import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function AgendarScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [servico, setServico] = useState('');

  const salvarAgendamento = () => {
    Alert.alert('Agendamento Salvo!', `Nome: ${nome}\nData: ${data}\nHora: ${hora}\nServiço: ${servico}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Horário</Text>

      <TextInput placeholder="Nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput placeholder="Data (dd/mm)" style={styles.input} value={data} onChangeText={setData} />
      <TextInput placeholder="Hora (hh:mm)" style={styles.input} value={hora} onChangeText={setHora} />
      <TextInput placeholder="Serviço" style={styles.input} value={servico} onChangeText={setServico} />

      <Button title="Salvar Agendamento" onPress={salvarAgendamento} />
      <Button title="Voltar" onPress={() => navigation.goBack()} color="#c94f7c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fffafc' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#c94f7c' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 5 },
});
