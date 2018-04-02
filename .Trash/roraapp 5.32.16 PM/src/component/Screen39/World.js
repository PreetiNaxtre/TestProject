import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Icon, ListView, Image, StatusBar, Text } from 'react-native';
import ActionButton from 'react-native-action-button';
import Toast from 'react-native-simple-toast';

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class World extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    menuName: "Interiors"
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

    _renderRow(rowData) {
        return (
            <View style={styles.mainContainer}>
                <Image source={require('../../images/tom.jpg')} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{rowData.menuName}</Text>
                <View style={styles.iconContainer}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../images/eye.png')} />
                        <Text style={{ color: 'white', fontSize: 10 }}>1546</Text>

                    </View>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
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
                        <Image source={require('../../images/tomc.jpg')} style={styles.addImageStyle} />
                        <ActionButton buttonColor="#000000" style={{ marginLeft: 20 }}>
                            <ActionButton.Item buttonColor='blue' title="All Tasks" onPress={() => { alert("sample") }}>
                                <Icon name="plus" style={styles.actionButtonIcon} />
                            </ActionButton.Item>
                        </ActionButton>


                    </View>
                    <View>
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
        height: 200
    },
    imageStyle: {
        width: Dimensions.get('window').width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textStyle: {
        fontWeight: 'bold',
        position: 'absolute',
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
        marginTop: 20,
    },
    addNew: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    addImageStyle: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    actionButtonIcon:
        {
            fontSize: 20,
            height: 22,
            color: 'white',
        },
    iconContainer: {
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 330,
        marginTop: 140,


    }

})



export default World;