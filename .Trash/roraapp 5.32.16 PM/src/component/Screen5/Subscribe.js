import React, { Component } from 'react'
import { View, Text, ListView, TouchableOpacity, BackAndroid, StatusBar, Button, StyleSheet, Image } from 'react-native'
import Toast from 'react-native-simple-toast';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { NavigationActions } from 'react-navigation';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Subscribe/Create';
export default class Subscribe extends Component {
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
      color: '#007AFF', name: 'Subscribe'
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
        'user_id': 5,
        'follower_id': 6
      })
    }).then((response) => response.json())
      .then((responseData) => {
        //alert(JSON.stringify(responseData.response));
        if (responseData.code == 0) {
          Toast.show(responseData.response);
        } else {
          Toast.show(responseData.response);
          //alert(JSON.stringify(responseData.response));
          this.setState({
            color: '#FDCC34',
            name: 'Subscribed'

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
    if (this.props.navigation.state.routeName === "Fifth") {
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

          <View style={{ bottom: 10, right: 25, position: 'absolute' }}>
            <TouchableOpacity style={{
              backgroundColor: this.state.color,
              width: 150,
              alignItems: 'center',
              justifyContent: 'center',
              height: 32,
              borderRadius: 5
            }} onPress={() => this.subscribe()}>
              <Text style={styles.text} >{this.state.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.second}>
          <Image source={require('../../images/tomc.jpg')} style={styles.imageStyle} />
          {/* <View style={{ flexDirection: 'row', }}>
            <Text onPress={() => this.props.navigation.navigate('RouteView')} style={{ fontWeight: 'bold', marginTop: 5 }}>{rowData.firstName}</Text>
            <Text onPress={() => this.props.navigation.navigate('RouteView')} style={{ fontWeight: 'bold', marginTop: 5, marginHorizontal: 5 }}>{rowData.lastName}</Text>
          </View> */}
          <View style={{ bottom: 10, left: 30, position: 'absolute' }}>
            <TouchableOpacity style={{
              backgroundColor: this.state.color,
              width: 145,
              alignItems: 'center',
              justifyContent: 'center',
              height: 32,
              borderRadius: 5
            }} onPress={() => this.subscribe()}>
              <Text style={styles.text}  >{this.state.name}</Text>
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
    height: 180,
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
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    marginTop: 50
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  btnStyle: {

  }
})
