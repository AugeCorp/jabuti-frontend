import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Graphics from './pages/Graphics'
import { colors } from './helper/GlobalStyle'

const Stack = createStackNavigator()

const Route = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main"
          component={Main} 
          options={{
            headerShown: false,
          }} 
        />

        <Stack.Screen 
          name="Incomes" 
          component={Incomes}
          options={{
            title: 'Renda',
            headerTintColor: colors.primary,
            headerTitleAlign: 'center',
          }} 
        />

        <Stack.Screen 
          name="Expenses"
          component={Expenses} 
          options={{
            title: 'Gastos',
            headerTintColor: colors.primary,
            headerTitleAlign: 'center',
          }} 
        />

        <Stack.Screen 
          name="Graphics"
          component={Graphics} 
          options={{
            title: 'Gráficos',
            headerTintColor: colors.primary,
            headerTitleAlign: 'center',
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default Route