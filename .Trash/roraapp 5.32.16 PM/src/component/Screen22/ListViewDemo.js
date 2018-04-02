import React from 'react';
import { View, StyleSheet, ListView, Image, StatusBar, Text, TouchableHighlight } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
var REQUEST_URL = 'http://139.59.61.15/Roraa/index.php/Service/Users/Top200';
class ListViewDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([
         {
                              text: 'Virendra',
                              last: 'Saran',
                              image: require('../../images/nature3.jpg'),
                              

                        }
                        ,
                        {
                              text: 'Vikas',
                              last: 'Sawant',
                              image: require('../../images/nature4.jpg'),
                             
                        },

      ]),
    }
  }
  goDeatilPage(rowData) {
   // alert('k')
    this.props.navigation.navigate('ChatDemo');

  }
  _renderRow(rowData) {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.firstPart}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

            <Image source={require('../../images/fillStar.png')} style={styles.iconStyle} />

            <View>
            </View>
            <Text style={styles.textFormat}>9.6</Text>
            <Text style={{ fontSize: 10 }}>/10</Text>
          </View>

        </View>
        <View style={styles.secondPart}>
          <View>
            <Image source={require('../../images/star.png')} style={styles.iconStyle} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 10, color: 'black' }}>Rate</Text>
            <Text style={{ fontSize: 10, color: 'black' }}>Him</Text>
          </View>

        </View>

        <View style={styles.thirdPart}>

          <Image source={require('../../images/celebrity.jpg')} style={styles.imageStyle} />

          <View style={{ flexDirection: 'row', }}>
            <Text style={{ color: 'black' }} >{rowData.text}</Text>
          </View>
        </View>

      </View>
    )
  }
  // componentDidMount() {
  //   return fetch(REQUEST_URL)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       //alert(JSON.stringify(responseJson.code));
  //       // let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  //       this.setState({

  //         dataSource: ds.cloneWithRows(responseJson.response),
  //       }, function () {
  //         // do something with new state
  //       });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  render() {
    return (
      <View >
        <StatusBar hidden={false} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: .5,
    height: 150,

  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 99,
  },
  firstPart: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginHorizontal: 5,


  },
  secondPart: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

    marginHorizontal: 10,


  },
  thirdPart: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  textFormat: {
    fontSize: 20,
    color: 'black'

  },
  nameStyle: {
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 3,
    marginTop: 4,

  }
})



export default ListViewDemo;