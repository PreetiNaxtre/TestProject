import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  View
} from 'react-native';

import { fetch } from 'fetch';
import { NavigationActions } from 'react-navigation';
import Feeds from './Feeds'
import Icon from 'react-native-vector-icons/MaterialIcons';
class Rooms extends Component {

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>
        <Feeds />
      </View>

    )
  }

}
const styles = StyleSheet.create({

})
module.exports = Rooms