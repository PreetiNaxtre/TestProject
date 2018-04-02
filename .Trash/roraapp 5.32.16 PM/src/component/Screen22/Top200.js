import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,NavigationActions,
    Dimensions,
    TouchableOpacity,
    ListView, BackAndroid
} from 'react-native'
import ListViewDemo from './ListViewDemo';

export default class Top200 extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
    }

    _backAndroid = () => {
        if (this.props.navigation.state.routeName === "RootView") {
            this.props.navigation.dispatch(NavigationActions.back());
            return true;
        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.titletext}>T O P  2 0 0</Text>
                </View>
                <View style={styles.content}>
                    <ListViewDemo />
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
        backgroundColor: 'white'

    }
})
