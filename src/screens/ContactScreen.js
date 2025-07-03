import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Datos incompletos', 'Completa todos los campos para continuar');
      return;
    }

    try {
      await MailComposer.composeAsync({
        recipients: ['humanos.game@gmail.com'],
        subject: `Contacto de ${name}`,
        body: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      });

      Alert.alert(
        '¡Enviado!',
        'Gracias por tu crítica. La recibiremos en humanos.game@gmail.com',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    } catch (error) {
      Alert.alert('Error', 'No se pudo abrir el cliente de correo.');
    }
  };

  return (
    <LinearGradient colors={['#b71c1c', '#f06292']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView behavior="padding" style={styles.inner}>
          <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>Volver</Text>
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.title}>Contacto</Text>
            <Text style={styles.subtitle}>
              Envíanos tus dudas o comentarios sobre HumanOS
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre y apellido"
              placeholderTextColor="#bbb"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#bbb"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.textArea}
              placeholder="Mensaje"
              placeholderTextColor="#bbb"
              multiline
              numberOfLines={6}
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitText}>Enviar</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
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
  scroll: {
    paddingBottom: 40,
  },
  back: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
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
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 15,
    color: '#fff',
    marginBottom: 20,
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
    backgroundColor: '#e91e63',
    paddingVertical: 14,
    borderRadius: 50,
    alignItems: 'center',
    shadowColor: '#e91e63',
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