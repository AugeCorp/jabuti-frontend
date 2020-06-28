import React from 'react'

import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { default as theme } from './ui-kitten-theme.json'
import Main from './src/pages/Main'
import Graphics from './src/pages/Graphics'

const Stack = createStackNavigator()

const App = () => (
  <ApplicationProvider
    {...eva}
    theme={{ ...eva.light, ...theme }}
  >
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{
            title: 'Gastos',
            headerTintColor: '#5719BE'
          }} />
        <Stack.Screen 
          name="Graphics" 
          component={Graphics}
          options={{
            title: 'Renda',
            headerTintColor: '#5719BE'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
);

export default App;
