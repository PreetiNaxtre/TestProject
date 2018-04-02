import React from 'react';
import { View, StyleSheet, Dimensions, BackAndroid, TextInput, TouchableOpacity, ListView, CheckBox, Image, StatusBar, Text } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationActions } from 'react-navigation';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class Search extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  dataSource: ds.cloneWithRows([
                        {
                              firstName: "Vikas",
                              lastName: "Kumar",
                              status: 'online',
                              image: require('../../images/tomc.jpg')

                        },
                        {
                              firstName: "Ravi",
                              lastName: "sharma",
                              status: 'offline',
                              image: require('../../images/nature.jpg')
                        },
                        {
                              firstName: "Ghanshyam",
                              lastName: "swami",
                              status: 'away',
                              image: require('../../images/nature1.jpg')
                        },
                        {
                              firstName: "Vimal",
                              lastName: "kumar",
                              status: 'away',
                              image: require('../../images/nature2.jpg')
                        },
                        {
                              firstName: "Parkash",
                              lastName: "tholiya",
                              status: 'offline',
                              image: require('../../images/nature3.jpg')
                        },
                        {
                              firstName: "Raju",
                              lastName: "khati",
                              status: 'away',
                              image: require('../../images/tomc.jpg'),
                        },
                        {
                              firstName: "Ravi",
                              lastName: "sharma",
                              status: 'always',
                              image: require('../../images/nature.jpg'),
                        },
                        {
                              firstName: "Ghanshyam",
                              lastName: "swami",
                              status: 'not available',
                              image: require('../../images/nature1.jpg'),
                        },
                        {
                              firstName: "Vimal",
                              lastName: "kumar",
                              status: 'online',
                              image: require('../../images/nature3.jpg'),
                        },
                  ]),
            }
      }
      componentWillMount() {
            BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
      }

      _backAndroid = () => {
            if (this.props.navigation.state.routeName === "Search") {
                  this.props.navigation.dispatch(NavigationActions.back());
                  return true;
            }
      }
      _renderRow(rowData) {
            return (
                  <View style={styles.mainContainer}>
                        <View style={styles.firstPortion}>
                              <Image source={rowData.image} style={styles.imageStyle} />
                        </View>
                        <View style={styles.secondPortion}>
                              <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.textStyle}>{rowData.firstName}</Text>
                                    <Text style={styles.textStyle}>{rowData.lastName}</Text>
                              </View>
                              <Text style={{ fontSize: 12, marginLeft: 3 }}>{rowData.status}</Text>
                        </View>
                        <View style={styles.thirdPortion}>
                              <RoundCheckbox
                                    size={30}
                                    checked={true}
                                    backgroundColor={'#82CAFA'}
                              />
                        </View>
                  </View>
            )
      }

      render() {
            return (
                  <View style={{ flex: 10, backgroundColor: 'white' }}>
                        <View style={{ flex: .80, backgroundColor: 'white', alignItems: 'center', flexDirection: 'row' }}>

                              <View style={{ width: 300, height: 40, flex: 4, flexDirection: 'row', backgroundColor: 'lightgrey', marginLeft: 10, marginRight: 10, alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Feather
                                          name='search'
                                          size={20}
                                          color='black'
                                          style={{ alignItems: 'center', marginLeft: 15 }}
                                    />
                                    <TextInput
                                          style={{ flex: 1, marginLeft: 5, fontWeight: 'bold' }}
                                          placeholder="Add more people or email address"
                                          alignItems='center'

                                          underlineColorAndroid={'rgba(0,0,0,0)'}
                                    />

                              </View>




                              <View style={{ backgroundColor: 'white', height: 40, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>Cancel</Text>
                              </View>
                        </View>
                        <View style={{ flex: 8, padding: 10 }}>
                              <Text style={{ marginLeft: 12, marginBottom: 5, fontSize: 18, fontWeight: 'bold' }}> Contacts</Text>
                              <ListView
                                    dataSource={this.state.dataSource}
                                    renderRow={this._renderRow}
                              />
                        </View>

                        <View style={{
                              flex: .80, borderTopWidth: .2, alignItems: 'flex-end',
                        }}>
                              <View style={{ marginRight: 20, marginTop: 0 }}>
                                    <TouchableOpacity style={styles.button} >
                                          <Text style={{ color: 'white', fontWeight: 'bold', }} >Create</Text>
                                    </TouchableOpacity>
                              </View>
                        </View>
                  </View>

            );
      }
}

const styles = StyleSheet.create({
      mainContainer: {
            flex: 1,
            display: 'flex',
            width: Dimensions.get('window').width,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: .2,
            height: 60,
      },
      imageStyle: {
            width: 50,
            height: 50,
            borderRadius: 99,
      },
      firstPortion: {
            marginLeft: 12,
      },
      secondPortion: {
            width: 200,
            flexDirection: 'column',
            marginLeft: 25,
      },
      thirdPortion: {
            width: 100,
            height: 90,
            alignItems: 'center',
            marginLeft: 20,
            justifyContent: 'center',
      },
      textStyle: {
            fontWeight: 'bold',
            fontSize: 15,
            marginHorizontal: 2,
      },
      button: {
            backgroundColor: 'red',
            width: 120,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,

            borderRadius: 5
      },
})
export default Search;