/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
}
  from
  'react-native';

import{createStackNavigator} from 'react-navigation'
import Login from './Code/Login/Login';
import SignInEmail from './Code/Login/SignInEmail';
import SignUp from './Code/Login/SignUp';
import HomeScreen from './Code/Home/HomeScreen';

import HomeScreenChild from './Code/Home/HomeScreenChild';
import Hotels from './Code/Hotels/Hotels';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const RootStack = createStackNavigator({

  Home:{
    screen: Login,
    
  },
  SignIn: {
    screen:SignInEmail,
  },
  SingUp_:{
    screen : SignUp,
  },
  Home_:{
    screen: HomeScreen,
  },
  Home_restaurants:{
    screen: Hotels
  },
  ScreenHome:{
    screen : HomeScreenChild,
  }
},

  {
    headerMode:'none'
  }
);

export default class App extends Component {
  render() {
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to React Native!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //   </View>
    // );
    return <RootStack />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
