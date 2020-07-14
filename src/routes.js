import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './views/pages/Main'
import Incomes from './views/pages/Incomes'
import Goals from './views/pages/Goals'
import Expenses from './views/pages/Expenses'
import AddExpenses from './views/pages/AddExpenses'
import Graphics from './views/pages/Graphics'
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
          name="Goals"
          component={Goals}
          options={{
            title: 'Objetivos',
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
          name="AddExpenses"
          component={AddExpenses}
          options={{
            title: 'Adicionar Gasto',
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
)

export default Route
