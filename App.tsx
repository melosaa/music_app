/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';


import {
  SafeAreaProvider,
  SafeAreaView,

} from 'react-native-safe-area-context';

function App() {


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>
          Melisaa
        </Text>
      </SafeAreaView>

    </SafeAreaProvider>
  );
}



export default App;
