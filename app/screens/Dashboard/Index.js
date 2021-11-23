import React, {Component, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import BASE_URL from '../../util/env/env.production';

import style from './style/style';

// api
import {getFeedList} from './action'

const DashboardScreen = () => {
  useEffect(() => {
    let result = getCountries()
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
    /* let result = getData()
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      }); */

    /* let result = getData()
      .then(r => {
        let result = r
          .json()
          .then(r => {
            console.log('json data type');
            console.log(r);
          })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e)); */
  }, []);

  const getData = async () => {
    let result = await fetch(BASE_URL.BASE_URL + '/cases');
    //return result;
    console.log(result);
    result = await result.json();
    console.log(result);
    return result;
  };

  // get data from API
  const getCountries = async () => {
   const payload = {
     action:"/cases",
     date:new Date()
   }
    let result = await getFeedList(payload)
    console.log('Log from getCountries');
    console.log(result);
   /*  result = await result.json();
    consnole.log(result); */
    return result;
  };

  return (
    <SafeAreaView style={style.container}>
      <Text>hello</Text>
    </SafeAreaView>
  );
};

export default DashboardScreen;
