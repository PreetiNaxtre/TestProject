import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  View,
} from 'react-native';
import { fetch } from 'fetch';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Life from './Life';
import World from './World';
import Rooms from './Rooms';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ActionButton from 'react-native-action-button';
// this class is for for diffrent tab view like Feeds and Expl
export default class Profile extends Component {

  render() {
    return (
      <View style={styles.mainContainer}>

        <View style={styles.contentContainer}>
          <ScrollableTabView
            tabBarUnderlineColor="#e74c3c"
            tabBarUnderlineStyle={{ backgroundColor: "red" }}
            tabBarBackgroundColor="transparent"
            backgroundColor="#e74c3c"
            tabBarActiveTextColor="black"
            tabBarInactiveTextColor="black"
            style={styles.text}
          >
            <Life tabBarActiveTextColor='white' tabLabel="LIFE" {...this.props} />
            <World tabLabel="WORLD" {...this.props} />
            <Rooms tabLabel="ROOMS" {...this.props} />

          </ScrollableTabView>
        </View>
      </View >
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: 24
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    alignItems: "center",
    paddingRight: 5,
  },

  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row",

  },
  contentContainer: {
    flex: 8, marginTop: 10,
    backgroundColor: 'white',
  },
  actionButtonIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ee6e73',
    position: 'absolute',
    bottom: 10,
    right: 10,


  },
  actionButton: {

  },
  text: {
    borderTopWidth: .3,

  }


});
