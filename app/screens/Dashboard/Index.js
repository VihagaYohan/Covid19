import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

import style from './style/style';

const DashboardScreen = () => {
  return (
    <SafeAreaView style={style.container}>
      <View
        style={{
          width: responsiveScreenWidth(50),
          height: responsiveScreenHeight(50),
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.75),
          }}>
          hello
        </Text>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(3),
            borderWidth: 1,
            marginBottom:responsiveScreenHeight(5),
          }}>
          world
        </Text>
        <Text
          style={{
            fontSize: responsiveScreenFontSize(3),
            borderWidth: 1,
          }}>
          world
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
