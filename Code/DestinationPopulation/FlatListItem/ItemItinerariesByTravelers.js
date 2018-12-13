import React, { Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

export default class ItemItinerariesByTravelers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground borderRadius={5} source={this.props.image} style={styles.img}>
                    <View style={styles.viewLocationBlack}>
                    </View>
                    <View style={styles.viewLocation}>
                        <Text numberOfLines={1} style={styles.txtLocation}> {this.props.location} | {this.props.sumday} ngày </Text>
                    </View>

                </ImageBackground>
                <View style={styles.viewProfile}>
                    <Image source={this.props.imageprofile}
                    style={styles.imgProfile}
                    >
                    </Image>
                    <View style={{marginLeft:5}}>
                        <Text numberOfLines={1} style={styles.txtName}>{this.props.name}</Text>
                        <Text numberOfLines={1} style={styles.txtTime}>{this.props.time} ago</Text>
                    </View>
                </View>
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
        height: 169,

    },
    img: {
        width: '100%',
        height: 114
    },
    imgProfile:{
        width:30,
        height:30,
        borderRadius:15,
        marginLeft:5
    },
    txtLocation: {
        marginLeft: 6,
        fontSize: 12,
        color: 'white'
    },
    txtName:{
        fontSize:14,
        color:'black'
    },
    txtTime:{
        color:'#9F9F9F',
        fontSize:10
    },
    viewLocation: {
        position: 'absolute',
        bottom: 0,
        height: 22.5,
        backgroundColor: 'transtparent',
        borderRadius:5
    },
    viewLocationBlack: {
        opacity: 0.5,
        marginTop: 'auto',
        width: '100%',
        height: 22.5,
        backgroundColor: '#000000',
    },
    viewProfile:{

        flexDirection: 'row',
        width:'100%',
        height:55,
        alignItems: 'center',
    },
    viewName:{

    }
}