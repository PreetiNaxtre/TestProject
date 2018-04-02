import React from 'react';
import { View, StyleSheet, Dimensions, ListView, CheckBox, Image, StatusBar, Text } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class HorizontalLists extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  dataSource: ds.cloneWithRows([
                        {
                              text: 'Virendra',
                              last: 'Saran',
                              image: require('../../images/nature3.jpg'),
                              title: 'Technology'

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
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                              <Image source={rowData.image} style={styles.imageStyle} />
                              <Text style={{ position: 'absolute', color: 'white', fontWeight: 'bold' }}>{rowData.title}</Text>
                        </View>

                  </View>
            )
      }

      render() {
            return (
                  <View style={{ justifyContent: 'center' }}>
                        <StatusBar hidden={false} />
                        <ListView
                              dataSource={this.state.dataSource}
                              renderRow={this._renderRow}
                              horizontal={true}
                              scrollEnabled={true}
                              showsHorizontalScrollIndicator={false}
                        />
                  </View>

            );
      }
}

const styles = StyleSheet.create({
      mainContainer: {
            flex: 1,
            display: 'flex',
            width: 140,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 50,
      },
      imageStyle: {
            width: 130,
            height: 33,
            borderRadius: 3,
      },


})
export default HorizontalLists;