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
import Feeds from './Feeds'
//import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
class Life extends Component {

  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View >
        <Feeds style={{ flex: 1 }} />
      </View>

    )
  }

}
const styles = StyleSheet.create({

})
module.exports = Life