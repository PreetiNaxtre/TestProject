import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, BackAndroid, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HorizontalLists from '../../component/Screen14/HorizontalLists'
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-picker';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Feed/Create';
var LOGIN_DATA_RESPONSE = '';

export default class Screen14 extends Component {
      constructor(props) {
            super(props);

            this.state = {
                  feeds: '',
                  image: require('../../images/nature3.jpg'),
            }

      }
      componentDidMount() {

        AsyncStorage.getItem("LOGIN_DATA").then((value) => {
            LOGIN_DATA_RESPONSE = JSON.parse(value);;
        });

            const options = {
                  quality: 1.0,
                  maxWidth: 500,
                  maxHeight: 500,
                  storageOptions: {
                        skipBackup: true
                  }
            };
      /*      ImagePicker.launchCamera(options, (response) => {
                  if (response.didCancel) {
                        console.log('User cancelled image picker');
                  }
                  else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                  }
                  else if (response.customButton) {
                        console.log('User tapped custom button: ', response.customButton);
                  }
                  else {
                        let source = { uri: response.uri };
                        // You can also display the image using data:
                        //let source = { uri: 'data:image/jpeg;base64,' + response.data };
                        this.setState({
                              avatarSource: source
                        });
                  }
                  // Same code as in above section!
            }); */
      }

      feedCreate() {
            if (this.state.feeds == "") {
                  Toast.show('Please Enter Title.');
                  return;
            }
            else {
                  //alert(JSON.stringify(response));

              //    alert(LOGIN_DATA_RESPONSE.response.id);
                  let formdata = new FormData();
                  formdata.append("feed", this.state.feeds);
                  formdata.append("user_id", LOGIN_DATA_RESPONSE.response.id);
                  formdata.append("category_id", 1);
                //  formdata.append("attachment", this.state.avatarSource);

                  fetch(REQUEST_URL, {
                        method: 'POST',
                        headers: {
                              'Content-Type': 'multipart/form-data',
                              // 'Content-Type': 'application/json'
                              //  'Content-Type': 'multipart/form-data'
                        },
                        body: formdata
                  }).then((response) => response.json())
                        .then((responseData) => {
                            //  alert(JSON.stringify(responseData.code));
                              if (responseData.code == 0) {
                                    Toast.show(responseData.response);
                              } else {
                                    //  Toast.show('feed is added');
                                  // this.props.navigation.navigate('RouteView');
                                  //  BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
                              }

                        })
                        .done();
            }
      }
      componentWillMount() {
            BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);

      }

      _backAndroid = () => {
            if (this.props.navigation.state.routeName === "Screen14") {
                  this.props.navigation.dispatch(NavigationActions.back());
                  return true;
            }
      }
      backPage() {
            this.props.navigation.navigate('RouteView');
      }
      render() {
            const { navigate } = this.props.navigation;
            return (
                  <View style={styles.container}>
                        <View style={styles.header}>
                              <View style={{ width: 60, height: 50, backgroundColor: 'white', marginRight: 100, alignItems: "center", justifyContent: 'center', }}>
                                    <MaterialIcons
                                          name='keyboard-arrow-left'
                                          size={50}
                                          style={{}}
                                          color='grey'
                                          onPress={() => this.backPage()}
                                    />
                              </View>
                              <View style={{ backgroundColor: 'white', height: 50, width: 60, marginLeft: 130, alignItems: 'center', justifyContent: 'center' }}>
                                    <Ionicons
                                          name='md-send'
                                          size={30}
                                          style={{}}
                                          color='black'
                                          onPress={() => this.feedCreate()}
                                    />
                              </View>
                        </View>
                        <View style={styles.centerView}>

                              <View style={{ backgroundColor: 'white', height: 60, borderBottomWidth: .3 }}>

                                    <TextInput
                                          style={{ fontWeight: 'bold', backgroundColor: 'white', marginLeft: 30, fontSize: 22 }}
                                          placeholder="Title"
                                          alignItems='center'
                                          onChangeText={(text) => this.setState({ feeds: text })}
                                          underlineColorAndroid={'rgba(0,0,0,0)'}
                                    />
                              </View>
                              <View style={{ backgroundColor: 'white', height: 60, justifyContent: 'space-between' }}>

                                    <TextInput
                                          style={{ backgroundColor: 'white', fontSize: 20, marginLeft: 30, }}
                                          placeholder="Type Something Here.."
                                          alignItems='center'
                                          // onChangeText={(text) => this.setState({ description: text })}
                                          underlineColorAndroid={'rgba(0,0,0,0)'}
                                    />
                              </View>
                        </View>

                        <View style={styles.footer}>
                              <View style={{ height: 50 }}>
                                    <HorizontalLists />
                              </View>
                              <View style={{
                                    height: 60,
                                    borderTopWidth: .3,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                              }}>
                                    <Feather
                                          name='plus'
                                          size={30}
                                          style={{ marginHorizontal: 27 }}
                                          color='black'

                                    />
                                    <FontAwesome
                                          name='bold'
                                          size={30}
                                          style={{ marginHorizontal: 17 }}
                                          color='red'

                                    />
                                    <FontAwesome
                                          name='italic'
                                          size={30}
                                          style={{ marginHorizontal: 28 }}
                                          color='yellow'

                                    />
                                    <Foundation
                                          name='list-bullet'
                                          size={30}
                                          style={{ marginHorizontal: 28 }}
                                          color='blue'

                                    />
                                    <MaterialCommunityIcons
                                          name='satellite'
                                          size={30}
                                          style={{ marginHorizontal: 28 }}
                                          color='#FF00FF'

                                    />
                              </View>
                        </View>
                  </View >
            )
      }
}
const styles = StyleSheet.create({
      container: {
            flex: 10,
            backgroundColor: 'red',
            display: 'flex'

      },

      header: {
            height: 60,
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: .3
      },

      centerView: {
            flex: 8,
            backgroundColor: 'white',
            flexDirection: 'column',
      },

      footer: {
            height: 110,
            borderTopWidth: .3,
            flexDirection: 'column',
            backgroundColor: 'white',
      }

})
