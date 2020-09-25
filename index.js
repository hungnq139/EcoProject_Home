// https://raw.githubusercontent.com/benevbright/react-navigation-sample/master/src/LoginScreen.js

import React, {useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const Home = () => {
  useEffect(() => {
    console.log('moe');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('login')}
        style={{alignSelf: 'center'}}>
        <Text style={{fontSize: 36}}>Moas</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

global.HomeScreen = Home;
