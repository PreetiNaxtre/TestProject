import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView, BackAndroid,
  View,
  ScrollView,
} from 'react-native';
import { fetch } from 'fetch';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feeds from './Feeds';
import Talk from '../Screen23/Talk';
import Expl from './Expl';
import Room from './Room'
//import World from './World'
import Movies from '../Screen21/Movies';
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ActionButton from 'react-native-action-button';

// this class is for for diffrent tab view like Feeds and Expl
export default class RootView extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
  }

  componentDidMount() {
  }
  componentWillUnmount() {
    BackAndroid.exitApp();
  }

  _backAndroid = () => {
    if (this.props.navigation.state.routeName === "RouteView") {
      return true;
    } else {
      return true;
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            {/* <Image source={require('./src/images/search.png')}/> */}
          </View>
          <View style={styles.rightHeaderContainer}>
            {/* <Image source={require('./src/images/message.png')} /> */}
            {/* <Image source={require('./src/images/user.png')} /> */}
          </View>
        </View>

        <View style={styles.contentContainer}>

          <ScrollableTabView
            tabBarUnderlineColor="#FD5A4C"
            tabBarUnderlineStyle={{ backgroundColor: "#FD5A4C" }}
            tabBarBackgroundColor="#fff"
            backgroundColor="#fff"

            tabBarActiveTextColor="#FD5A4C"
            tabBarInactiveTextColor="#FDD66E"
          >
            <Feeds tabLabel="FEEDS" {...this.props} />
            <Expl tabLabel="EXPL" {...this.props} />
            <Talk tabLabel="TALK" {...this.props} />
            <Room tabLabel="ROOM" {...this.props} />

          </ScrollableTabView>

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 24,
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
    flex: 8,
    backgroundColor: 'white',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'black',
  },
  actionButton: {
  }
});
