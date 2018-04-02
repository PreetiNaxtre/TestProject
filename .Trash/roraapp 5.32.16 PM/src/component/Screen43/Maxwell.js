import React from 'react';
import { View, StyleSheet, ListView, BackAndroid, Image, StatusBar, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from '../../component/Screen43/Profile'
import { NavigationActions } from 'react-navigation';
import StarRating from 'react-native-star-rating';


class Maxwell extends React.Component {

      constructor(props) {
            super(props)
            this.state = {
                  value: 8.5,
                  starCount: 3.5
            };
      }
      componentWillMount() {
            BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
      }

      _backAndroid = () => {
            if (this.props.navigation.state.routeName === "Maxwell") {
                  this.props.navigation.dispatch(NavigationActions.back());
                  return true;
            }
      }
      backPage() {
            this.props.navigation.navigate('RootView');
      }

      ratting() {
            return (
                  <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                  />
            );

      }

      onStarRatingPress(rating) {
            this.setState({
                  starCount: rating
            });
      }
      render() {
             const { navigate } = this.props.navigation;
            return (

                  <View style={styles.mainContainer}>
                        <ScrollView>
                              <View>
                                    <TouchableOpacity style={styles.logincontainer} onPress={() => navigate('Main')}>
                                          <Image style={styles.imageStyle} source={require('../../images/tomc.jpg')} />
                                    </TouchableOpacity>
                                    <SimpleLineIcons
                                          name='arrow-left'
                                          size={20}
                                          color='white'
                                          onPress={() => this.backPage()}
                                          style={{ position: 'absolute', marginTop: 18, marginLeft: 20 }}
                                    />
                                    <MaterialCommunityIcons
                                          name='message-bulleted'
                                          size={35}
                                          color='white'
                                          onPress={() => navigate('ChatDemo')}
                                          style={{ position: 'absolute', marginTop: 18, marginLeft: 20, right: 10 }}
                                    />
                              </View>
                              <View style={{
                                    backgroundColor: "white", flexDirection: 'row', width: 160, height: 42,
                                    borderWidth: .1,
                                    borderRadius: 1,
                                    borderColor: 'black',
                                    borderBottomWidth: 0.1,
                                    shadowColor: 'black',
                                    shadowOffset: { width: 0, height: 14 },
                                    shadowOpacity: 5.0, elevation: 1,
                                    shadowRadius: 10, position: 'absolute', right: 0, top: 278
                              }}>
                                    <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center', padding: 5, justifyContent: 'center' }}>
                                          <View style={{ flexDirection: 'row', flex: 1, marginLeft: 5, alignItems: 'center' }}>
                                                <View >
                                                      <FontAwesome
                                                            name='star'
                                                            size={25}
                                                            color='#FF8000'

                                                      />
                                                </View>
                                                <View style={{ flexDirection: 'column', flex: 1, marginLeft: 5 }}>

                                                      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 12 }}>{this.state.starCount}/10</Text>
                                                      <Text style={{ fontSize: 10 }}>12,352</Text>

                                                </View>
                                          </View>

                                    </View>
                                    <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center', right: 23 }}>
                                          <EvilIcons
                                                name='star'
                                                size={32}
                                                color='#FF8000'
                                                onPress={() => this.ratting()}

                                          />
                                          <Text style={{ fontWeight: 'bold', color: 'black', marginLeft: 5, fontSize: 10 }}>{`Rate\nNow`}</Text>

                                    </View>
                              </View>
                              <View style={styles.view2}>
                                    <View>
                                          <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', left: 40 }}>Maxwell</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'center', left: 40 }}>

                                          <View style={{ justifyContent: 'center', width: 120 }}>
                                                <Text style={{ fontSize: 15, color: 'black', }}>Subscribed</Text>
                                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 14 }}>546</Text>
                                          </View>

                                          <View style={{ justifyContent: 'center', width: 118 }}>
                                                <Text style={{ fontSize: 15, color: 'black', }}>Subscribers</Text>
                                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 14 }}>785</Text>
                                          </View>
                                          <View style={{ justifyContent: 'center', width: 116 }}>
                                                <Text style={{ fontSize: 15, color: 'black', }}>Rated</Text>
                                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 14 }}>624</Text>
                                          </View>

                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                          <TouchableOpacity style={styles.button} >
                                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Subscribe</Text>
                                          </TouchableOpacity>

                                    </View>

                                    <View style={{ height: Dimensions.get('window').height, }}>
                                          <Profile />
                                    </View>

                              </View>

                        </ScrollView>

                  </View>

            );
      }
}

const styles = StyleSheet.create({
      mainContainer: {
            flex: 1,
            width: Dimensions.get('window').width,
            flexDirection: 'column',
            borderWidth: .5,
            backgroundColor: '#FCFCFC',
            height: 120,

      },
      imageStyle: {
            width: 420,
            height: 300
      },
      view2: {
            flexDirection: 'column'

      },
      tabs: {

      },
      button: {
            backgroundColor: '#FF0080',
            width: 280,
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            borderRadius: 7
      },
})



export default Maxwell;
