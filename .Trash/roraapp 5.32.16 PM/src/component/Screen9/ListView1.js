import React from 'react';
import { View, ListView, Dimensions, Image, ScrollView, StyleSheet, Text } from 'react-native';




class ListView1 extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View >
          <Image source={require('../../images/Background1.jpg')} style={styles.imagecontainer} />
        </View>
        <View>
          <ListView
            style={styles.listContainer}
            dataSource={this.state.dataSource}
            renderRow={(data) => <View><Text>{data}</Text></View>}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.leftfooter}>
            <Text >test</Text>
          </View>
          <View style={styles.rightfooter}>
            <Text >here</Text>
          </View>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    flexDirection: 'column',
    alignItems: 'center',

  },
  imagecontainer: {
    height: Dimensions.get('window').height / 2 - 70,
    width: Dimensions.get('window').width,


  },
  listContainer: {
    marginTop: 10,
  },
  footer: {
    width: Dimensions.get('window').width,
    backgroundColor: "blue",
    bottom: 0,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: .5,
    borderColor: 'black',
    height: 55,
    position: 'absolute'

  },
  leftfooter: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    
  },
  rightfooter: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    
  }

});

export default ListView1;