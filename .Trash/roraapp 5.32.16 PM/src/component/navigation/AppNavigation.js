import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login/Login'
import Signup from './Signup/Signup'

const AppNavigation = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
    }
  }
})

export default AppNavigation
