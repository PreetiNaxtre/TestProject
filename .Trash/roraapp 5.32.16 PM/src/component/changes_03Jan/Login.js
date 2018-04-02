import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Image, BackAndroid, ImageBackground, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Users/Login';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        }
    }
    login() {

        if (this.state.username == "") {
            Toast.show('Please provide Username or Email.');
        } else if (this.state.username == "") {
            Toast.show('Please provide Password.');
        } else {
            fetch(REQUEST_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "device_id": "dadf4f4erdfga489999999",
                    "password": this.state.password,
                    "email": this.state.email,
                })
            }).then((response) => response.json())
                .then((responseData) => {
                    //alert(JSON.stringify(responseData));
                    if (responseData.code == 0) {
                        if (responseData.msg == "") {
                            Toast.show(responseData.response);
                        } else {
                            Toast.show(responseData.msg);
                          //  this.props.navigation.navigate('Fourth');
                        }
                    } else {
                      //
                      //  saveLoginData(JSON.stringify(responseData));
                      var loginResponse = JSON.stringify(responseData);
                      AsyncStorage.setItem("LOGIN_DATA", loginResponse);
                     this.props.navigation.navigate('Fourth');
                    }

                }).catch((error) => {
                    console.log("error : " + error); // error
                });

        }
    }

    // render the screen
    render() {
        const { navigate } = this.props.navigation;
        return (

            <ImageBackground source={require('../../images/UserLogin.png')} style={styles.container1}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior="padding"
                >

                    <View style={styles.uprtextcontainer}>
                        <Text style={styles.uprtext}>Let's{'\nRoar'}</Text>

                    </View>
                    <View>
                        <View >

                            <View style={styles.input}>
                                <Icon
                                    name='user'
                                    size={20}
                                    color='#007AFF'
                                    style={styles.iconSize}
                                />
                                <TextInput style={{ width: 170, marginLeft: 20, fontFamily: 'Ubuntu-B' }}
                                    underlineColorAndroid="transparent"
                                    placeholder="User Name/Password"
                                    fontSize={14}
                                    placeholderTextColor="grey"
                                    autoCapitalize="none"
                                    onChangeText={(text) => this.setState({ email: text })}
                                />
                            </View>
                            <View style={styles.input}>
                                <Icon
                                    name='lock'
                                    size={20}
                                    color='#007AFF'
                                    style={styles.iconSize}
                                />
                                <TextInput style={{ width: 170, marginLeft: 20, fontFamily: 'Ubuntu-B' }}
                                    underlineColorAndroid="transparent"
                                    placeholder="* * * * * * * *"
                                    fontSize={14}
                                    secureTextEntry={true}
                                    inputType={'password'}
                                    placeholderTextColor="grey"
                                    autoCapitalize="none"
                                    onChangeText={(password) => this.setState({ password: password })}
                                />
                            </View>
                            {/* onPress={() => navigate('Subscribers')}onPress={() => this.login()} */}
                            <TouchableOpacity style={styles.ButtonStyle} onPress={() => this.login()} >
                                <Text style={styles.text}>Log in</Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{
                                    color: 'red',
                                    fontSize: 14,
                                    marginTop: 18,
                                    alignItems: 'center',
                                }}>Forgot password ?</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 300 }} />
                </KeyboardAvoidingView>
            </ImageBackground >

        );
    }
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        width: undefined,
        height: undefined,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    container1: {

        flex: 1,

        backgroundColor: 'transparent',
        alignItems: 'center',
    },

    uprtextcontainer: {
        left: 0,
        height: 220,
        alignSelf: 'flex-start'
    },

    uprtext: {
        fontSize: 75,
        marginTop: 20,
        color: 'white',
        fontFamily: "ARB-218 finished FREEWARE"
    },

    ButtonStyle: {
        backgroundColor: '#0CB863',
        width: 239,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginTop: 75,
        borderRadius: 65,
    },

    input: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 37,
        borderWidth: .5,
        borderRadius: 65,
        width: 239,
        height: 50,
    },
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',


    },
    fpass: {
        color: 'red',
        marginBottom: 20,
        marginTop: 20,

    },
    iconSize: {
        marginLeft: 30
    }
});
