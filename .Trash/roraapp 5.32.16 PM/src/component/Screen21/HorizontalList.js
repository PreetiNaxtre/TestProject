import React from 'react';
import { View, StyleSheet, Dimensions, ListView, CheckBox, Image, StatusBar, Text } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class HorizontalList extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  dataSource: ds.cloneWithRows([
                        {
                              text: 'Virendra',
                              last: 'Saran',
                              image: require('../../images/nature3.jpg'),
                              title: 'Action'

                        }
                        ,
                        {
                              text: 'Vikas',
                              last: 'Sawant',
                              image: require('../../images/nature4.jpg'),
                              title: 'Comic'
                        },
                        {
                              text: 'Shanky',
                              last: 'Bhamu',
                              image: require('../../images/nature2.jpg'),
                              title: 'Ramantic'
                        },
                        {
                              text: 'Jai',
                              last: 'Sharma',
                              image: require('../../images/nature1.jpg'),
                              title: 'Movies'
                        },
                        {
                              text: 'Mukesh',
                              last: 'Gulati',
                              image: require('../../images/nature1.jpg'),
                              title: 'Action'
                        },
                        {
                              text: 'Preetam',
                              last: 'Singh',
                              image: require('../../images/nature5.jpg'),
                              title: 'Action'
                        },
                        {
                              text: 'Narendra',
                              last: 'Mishara',
                              image: require('../../images/nature2.jpg'),
                              title: 'Action'
                        },
                        {
                              text: 'Mohit',
                              last: 'Pooniya',
                              image: require('../../images/nature3.jpg'),
                              title: 'Action'

                        },
                  ]),
            }
      }
      _renderRow(rowData) {
            return (
                  <View style={styles.mainContainer}>
                        <View style={{ alignItems: 'center' }}>
                              <Image source={rowData.image} style={styles.imageStyle} />
                              <Text style={{ position: 'absolute', color: 'white', bottom: 20 }}>{rowData.title}</Text>
                        </View>

                  </View>
            )
      }

      render() {
            return (
                  <View style={{ flex: 1 }}>
                        <StatusBar hidden={false} />
                        <ListView
                              dataSource={this.state.dataSource}
                              renderRow={this._renderRow}
                              horizontal={true}
                        />
                  </View>

            );
      }
}

const styles = StyleSheet.create({
      mainContainer: {
            flex: 1,
            display: 'flex',
            width: 170,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 160,
      },
      imageStyle: {
            width: 150,
            height: 150,
            borderRadius: 99,
      },


})
export default HorizontalList;