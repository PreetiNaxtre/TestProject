import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  Image,
  View,
  ScrollView
} from 'react-native';
import { fetch } from 'fetch';
import Worlds from './Worlds'
import Icon from 'react-native-vector-icons/MaterialIcons';
class World extends Component {

  render() {
    return (
      <ScrollView>
        <Worlds />
      </ScrollView>

    )
  }

}
const styles = StyleSheet.create({

})
module.exports = World