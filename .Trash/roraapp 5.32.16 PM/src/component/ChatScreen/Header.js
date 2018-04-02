import React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, StatusBar } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        {/* <StatusBar backgroundColor="lightseagreen" barStyle="light-content" /> */}
        <View style={{ right: 70 }}>
          <Image source={require('../../images/BackBtn.png')} style={styles.imageStyle} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', right: 0 }}>
          <Text style={styles.title}>
            Rozer Steve
        </Text>
          <Text style={{ fontSize: 7, color: 'black' }}>last seen 20 minutes ago</Text>
        </View>
        <View style={{ left: 60, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../../images/tomc.jpg')} style={styles.imageStyle1} />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 55,
    borderBottomWidth: .2,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: .5,
    justifyContent: 'center',
    padding: 4,

  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 21,
  },
  imageStyle: {
    width: 26,
    height: 26,
    borderRadius: 100
  },
  imageStyle1: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
});