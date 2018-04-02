import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TextInput, CheckBox, ImageBackground, TouchableOpacity, Dimensions, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import RoundCheckbox from 'rn-round-checkbox';
import Toast from 'react-native-simple-toast';
import ModalDropdown from 'react-native-modal-dropdown';


var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Users/Registration';
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            gender: 'male',
            os: 'win',
            isSelected: false,
            onCheck: false,
            acceptsTerm: false

        }
    }



    signUp() {
        if (this.state.username == "") {
            Toast.show('Please provide Username.');
        } else if (this.state.email == "") {
            Toast.show('Please provide Email.');
        } else if (this.state.password == "") {
            Toast.show("Please provide Password");
        }
        else {
            fetch(REQUEST_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password,
                    gender: this.state.gender,
                    os: this.state.os
                })
            }).then((response) => response.json())
                .then((responseData) => {
                    // alert(JSON.stringify(responseData.code));
                    if (responseData.code == 0) {
                        Toast.show(responseData.response);
                    } else {
                        Toast.show("user successfully register");
                        this.props.navigation.navigate('Third');
                    }

                })
                .done();
        }
    }

    render() {
        //const { navigate } = this.props.navigation;
        //const { navigate } = this.props.navigation;
        return (

            <ImageBackground source={require('../../images/UserRegister.png')} style={styles.container1}>

                <View style={styles.container}>

                    <View style={{ right: 40, top: 0, height: 140 }} >
                        <Text style={styles.uppertext}>{`Who\nAre\nYou ?`}</Text>
                    </View>
                    <View style={styles.input}>
                        <Icon
                            name='user'
                            size={20}
                            color='#007AFF'
                            style={styles.iconSize}
                        />
                        <TextInput style={{ width: 170, marginLeft: 20, fontFamily: 'Ubuntu-B' }}
                            underlineColorAndroid="transparent"
                            placeholder="User Name"
                            fontSize={14}
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({ username: text })}
                            returnKeyType="next"
                        />
                    </View>
                    <View style={styles.input}>
                        <Icon
                            name='user'
                            size={20}
                            color='#007AFF'
                            style={styles.iconSize}
                        />
                        <TextInput style={{ width: 170, marginLeft: 20, fontFamily: 'Ubuntu-B' }}
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            fontSize={14}
                            returnKeyType="next"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            onChangeText={(text) => this.setState({ email: text })}
                        />
                    </View>

                    <View style={styles.input}>
                        <Icon
                            name='lock'
                            size={20} x
                            color='#007AFF'
                            style={styles.iconSize}
                        />
                        <TextInput style={{ width: 170, marginLeft: 20, fontFamily: 'Ubuntu-B' }}
                            underlineColorAndroid="transparent"
                            placeholder="* * * * * *"
                            fontSize={14}
                            returnKeyType="done"
                            placeholderTextColor="grey"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password: password })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        <Text style={{ marginHorizontal: 30, fontSize: 15 }}>Gender</Text>
                        <Text style={{ marginHorizontal: 30, fontSize: 15 }}>Age</Text>
                    </View>
                    <View style={{ flexDirection: 'row', right: 40, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', width: 150 }}>
                            <View style={{ marginLeft: 115, alignItems: 'center' }}>
                                <Text style={{ marginBottom: 7 }}>M</Text>
                                <RoundCheckbox
                                    backgroundColor={'purple'}
                                    size={19}
                                    checked={this.state.isSelected}
                                    onValueChange={() => this.setState({ isSelected: !this.state.isSelected })}

                                />

                            </View>
                            <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
                                <Text style={{ marginBottom: 7 }}>F</Text>
                                <RoundCheckbox
                                    size={19}
                                    checked={this.state.onCheck}
                                    onValueChange={() => this.setState({ onCheck: !this.state.onCheck })}

                                />
                            </View>
                        </View>
                        <View style={{ marginLeft: 35, width: 100, height: 30, alignItems: 'center' }}>
                            <ModalDropdown options={['10', '11', '12', '13', '14', '15', '16', '17',
                                '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
                                , '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45']}
                                dropdownStyle={{ width: 50, height: 150 }}
                                textStyle={{ fontWeight: 'bold', fontSize: 15 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}>
                        <View   >
                            <RoundCheckbox
                                size={18}
                                checked={this.state.acceptsTerm}
                                onValueChange={() => this.setState({ acceptsTerm: !this.state.acceptsTerm })}
                                backgroundColor={'orange'}
                            />
                        </View>
                        <View  >
                            <Text style={{ marginLeft: 20, color: 'red', fontSize: 12 }}>Accepts terms & Conditions</Text>
                        </View>
                    </View>


                    <View>
                        <TouchableOpacity style={styles.signup} onPress={() => this.signUp()}>
                            <Text style={styles.button}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground  >

        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'column'
    }, container1: {

        flex: 1,

        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        marginTop: 20,
        textAlign: 'center',
        borderRadius: 65,
        width: 239,
        height: 45,
    },
    uppertext: {
        fontSize: 42,
        marginTop: 10,
        color: 'white',
        fontFamily: "ARB-218 finished FREEWARE"
    },
    signup: {
        backgroundColor: '#3498db',
        width: 239,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        borderRadius: 64
    },
    content: {
        fontWeight: 'bold',
        margin: 70,
        color: 'white',
        alignItems: 'center'
    },
    condition: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    iconSize: {
        marginLeft: 25
    },

    input: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        borderWidth: .1,
        borderRadius: 65,
        width: 239,
        height: 50,
    },
    button: {
        color: '#fff',
        fontSize: 18
    }

});
