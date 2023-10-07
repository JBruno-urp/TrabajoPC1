import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screen/HomeScreen';
import AppDetailsScreen from './Screen/AppDetailsScreen';
import { Text, Image, View } from 'react-native'; // Importa Text, Image y View desde 'react-native'

const Stack = createStackNavigator();

import Logo from 'C:/Users/Bruno/Desktop/TrabajoPC1/assets/screenshots/logo.jpg'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={Logo} style={{ width: 40, height: 40, marginRight: 10 }} />
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Lokify</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
  name="AppDetails"
  component={AppDetailsScreen}
  options={{
    headerTitle: 'Detalle de Juego', // Cambia el título aquí
  }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
