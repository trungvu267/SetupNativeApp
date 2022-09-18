import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
