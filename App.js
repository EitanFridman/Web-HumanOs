import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TutorialScreen from './src/screens/TutorialScreen';
import ContactScreen from './src/screens/ContactScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tutorial"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Contacto" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
