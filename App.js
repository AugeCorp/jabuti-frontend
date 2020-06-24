import React from 'react';

import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { default as theme } from './ui-kitten-theme.json'
import SignUpIn from './src/pages/SignUpIn'

const App = () => (
  <ApplicationProvider
    {...eva}
    theme={{ ...eva.light, ...theme }}
  >
    <SignUpIn />
  </ApplicationProvider>
);

export default App;
