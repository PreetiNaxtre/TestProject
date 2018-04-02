import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableHighlight, Image, ScrollView, Dimensions } from "react-native";
import GridView from "react-native-easy-grid-view";

class GridItmes extends Component {
  constructor(props) {
    super(props);
    var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithCells([
        {
          text: 'Virendra',
          last: 'Saran',
          image: require('../../images/nature.jpg'),

        }
        ,
        {
          text: 'Vikas',
          last: 'Sawant',
          image: require('../../images/nature1.jpg'),
        },
        {
          text: 'Shanky',
          last: 'Bhamu',
          image: require('../../images/nature2.jpg'),
        },
        {
          text: 'Jai',
          last: 'Sharma',
          image: require('../../images/nature3.jpg'),
        },
        {
          text: 'Mukesh',
          last: 'Gulati',
          image: require('../../images/nature1.jpg'),
        },
        {
          text: 'Preetam',
          last: 'Singh',
          image: require('../../images/nature5.jpg'),
        },
        {
          text: 'Narendra',
          last: 'Mishara',
          image: require('../../images/nature2.jpg'),
        },
        {
          text: 'Mohit',
          last: 'Pooniya',
          image: require('../../images/nature3.jpg'),

        }], 2),
      cellWidth: 0,
      cellHeight: 0
    };
  }

  _renderCell(cell) {
    return <View onLayout={event => {
      var width = event.nativeEvent.layout.width;
      if (this.state.cellWidth != width) {
        this.setState({ cellWidth: width })
      }
      if (this.state.cellHeight != width) {
        this.setState({ cellHeight: width })
      }
    }}>

      <View style={styles.container}>
        <Image style={styles.imageStyle} source={cell.image} />
        <ScrollView>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ padding: 5, fontSize: 25, fontWeight: 'bold', color: 'black' }}>The Story About Padmavati</Text>
            <Text style={{ padding: 5, color: 'black' }}>Padmini, also known as Padmavati, was a legendary 13th-14th
                               century Indian queen (Rani).she is very beatiful. </Text>
          </View>
        </ScrollView>
        <View style={styles.footer} >
          <Image style={styles.footerImageStyle} source={cell.image} />
          <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{cell.text}</Text>
          <Text style={{ marginLeft: 8, fontWeight: 'bold' }}>{cell.last}</Text>
        </View>
      </View>

    </View>

  }

  render() {
    return <View style={{ flex: 1 }}>
      <ScrollView >
        <GridView dataSource={this.state.dataSource}
          spacing={1}
          style={{ padding: 5 }}
          renderCell={this._renderCell.bind(this)}

        />
      </ScrollView>
    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    height: 450
  },
  imageStyle: {
    width: 195,
    height: 250,
  },
  footerImageStyle: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 5,
    width: Dimensions.get('window').width,
    height: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row'
  },
  submit: {
    bottom: 15,
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonIcon: {

    width: 50,
    height: 50,
    borderRadius: 50
  }
})

module.exports = GridItmes;