import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main'
import Incomes from './pages/Incomes'
import Expenses from './pages/Expenses'
import Graphics from './pages/Graphics'

const Stack = createStackNavigator()

const Route = () => (
  <>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main"
          component={Main} 
          options={{
            headerTintColor: '#5719BE'
          }} 
        />

        <Stack.Screen 
          name="Incomes" 
          component={Incomes}
          options={{
            title: 'Renda',
            headerTintColor: '#5719BE'
          }} 
        />

        <Stack.Screen 
          name="Expenses"
          component={Expenses} 
          options={{
            title: 'Gastos',
            headerTintColor: '#5719BE'
          }} 
        />

        <Stack.Screen 
          name="Graphics"
          component={Graphics} 
          options={{
            title: 'Gráficos',
            headerTintColor: '#5719BE'
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default Route
