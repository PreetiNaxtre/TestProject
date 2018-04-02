import React from 'react';
import { View, StyleSheet, Dimensions, ListView, Image, StatusBar, Text, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          menuName: "T O P  2 0 0",
          menuImage: "../../images/technology.jpg"
        },
        {
          menuName: "M O V I E S",
          menuImage: "../../images/technology.jpg"
        },
        {
          menuName: "T E C H N O L O G Y",
          menuImage: "../../images/technology.jpg"
        },
        {
          menuName: "W O R L D",
          menuImage: "../../images/technology.jpg"
        },
        {
          menuName: "T R A N D I N G",
          menuImage: "../../images/technology.jpg"
        }, {
          menuName: "R O O M S",
          menuImage: "../../images/technology.jpg"
        }
      ]),
    }
  }




  _renderRow(rowData) {
    //const { navigate } = this.props.navigation; //onPress={() => navigate('Top200')}
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={() => this.goDeatilPage(rowData)} >
        <Image source={require("../../images/technology.jpg")} style={styles.imageStyle} />
        <Text style={styles.textStyle} >{rowData.menuName}</Text>
      </TouchableOpacity>
    )
  }
  goDeatilPage(rowData) {
    this.props.navigation.navigate('Top200');

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
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
    borderWidth: .5,
  },
  imageStyle: {
    width: Dimensions.get('window').width,
    height: 200,

  },
  textStyle: {
    fontWeight: 'bold',
    position: 'absolute',
    color: 'white',
    fontSize: 27,
    marginLeft: 10,
    marginTop: 150,
  }
})



export default Category;
