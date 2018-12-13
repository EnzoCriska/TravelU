import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

export default class ItemItineraries extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground borderRadius={5} source={this.props.image} style={styles.img}>
                    <View style={styles.viewNameBlack}>
                    </View>
                    <View style={styles.viewName}>
                        <Text numberOfLines={1} style={styles.txtLocation}> {this.props.location} | {this.props.sumday} ngày </Text>
                    </View>
                    

                </ImageBackground>
            </View>
        );
    }
}
const styles = {
    container: {
        marginHorizontal: '1%',
        marginTop: 5.6,
        alignItems: 'center',
        width: '48%',
        height: 114,

    },
    img: {

        width: '100%',
        height: '100%'
    },
    txtLocation: {
        marginLeft: 6,
        fontSize: 12,
        color: 'white',
        
    },
    viewName: {
        position: 'absolute',
        bottom: 0,
        height: 22.5,
        backgroundColor: 'transtparent',
        borderRadius:5
    },
    viewNameBlack: {
        opacity: 0.5,
        marginTop: 'auto',
        width: '100%',
        height: 22.5,
        backgroundColor: '#000000',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    }
}