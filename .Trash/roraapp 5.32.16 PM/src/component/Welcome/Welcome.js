import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default class Welcome extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../../images/Landingscreen.png')} style={styles.container}>
                <View style={{ flex: 1 }} >
                    <View style={styles.hicontainer}>
                        <Text style={styles.upperTextStyle}>Hi</Text>
                    </View>
                    <View style={styles.container} >

                        <TouchableOpacity style={styles.login}
                            onPress={() => navigate('Third')}
                        >
                            <Text style={styles.text} >Log in</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signup} onPress={() => navigate('Second')}>
                            <Text style={styles.text} >Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground >
        )
    }

    goToSignUp = () => {
        alert("Its clicked man !!!");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16

    },

    login: {
        backgroundColor: '#FF398A',
        width: 239,
        height: 45,
        marginTop: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 64


    },
    signup: {
        backgroundColor: '#007AFF',
        width: 239,
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 64
    },
    hicontainer: {
        height: 280,
        left: 0, marginTop: 20,
        alignItems: 'flex-start'
    },
    upperTextStyle: {
        fontSize: 160,
        color: 'white',
        fontFamily: "PassionOne-Regular"
    },
    container1: {

    }

});
