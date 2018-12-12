import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-elements'
export default class ItemLocations extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ width: 150 }}>
                <Image source={this.props.image} style={styles.image} />
                <Text style={styles.textBlack}>{this.props.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Rating startingValue={this.props.ratting}
                        type='star'
                        imageSize='12'
                    />
                    <Text style={styles.textGrey}> ( {this.props.vote} đánh giá )</Text>
                </View>
            </View>
        );
    }
}
const styles = {
    image: {
        width: 150,
        height: 102,
    },
    textBlack: {
        marginTop: 5,
        fontSize: 13,
        color: 'black'
    },
    textGrey: {
        fontSize: 10,
        color: '#A5A4A4'
    }
}
