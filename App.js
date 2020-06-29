import React from 'react'

import * as eva from '@eva-design/eva'
import { default as theme } from './ui-kitten-theme.json'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import Routes from './src/routes'

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Routes />
    </ApplicationProvider>
  </>
);

export default App;
