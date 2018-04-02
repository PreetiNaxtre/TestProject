import React, { Component } from 'react';
import {
      AppRegistry,
      StyleSheet,
      Text,
      View,
      ListView,
      TouchableHighlight
} from 'react-native';

class ListViewDemo extends Component {

      constructor(props) {
            super(props);

            var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            this.state = {
                  data: this._genRow(),
                  dataSource: ds,
            }
      }

      componentDidMount() {
            this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(this.state.data)
            });
      }

      _genRow() {
            var datas = [];
            for (var i = 0; i < 5; i++) {
                  datas.push({
                        row: i,
                        isSelect: false,
                  });
            }
            console.log('datas ' + JSON.stringify(datas));
            return datas;
      }

      render() {
            return (
                  <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}
                        renderHeader={() => <View style={{ height: 10, backgroundColor: '#f5f5f5' }} />}
                        onEndReached={() => console.log('')}
                        renderSeparator={(sectionID, rowID) =>
                              <View
                                    style={styles.style_separator}
                                    key={`${sectionID} - ${rowID}`}
                              />}
                  />
            );
      }

      _renderRow(rowData: string, sectionID: number, rowID: number) {
            console.log('render row ...');
            return (
                  <TouchableHighlight onPress={this._onPressRow.bind(this.rowID, rowData)}>
                        <View style={styles.style_row_view}>
                              <Text style={styles.style_text}>{rowData.row}</Text>
                              <Text style={styles.style_text}>{rowData.isSelect ? 'true' : 'false'}                   </Text>
                        </View>
                  </TouchableHighlight>
            );
      }

      _onPressRow(rowID, rowData) {

            rowData.isSelect = !rowData.isSelect;
            var dataClone = this.state.data;
            dataClone[rowID] = rowData;
            this.setState({
                  data: dataClone
            });
            console.log(this.state.data);
      }
}

const styles = StyleSheet.create({
      style_row_view: {
            flex: 1,
            flexDirection: 'row',
            height: 57,
            backgroundColor: '#FFFFFF',
      },
      style_text: {
            flex: 1,
            marginLeft: 12,
            fontSize: 16,
            color: '#333333',
            alignSelf: 'center',
      },

});

AppRegistry.registerComponent('ListViewDemo', () => ListViewDemo);