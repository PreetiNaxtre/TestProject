/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Login from './src/component/Login/Login';
import Welcome from './src/component/Welcome/Welcome';
import Signup from './src/component/Signup/Signup';
import GridPage from './src/component/GridPage/GridPage';
import RoundView from './src/component/RoundView/RoundView';
import AppNavigation from './src/component/AppNavigation';
import Movies from './src/component/Screen21/Movies';
import Top200 from './src/component/Screen22/Top200';
import Main from './src/component/Screen8/Main';
import RootView from './src/component/TabView/RootView';
import ListView1 from './src/component/Screen9/ListView1';
import Category from './src/component/Screen20/Category';
import Talk from './src/component/Screen23/Talk';
import World from './src/component/Screen39/World';
import ChatDemo from './src/component/ChatScreen/ChatDemo';
import Room from './src/component/Screen29/Room';
import Subscribe from './src/component/Screen5/Subscribe'
import Invite from './src/component/Screen6/Invite'
import Maxwell from './src/component/Screen43/Maxwell'
//import Subscribers from './src/component/Screen46/Subscribers'
import Invites from './src/component/InviteScreen/Invites'
import Screen14 from './src/component/Screen14/Screen14'
import Comment from './src/component/CommentScreen/Comment'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      //  <Image source={require('./src/images/Background.jpg')} style={styles.container}>
      //<AppNavigation />
      <AppNavigation />
      //  </Image>
    );
  }
}
// Old Code
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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
