import React from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';

import { default as theme } from './ui-kitten-theme.json';
import Main from './src/pages/Main';

const App = () => (
  <ApplicationProvider
    {...eva}
    theme={{ ...eva.light, ...theme }}
  >
    <Main />
  </ApplicationProvider>
);

export default App;
