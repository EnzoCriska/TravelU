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
} from 'react-native';

import { createStackNavigator } from 'react-navigation'
import Login from './Code/Login/Login';
import SignInEmail from './Code/Login/SignInEmail';
import SignUp from './Code/Login/SignUp';
import HomeScreen from './Code/Home/HomeScreen';

import HomeScreenChild from './Code/Home/HomeScreenChild';
import Hotels from './Code/Hotels/Hotels';

const RootStack = createStackNavigator({

  Home: {
    screen: Login,
  },
  SignIn: {
    screen: SignInEmail,
  },
  SingUp_: {
    screen: SignUp,
  },
  Home_: {
    screen: HomeScreen,
  },
  Home_restaurants: {
    screen: Hotels
  },
  ScreenHome: {
    screen: HomeScreenChild,
  }
},
  {
    headerMode: 'none'
  }
);

export default class App extends Component {
  render() {
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
