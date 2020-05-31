import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Text } from '@ui-kitten/components';
import LoginButton from './src/components/loginButton'

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <LoginButton />
    </ApplicationProvider>
  );
}

export default App