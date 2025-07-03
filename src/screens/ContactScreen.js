import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (!message.trim()) {
      Alert.alert('Mensaje vacío', 'Por favor escribe tu crítica constructiva.');
      return;
    }
    // En una implementación real, llamarías a tu API para enviar el mail.
    Alert.alert(
      '¡Enviado!',
      'Gracias por tu crítica. La recibiremos en humanos.game@gmail.com',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <LinearGradient colors={['#1e003e', '#3a1a8f']} style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.inner}>
        <Text style={styles.title}>Contacto</Text>
        <Text style={styles.subtitle}>
          Envíanos tu crítica constructiva para mejorar HumanOs
        </Text>
        <TextInput
          style={styles.textArea}
          placeholder="Escribe aquí..."
          placeholderTextColor="#bbb"
          multiline={true}
          numberOfLines={6}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Enviar Feedback</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ddd',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
  },
  textArea: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 15,
    color: '#fff',
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#ff80ab',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#ff80ab',
    shadowOpacity: 0.6,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 15,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
