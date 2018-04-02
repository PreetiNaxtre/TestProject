import React from 'react';
import {
      StyleSheet,
      Text,
      View,
      TextInput,
      TouchableOpacity,
      KeyboardAvoidingView,
      StatusBar,
      FlatList,
      Image,
      Dimensions,
} from 'react-native';
import ReversedFlatList from 'react-native-reversed-flat-list';
// import Icon from 'react-native-vector-icons/Entypo'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { send, subscribe } from 'react-native-training-chat-server';
import Header from './Header';
const NAME = '@Test';
const CHANNEL = 'Random';
const AVATAR =
      'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg';
export default class ChatScreen extends React.Component {
      state = {
            typing: '',
            messages: [],
      };
      componentWillMount() {
            subscribe(CHANNEL, messages => {
                  this.setState({ messages });
            });
      }
      sendMessage = async () => {
            // read message from component state
            const message = this.state.typing;
            // send message to our channel, with sender name
            await send({
                  channel: CHANNEL,
                  sender: NAME,
                  avatar: AVATAR,
                  message,
            });
            // set the component state (clears text input)
            this.setState({
                  typing: '',
            });
      };
      renderItem({ item }) {
            return (
                  <View style={styles.row}>
                        <View style={styles.rowText}>
                              <Text>The Taj Mahal was commissioned by Shah Jahan in 1631,
                                     to be built in the memory of his wife Mumtaz Mahal.</Text>
                              <View style={{ top: 10, flexDirection: 'row' }}>
                                    <Text style={{ right: 10, fontSize: 12 }}>10 minutes ago</Text>
                                    <View style={{ marginLeft: 200 }}>
                                          <Icon
                                                name='eye'
                                                size={20}
                                                color='orange'
                                                style={styles.iconSize}
                                          />
                                    </View>
                              </View>

                        </View>
                  </View >
            );
      }
      render() {
            return (
                  <View style={styles.container}>
                        <Header title={CHANNEL} />
                        <ReversedFlatList
                              data={this.state.messages}
                              renderItem={this.renderItem}
                        />

                        <View style={styles.footer}>

                              <Icon
                                    name='plus'
                                    size={30}
                                    color='orange'
                                    style={styles.iconSize}
                              />
                              <Icon
                                    name='lock'
                                    size={30}
                                    color='#AED6F1'
                                    style={styles.iconSize}
                              />
                              <Icon
                                    name='camera'
                                    size={30}
                                    color='#F4D03F'
                                    style={styles.iconSize}
                              />
                              <TextInput
                                    value={this.state.typing}
                                    style={styles.input}
                                    underlineColorAndroid="transparent"
                                    fontSize={12}
                                    placeholder="Type something here..."
                                    onChangeText={text => this.setState({ typing: text })}
                              />
                              <View style={{ position: 'absolute', right: 20, height: 32, width: 32, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', borderRadius: 100 }}>
                                    <TouchableOpacity onPress={this.sendMessage}>
                                          <Icon
                                                name='microphone'
                                                size={16}
                                                position={'absolute'}
                                                color='white'
                                                style={{ margin: 2 }}
                                          />
                                    </TouchableOpacity>
                              </View>
                        </View>

                  </View>
            );
      }
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
      },
      row: {
            width: Dimensions.get('window').width,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            right: 0,
            borderWidth: .1,
            height: 95,
      },
      avatar: {
            borderRadius: 20,
            width: 40,
            height: 40,
            marginRight: 10,
      },
      rowText: {
            padding: 20,
            alignItems: 'center'
      },
      message: {
            fontSize: 18,
      },
      sender: {
            fontWeight: 'bold',
            paddingRight: 10,
      },
      footer: {
            flexDirection: 'row',
            height: 55,
            right: 0,
            width: Dimensions.get('window').width,
            backgroundColor: 'white',
            alignItems: 'center',
            borderTopWidth: .2
      },
      input: {
            paddingHorizontal: 20,
            backgroundColor: 'white',
            borderRadius: 50,
            marginLeft: 18,
            borderWidth: .8,
            right: 0,
            height: 38,
            width: 190,
            fontSize: 18,
      },
      send: {
            color: 'lightseagreen',
            fontWeight: 'bold',
            padding: 10,
      },
      iconSize: {
            marginLeft: 15

      }
});