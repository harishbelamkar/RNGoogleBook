/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation/navigation';

function App(): JSX.Element {
  return (
    <SafeAreaProvider >
      <Navigation/>
    </SafeAreaProvider>
  );
}

export default App;
