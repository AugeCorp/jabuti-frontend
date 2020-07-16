/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './views/pages/Main';
import Incomes from './views/pages/Incomes';
import Goals from './views/pages/Goals';
import Expenses from './views/pages/Expenses';
import AddExpenses from './views/pages/AddExpenses';
import Graphics from './views/pages/Graphics';
import Login from './views/pages/Login';
import Cadastrar from './views/pages/Register';
import { colors } from './helper/GlobalStyle';
import { getUser, deleteUser } from './api/UserController';

const Stack = createStackNavigator();

const Route = () => {
  const [loading, setLoading] = useState(false);
  const [access, setAccess] = useState(false);

  const LoginComponent = () => <Login setLoading={setLoading} />;
  const CadastrarComponent = () => <Cadastrar setLoading={setLoading} />;

  const handleLogin = async () => {
    // await deleteUser();
    let user = await getUser();

    if (!user.isEmpty) {
      setAccess(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleLogin();
  }, [loading]);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={access ? 'Main' : 'Login'}>
          {!access && (
            <>
              <Stack.Screen
                name="Login"
                component={LoginComponent}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Cadastrar"
                component={CadastrarComponent}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
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
  );
};

export default Route;
