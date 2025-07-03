import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, FadeOut, SlideInDown } from 'react-native-reanimated';

export default function TutorialScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../assets/favicon.png')}
      style={styles.container}
      imageStyle={{ opacity: 0.4 }}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={StyleSheet.absoluteFill}
      />

      <Animated.View entering={SlideInDown.duration(1000)}>
        <Text style={styles.title}>🌟 Bienvenido a HumanOs VR 🌟</Text>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(500).duration(1000)}>
        <Text style={styles.subtitle}>
          Explora el cuerpo humano, combate anomalías y aprende en cada célula.
        </Text>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(1000).duration(1000)}>
        <TouchableOpacity
          style={styles.glowButton}
          onPress={() => navigation.navigate('Contacto')}
        >
          <Text style={styles.buttonText}>Ir a Contacto</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: '900',
    textAlign: 'center',
    textShadowColor: 'purple',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ddd',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  glowButton: {
    marginTop: 40,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: '#ff0080',
    shadowColor: '#ff0080',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});
