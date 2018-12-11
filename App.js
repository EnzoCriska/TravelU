/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import Login from './Code/Login/Login';
import SignInEmail from './Code/Login/SignInEmail';
import SignUp from './Code/Login/SignUp';
import HomeScreen from './Code/Home/HomeScreen';
import HomeScreenChild from './Code/Home/HomeScreenChild';
import Hotels from './Code/Hotels/Hotels';

const RootStack = createStackNavigator({
  LoginScreen: {
    screen: Login,
  },
  SignInScreen: {
    screen: SignInEmail,
  },
  SingUpScreen: {
    screen: SignUp,
  },
  HomeScreen: {
    screen: HomeScreen,
  },
  HotelsScreen: {
    screen: Hotels
  },
  HomeChildSCreen: {
    screen: HomeScreenChild,
  }
},
{
  headerMode: 'none'
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
