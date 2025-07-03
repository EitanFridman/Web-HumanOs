import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/splash-icon.png')}
      style={styles.container}
      imageStyle={{ opacity: 0.2 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={['rgba(255,0,70,0.6)', 'rgba(200,0,50,0.9)']}
          style={StyleSheet.absoluteFill}
        />
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
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
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
    backgroundColor: '#ff4257',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});