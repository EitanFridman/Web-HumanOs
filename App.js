import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TutorialScreen from './src/screens/TutorialScreen';
import ContactScreen from './src/screens/ContactScreen';
import ParticipantsScreen from './src/screens/ParticipantsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Contacto" component={ContactScreen} />
        <Stack.Screen name="Participantes" component={ParticipantsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}