import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-elements'
export default class ItemRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.img}></Image>
                {/* View Description inclue sum rating ,vote, name*/}
                <View style={styles.viewDescription}>
                    <Text style={styles.txtBlack}>{this.props.name}</Text>

                    <View style={styles.viewVote}>
                    <Rating
                        startingValue={this.props.rating}
                        imageSize={12}
                        type='star'
                    />
                    <Text style={styles.txtVote}> ( {this.props.vote} đánh giá )</Text>
                    </View>

                </View>

                <Text  style={styles.txtLong}>{this.props.long} km</Text>
            </View>
        );
    }
}
const styles = {
    container: {
        marginTop:5,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
    },
    img: {
        marginLeft: '5%',
        marginTop: 13,
        marginBottom: 14,
        width: '26%',
        height: 100,
    },
    txtVote: {
        color: '#A5A4A4',
        fontSize: 10
    },
    txtLong: {
        fontSize: 12,
        color: '#313131',
        marginLeft: 'auto',
        marginTop: 18,
        marginRight: '5%',
    },
    txtBlack: {
        marginTop:16,
        color: 'black',
        fontSize: 14
    },
    viewDescription: {
        width: '34%',
        marginLeft: '2.4%'
    },
    viewVote: {
        flexDirection: 'row',
        alignItems: 'center',
    }

}
