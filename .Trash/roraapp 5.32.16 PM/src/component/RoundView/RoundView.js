import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

export default class RoundView extends Component {
    render(){
        return(

            <ScrollView style={styles.scrollcontainer}>
                <View style={styles.container}>
                       <View style={styles.box}>    
                       <    Text>Sports</Text>
                        </View>
                        <View style={styles.box}>
                            <Text>Movies</Text>
                       </View>
                       <View style={styles.box}>
                           <Text>Technology</Text>
                        </View>
                        <View style={styles.box}>
                           <Text>Graphic Design</Text>
                        </View>
                        <View style={styles.box}>
                           <Text>Travel</Text>
                        </View>
                        <View style={styles.box}>
                           <Text>Typography</Text>
                        </View>
                         <View style={styles.box}>
                           <Text>Human </Text>
                        </View>
                        <View style={styles.box}>
                           <Text>Being Human</Text>
                       </View>
                    </View>

                </ScrollView>
        );
    }
}
const styles =StyleSheet.create({
    scrollcontainer : {
        flex : 1,
        backgroundColor : 'white'
    },
    container : {
        flex :1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        padding :2,
    },
    box : {
        margin : 2,
        width : Dimensions.get('window').width /2 -6,
        height : 200,
        justifyContent : 'center',
        backgroundColor : 'blue',
        alignItems : 'center',
        borderRadius :100,
    }
});