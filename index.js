// https://raw.githubusercontent.com/benevbright/react-navigation-sample/master/src/LoginScreen.js

import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Home = ({navigation}) => {
  useEffect(() => {
    console.log('moe');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Info')}
        style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 36}}>Check Lv2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

global.HomeScreen = Home;
