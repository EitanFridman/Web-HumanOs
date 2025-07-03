import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const participants = [
  {
    name: 'Eit\u00e1n Fridman',
    role: 'Project leader',
    info: 'Apasionado por crear experiencias educativas inmersivas.'
  },
  {
    name: 'Santiago Colombet',
    role: 'Game developer',
    info: 'Entusiasta de la programaci\u00f3n y el dise\u00f1o de videojuegos.'
  },
  {
    name: 'Agustin Alessi',
    role: 'Game developer',
    info: 'Especialista en jugabilidad y balance de niveles.'
  },
  {
    name: 'Matias Halac',
    role: 'Beta tester',
    info: 'Encargado de pulir errores y aportar nuevas ideas.'
  }
];

export default function ParticipantsScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={['#b71c1c', '#f06292']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.cardsWrap}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
              <Text style={styles.backText}>Volver</Text>
            </TouchableOpacity>
          </View>
          {participants.map((p) => (
            <View key={p.name} style={styles.card}>
              <Image
                source={require('../../assets/Logo-HumanOs-No-Bg.png')}
                style={styles.photo}
                resizeMode="contain"
              />
              <Text style={styles.name}>{p.name}</Text>
              <Text style={styles.role}>{p.role}</Text>
              <Text style={styles.info}>{p.info}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  back: {
    padding: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  cardsWrap: {
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 80,
    height: 80,
    borderColor:'black',
    borderWidth:'thin',
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  role: {
    fontSize: 16,
    color: '#ffe',
    marginBottom: 6,
  },
  info: {
    textAlign: 'center',
    color: '#ddd',
  },
});