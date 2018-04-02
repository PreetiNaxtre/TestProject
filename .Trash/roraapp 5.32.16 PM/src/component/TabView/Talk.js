import React from 'react';
import { View, StyleSheet, Dimensions, ListView, CheckBox, Image, StatusBar, Text, TouchableOpacity } from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';
const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 != row2 })
class Talk extends React.Component {
    constructor(props) {
        super(props);
        this.onPressButton = this.onPressButton.bind(this);
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    firstName: "Vikas",
                    lastName: "Kumar"
                },
                {
                    firstName: "Ravi",
                    lastName: "sharma"
                },
                {
                    firstName: "Ghanshyam",
                    lastName: "swami"
                },
                {
                    firstName: "Vimal",
                    lastName: "kumar"
                },
                {
                    firstName: "Parkash",
                    lastName: "tholiya"
                },
                {
                    firstName: "Raju",
                    lastName: "khati"
                },
                {
                    firstName: "Ravi",
                    lastName: "sharma"
                },
                {
                    firstName: "Ghanshyam",
                    lastName: "swami"
                },
                {
                    firstName: "Vimal",
                    lastName: "kumar"
                },
            ]),
        }
    }
    _renderRow(rowData) {
        //  const { navigate } = this.props.navigation;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.firstPortion}>
                    <TouchableOpacity onPress={() => { this.onPressButton }}>
                        <Image source={require('../../images/wonder.jpg')} style={styles.imageStyle} />
                    </TouchableOpacity>
                </View>
                <View style={styles.secondPortion}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textStyle}>{rowData.firstName}</Text>
                        <Text style={styles.textStyle}>{rowData.lastName}</Text>
                    </View>
                    <Text style={{ fontSize: 12, marginLeft: 3 }}>you sent an image</Text>
                </View>
                <View style={styles.thirdPortion}>
                    <Text>Sun</Text>
                    <RoundCheckbox
                        backgroundColor={'green'}
                        size={15}
                        checked={true}
                    />
                </View>
            </View>
        )
    }

    render() {
        const { navigate } = this.props.navigation;
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

    onPressButton() {
        this.props.navigation.navigate('ChatDemo');
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        display: 'flex',
        width: Dimensions.get('window').width,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: .5,
        height: 80,
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 99,
    },
    firstPortion: {
        marginLeft: 12,
    },
    secondPortion: {
        width: 150,
        flexDirection: 'column',
        marginLeft: 25,
    },
    thirdPortion: {
        width: 100,
        height: 90,
        alignItems: 'center',
        marginLeft: 20,
        justifyContent: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black',
        marginHorizontal: 2,
    }
})
export default Talk;
