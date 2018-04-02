import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    ListView,
    StyleSheet,
    Dimensions,


} from 'react-native'
import GridItems from './GridItems'
import HorizontalList from './HorizontalList'

export default class Movies extends Component {
    constructor(props) {

        super(props)

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titletext}>M O V I E S</Text>
                </View>
                <View>
                    <HorizontalList />
                </View>
                <View style={styles.content}>
                    <GridItems />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        borderStyle: 'solid',
        borderWidth: .5,
        borderColor: 'black'

    },
    titletext: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'

    },
    content: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',
        marginTop: 10

    }
})