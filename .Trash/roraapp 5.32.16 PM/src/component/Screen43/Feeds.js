import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import GridView from "react-native-easy-grid-view";
import Entypo from 'react-native-vector-icons/Entypo'
import { NavigationActions } from 'react-navigation';
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Feed/Feed';
class Feeds extends Component {
      constructor(props) {
            super(props);
            var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

            this.state = {
                  dataSource: ds.cloneWithCells([
                        {
                              text: 'Virendra',
                              last: 'Saran',
                              // img: "require('../../images/tomc.jpg')"

                        }
                        ,
                        {
                              text: 'Mohit',
                              last: 'Pooniya'

                        },
                        {
                              text: 'Mohit',
                              last: 'Pooniya'

                        },
                        {
                              text: 'Mohit',
                              last: 'Pooniya'

                        },
                        {
                              text: 'Mohit',
                              last: 'Pooniya'

                        }], 2),
                  cellWidth: 0,
                  cellHeight: 0
            };
      }
      componentDidMount() {
            return fetch(REQUEST_URL)
                  .then((response) => response.json())
                  .then((responseJson) => {
                        // alert(JSON.stringify(responseJson.response));
                        //  let ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                        // this.setState({
                        //       dataSource: ds.cloneWithCells(responseJson.response, 2),
                        //       cellWidth: 0,
                        //       cellHeight: 0,
                        // }, function () {
                        //       // do something with new state
                        // });
                  })
                  .catch((error) => {
                        console.error(error);
                  });
      }
      _renderCell(cell) {
            //  const { navigate } = this.props.navigation;
            return <View onLayout={event => {
                  var width = event.nativeEvent.layout.width;
                  if (this.state.cellWidth != width) {
                        this.setState({ cellWidth: width })
                  }
                  if (this.state.cellHeight != width) {
                        this.setState({ cellHeight: width })
                  }
            }}>
                  <View style={styles.container} onPress={() => alert('Add new Story')}>
                        <TouchableOpacity style={styles.logincontainer} onPress={() => navigate('Main')}>
                              <Image style={styles.imageStyle} source={require('../../images/tomc.jpg')} />
                        </TouchableOpacity>

                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                              <Text style={{ padding: 5, fontSize: 17, fontWeight: 'bold', color: 'black' }}>The Story About Padmavati</Text>
                              <Text style={{ padding: 5, fontSize: 15, color: 'black' }}>Padmini, also known as Padmavati, was a legendary 13th-14th
                               century Indian queen (Rani).she is very beatiful. </Text>
                        </View>

                        <View style={styles.footer} >
                              <Image style={styles.footerImageStyle} source={require('../../images/tom.jpg')} />
                              <Text style={{ marginLeft: 6, fontWeight: 'bold', fontSize: 10 }}>{cell.text}</Text>
                              <Text style={{ marginLeft: 3, fontWeight: 'bold', fontSize: 10 }}>{cell.last}</Text>
                        </View>
                  </View>
            </View>
      }

      render() {
//const { navigate } = this.props.navigation;
            return (
             <View>
                  <GridView dataSource={this.state.dataSource}
                        spacing={5}
                        style={{ padding: 5 }}
                        renderCell={this._renderCell.bind(this)}

                  />
                  <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <TouchableHighlight
                              style={styles.submit}
                              onPress={() => alert('Add new Story')}
                              underlayColor='#fff'>
                              <Entypo
                                    name='plus'
                                    size={40}
                                    color='#007AFF'
                                    style={{ left: 0 }}
                              />
                        </TouchableHighlight>
                  </View>
            </View>
            );
      }

}
const styles = StyleSheet.create({
      container: {
            backgroundColor: 'white',
            flex: 1,
            borderWidth: 0,
            height: 350
      },
      imageStyle: {
            width: 195,
            height: 250,
      },
      footerImageStyle: {
            width: 26,
            height: 26, marginLeft: 10,
            borderRadius: 100,
      },
      footer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            padding: 5,

            height: 40,
            width: 180,
            backgroundColor: 'white',
            alignItems: 'center',
            flexDirection: 'row'
      },
      submit: {
            bottom: 15,
            position: 'absolute',
            backgroundColor: 'white',
            borderRadius: 50,
            width: 50,
            height: 50,
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

module.exports = Feeds;
