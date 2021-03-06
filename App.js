/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// screens
import DashboardScreen from './app/screens/Dashboard/Index';

const App = () => {
  return <DashboardScreen />;
};

const styles = StyleSheet.create({
 
});

export default App;
