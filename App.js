import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
import RouteComponent from './src/route/route';
import  AppBar  from './src/components/restaurant-components/AppBar';
export default function App() {
  return (
    <NativeBaseProvider>
      {/* <StatusBar hidden /> */}
      {/* <AppBar /> */}
      <AppBar/>
       <RouteComponent />
   </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
