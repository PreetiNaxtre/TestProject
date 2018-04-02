import React, { Component } from "react";
import { Text, View, StyleSheet, Button, TouchableHighlight, Image, ScrollView, Dimensions } from "react-native";
import GridView from "react-native-easy-grid-view";
import Icon from 'react-native-vector-icons/Entypo'

class Room extends Component {
      constructor(props) {
            super(props);
            var ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.state = {
                  dataSource: ds.cloneWithCells([
                        {
                              first: 'Virendra',
                              category: 'Create new room',


                        },
                        {
                              first: 'Vikas',
                              category: 'Fashion Corner',
                        },
                        {
                              first: 'Shanky',
                              category: 'Qwerty World',
                        },
                        {
                              first: 'Jai',
                              category: 'Do or Die',
                        },
                        {
                              first: 'Mukesh',
                              category: 'Jack Hammers',
                        },
                        {
                              first: 'Preetam',
                              category: 'Biebers',
                        },
                        {
                              first: 'Narendra',
                              category: 'Do or Die',
                        },
                        {
                              first: 'Mohit',
                              category: 'Qwerty World',

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
                        <View style={styles.textContainer}>
                              <View style={{ flexDirection: 'row' }}>
                                    <Icon
                                          name='lock'
                                          size={22}
                                          color='black'
                                          style={styles.lockIcon}
                                    />
                                    <Text style={styles.nameStyle}>{cell.category}</Text>


                              </View>
                              <Text style={{ fontSize: 10 }}> Created by {cell.first}</Text>

                              <View>
                              </View>

                        </View>
                        <View style={styles.imageContainer}>
                              <Image style={styles.imageStyle} source={require('../../images/tomc.jpg')} />
                              <View style={{ margin: 150, position: 'absolute' }}><Icon
                                    name='dots-three-vertical'
                                    size={30}
                                    color='white'
                                    style={styles.dotIcon}
                              />
                              </View>
                        </View>
                  </View>
            </View>
      }

      render() {
            return <View>
                  <GridView dataSource={this.state.dataSource}
                        spacing={20}
                        style={{ padding: 10 }}
                        renderCell={this._renderCell.bind(this)}

                  />



            </View >
      }
}
const styles = StyleSheet.create({
      container: {
            backgroundColor: 'white',
            height: 260,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end'

      },
      imageStyle: {
            width: 195,
            height: 200,

      },
      imageContainer: {

      },
      textContainer: {
            flexDirection: 'column',
            padding: 10

      },
      dotIcon: {
            position: 'absolute'
      },
      lockIcon: {

      },
      nameStyle: {
            fontSize: 15,
            fontWeight: 'bold'
      }
})

module.exports = Room;