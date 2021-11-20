import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import style from './style/style';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
};

export default DashboardScreen;
