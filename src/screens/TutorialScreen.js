import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, SlideInDown } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TutorialScreen() {
  const navigation = useNavigation();

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <LinearGradient colors={['#b71c1c', '#f06292']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity style={styles.back} onPress={handleBack}>
          <Text style={styles.backText}>Volver</Text>
        </TouchableOpacity>

        <Animated.View entering={SlideInDown.duration(800)}>
          <Text style={styles.title}>HumanOS - Tutorial</Text>
        </Animated.View>

        <Animated.View entering={FadeIn.delay(300).duration(800)} style={styles.contentWrap}>
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.step}>1. Con la mano que quieras apunta hacia "start game" y apreta el gatillo de arriba.</Text>
            <Text style={styles.step}>2. Cuando cargue date vuelta y acercate a la pelotita que tenes cerca.</Text>
            <Text style={styles.step}>3. Agarra la pelotita con el botón del medio de alguno de los 2 joysticks.</Text>
            <Text style={styles.step}>4. Acercate al virus y tirale la pelotita para que impacte y lo elimines.</Text>
            <Text style={styles.step}>5. Listo, Ganaste!!! Ahora nos podes mandar un comentario para ayudarnos a mejorar.</Text>
            <TouchableOpacity
              style={styles.glowButton}
              onPress={() => navigation.navigate('Contacto')}
            >
              <Text style={styles.buttonText}>Ir a Contacto</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
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
  contentWrap: {
    flex: 1,
    marginTop: 30,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  back: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
  },
  step: {
    fontSize: 18,
    color: '#ddd',
    marginBottom: 20,
    lineHeight: 24,
  },
  glowButton: {
    marginTop: 40,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: '#e91e63',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});