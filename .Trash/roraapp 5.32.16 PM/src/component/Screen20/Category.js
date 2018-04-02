import React from 'react';
import { View, StyleSheet,Dimensions, ListView, Image, StatusBar, Text } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          menuName : "T O P  2 0 0"
        },
        {
          menuName : "T E C H N O L O G Y"
        },
        {
          menuName : "M O V I E S"
        },
        {
          menuName : "W O R L D"
        },
        {
          menuName : "T R A N D I N G"
        },{
          menuName : "R O O M S"
          }
      ]),
    }
  }

  _renderRow(rowData) {
    return (
      <View style={styles.mainContainer}>
         <Image source ={require('../../images/wonder.jpg')} style={styles.imageStyle} />    
           <Text style={styles.textStyle}>{rowData.menuName}</Text>
      </View>
    )
  }

  render() {
    return (
      <View>
        <StatusBar hidden={false} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
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
  textStyle : {
      fontWeight : 'bold',
      position : 'absolute',
      color : 'white',
      fontSize : 27,
      marginLeft :10,
      marginTop : 150,
     
      

  }
})



export default Category;