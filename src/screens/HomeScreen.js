import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={['#b71c1c', '#f06292']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <Text style={styles.title}>HumanOS</Text>
          <Text style={styles.subtitle}>
            Sumérgete en una aventura por el cuerpo humano y descubre sus secretos.
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Tutorial')}
          >
            <Text style={styles.buttonText}>Ver Tutorial</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => navigation.navigate('Contacto')}
          >
            <Text style={styles.buttonText}>Contacto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={() => navigation.navigate('Participantes')}
          >
            <Text style={styles.buttonText}>Participantes</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffe',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#e91e63',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});