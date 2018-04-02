import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity, StatusBar, BackAndroid, Button, StyleSheet, Image } from 'react-native'
import Toast from 'react-native-simple-toast';
import { NavigationActions } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Subscribe/Create';
export default class Subscribers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows([
        {
          firstName: "Vikas",
          lastName: "Saran",

        },
        {
          firstName: "Parkash",
          lastName: "Saran",

        },
        {
          firstName: "Sumit",
          lastName: "Mahesvari",

        },
        {
          firstName: "Jai",
          lastName: "Sawant"
        },
        {
          firstName: "Jitu",
        },
        {
          firstName: "Ravi",
        },
        {
          firstName: "Kamal",
        },
        {
          firstName: "Aakash",
        },
        {
          firstName: "Mukesh",
        }

      ]),
      color: '#007AFF', name: 'Subscribe', c: 'white', user_id: 1, follower_id: 1
    }
  }
  subscribe() {

    fetch(REQUEST_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'user_id': this.state.user_id,
        'follower_id': this.state.follower_id,
      })
    }).then((response) => response.json())
      .then((responseData) => {
        //alert(JSON.stringify(responseData.response));
        if (responseData.code == 0) {
          Toast.show(responseData.response);
        } else {
          Toast.show(responseData.response);
          // alert(JSON.stringify(responseData.response));
          this.setState({
            color: 'white',
            name: 'Subscribed',
            c: '#007AFF',

          });
        }

      }).catch((error) => {
        console.log("error : " + error); // error
      });
  }
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._backAndroid);
  }

  componentDidMount() {
  }
  componentWillUnmount() {
    BackAndroid.exitApp();
  }

  _backAndroid = () => {
    if (this.props.navigation.state.routeName === "Subscribers") {
      return true;
    } else {
      return true;
    }
  }
  _renderRow(rowData) {

    return (
      <View style={styles.mainContainer}>
        <View style={styles.first}>
          <Image source={require('../../images/tom.jpg')} style={styles.imageStyle} onPress={() => this.props.navigation.navigate('RouteView')} />

          <View style={{ bottom: 20, right: 50, position: 'absolute' }}>
            <TouchableOpacity style={{
              backgroundColor: this.state.color,
              width: 130,
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              borderRadius: 2
            }} onPress={() => this.subscribe()}>
              <Text style={{
                color: this.state.c, marginLeft: 10,
                fontSize: 17,
              }} >{this.state.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.second}>
          <Image source={require('../../images/tomc.jpg')} style={styles.imageStyle} />
          {/* <View style={{ flexDirection: 'row', }}>
            <Text onPress={() => this.props.navigation.navigate('RouteView')} style={{ fontWeight: 'bold', marginTop: 5 }}>{rowData.firstName}</Text>
            <Text onPress={() => this.props.navigation.navigate('RouteView')} style={{ fontWeight: 'bold', marginTop: 5, marginHorizontal: 5 }}>{rowData.lastName}</Text>
          </View> */}
          <View style={{ bottom: 20, left: 50, position: 'absolute' }}>
            <TouchableOpacity style={{
              backgroundColor: this.state.color,
              width: 130,
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
              borderRadius: 2
            }} onPress={() => this.subscribe()}>
              <Text style={{
                color: this.state.c, marginLeft: 10,
                fontSize: 17,
              }}  >{this.state.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View>
        <View>
          <StatusBar hidden={false} />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Fifth')} style={{ backgroundColor: 'green', alignItems: 'center', position: 'absolute', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 30, width: 260, height: 50, bottom: 15, alignSelf: 'center' }}  >
            <Text style={{ fontSize: 20, justifyContent: 'center', color: 'white' }}  >Continue</Text>
            <SimpleLineIcons
              name='arrow-right'
              size={14}
              color='white'
              style={{ left: 50 }}
            />
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 175,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 168.5,
    height: 168.5,
    borderRadius: 100,
  },
  first: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  second: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 40
  },
  btnStyle: {

  }
})
