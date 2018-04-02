import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, TouchableHighlight, Icon, ListView, Image, StatusBar, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Toast from 'react-native-simple-toast';
import Entypo from 'react-native-vector-icons/Entypo'
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/MyWorld/List';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class World extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    menuName: "InteriorS"
                },
                {
                    menuName: "Let's Dance"
                },
                {
                    menuName: "Animie 327"
                },
                {
                    menuName: "International"
                },
                {
                    menuName: "Tranding"
                }, {
                    menuName: "Famous   "
                }
            ]),
        }
    }
    componentDidMount() {
        return fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson.recordsTotal));
                // let ds = new GridView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                // this.setState({
                //     dataSource: ds.cloneWithCells(responseJson.response, 2),
                //     cellWidth: 0,
                //     cellHeight: 0,
                // }, function () {
                //     // do something with new state
                // });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    _renderRow(rowData) {
        return (
            <View style={styles.mainContainer}>
                <Image source={require('../../images/nature4.jpg')} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{rowData.menuName}</Text>
                <View style={{ position: 'absolute', flexDirection: 'row', bottom: 10, right: 50 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../images/eye.png')} />
                        <Text style={{ color: 'white', fontSize: 10 }}>1546</Text>

                    </View>
                    <View style={{ position: 'absolute', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal: 35 }}>
                        <Image source={require('../../images/heart.png')} />
                        <Text style={{ color: 'white', fontSize: 10 }}>1546</Text>


                    </View>

                </View>
            </View>
        )
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <View style={styles.addNew}>
                        <Image source={require('../../images/tom.jpg')} style={styles.addImageStyle} />
                        <View style={{ right: 10, top: -10, width: 60, height: 60, alignItems: 'center', justifyContent: 'center', position: 'absolute', backgroundColor: 'red', borderRadius: 100 }}>
                            <TouchableHighlight
                                onPress={() => alert('Add new Story')}
                                underlayColor='red'>
                                <Entypo
                                    name='plus'
                                    size={45}
                                    color='white'
                                    backgroundColor='red'
                                    style={{ left: 0, }}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{ top: 10 }}>
                        <StatusBar hidden={false} />
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        borderWidth: .5,
        marginTop: 8,
        height: 140
    },
    imageStyle: {
        width: Dimensions.get('window').width,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle: {
        fontWeight: 'bold',
        position: 'absolute',
        color: 'white',
        fontFamily: 'Ubuntu-B'
        , fontSize: 23,
        marginLeft: 10,
        marginTop: 9,
    },
    addNew: {
        top: 10,
        width: Dimensions.get('window').width,
        height: 140,
    },
    addImageStyle: {

        width: Dimensions.get('window').width,
        height: 140,
    },

})



export default World;