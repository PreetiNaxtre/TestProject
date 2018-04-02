import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, BackAndroid, TouchableOpacity, CheckBox, Image, ScrollView, Dimensions } from 'react-native';
import GridView from 'react-native-super-grid';
import RoundCheckbox from 'rn-round-checkbox';
import Toast from 'react-native-simple-toast';
import { NavigationActions } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Category/List';
export default class GridPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onCheck: false,
            title: [],
            items: [
                { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
                { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
                { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
                { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
                { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
                { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' }
            ],

        };
    }
    componentDidMount() {
        return fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseJson) => {
                //alert(JSON.stringify(responseJson.code));

                this.setState({
                    title: responseJson.response[1].title

                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {

        const { navigate } = this.props.navigation;
        return (

            <View style={{ flex: 1 }}>
                <GridView
                    itemDimension={130}
                    items={this.state.items}
                    spacing={5}
                    style={styles.gridView}
                    renderItem={item => (
                        <View style={backgroundColor = 'transparent'}  >
                            <Image style={styles.imageStyle} source={require('..//../images/tomc.jpg')} />
                            <Text style={{ color: 'white', position: 'absolute', fontFamily: 'Ubuntu-B', alignSelf: 'center', alignContent: 'center', bottom: 15, fontSize: 20 }}>{this.state.title}</Text>
                            <View style={{ position: 'absolute', width: 50, height: 50, right: 1, top: 10, backgroundColor: 'transparent' }}>
                                <RoundCheckbox
                                    size={40}
                                    backgroundColor={'blue'}
                                    outerSize={10}
                                    outerColor={'transparent'}
                                    checked={this.state.onCheck}
                                    onValueChange={() => this.setState({ onCheck: !this.state.onCheck })}

                                />
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity onPress={() => navigate('Subscribers')} style={{ backgroundColor: 'green', alignItems: 'center', position: 'absolute', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 30, width: 260, height: 50, bottom: 15, alignSelf: 'center' }}  >
                    <Text style={{ fontSize: 20, justifyContent: 'center', color: 'white' }}  >Continue</Text>
                    <SimpleLineIcons
                        name='arrow-right'
                        size={14}
                        color='white'
                        style={{ left: 50 }}
                    />
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 10,

    },
    imageStyle: {
        width: 175,
        height: 175,
        borderRadius: 5
    },
});