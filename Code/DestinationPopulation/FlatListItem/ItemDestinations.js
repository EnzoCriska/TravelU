import React, { Component } from 'react'
import {
    View,
    ImageBackground,
    Text,
    StyleSheet
} from "react-native";
import { Rating } from 'react-native-elements'
import { Fonts } from '../../Fonts/Fonts';

export default class ItemTrendLocation extends Component {
    constructor(props) {
        super(props)
        //    this.item = this.props.item
    }
    ratingCompleted() {

    }

    render() {
        console.log(this.props.image)
        return (
            <View style={[styleItem.mainView, styleItem.childView]}>
                <ImageBackground
                    source={{ uri: this.props.image }}
                    style={styleItem.imageBg}
                    imageStyle={{ borderRadius: 10 }}
                >
                    <View style={styleItem.childView}>
                        <Text style={styleItem.txtTitle}>
                            {this.props.title}
                        </Text>

                        <Text style={styleItem.txtDescription}>
                            {this.props.description}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styleItem = StyleSheet.create({
    mainView: {
        margin: 3,
        height: 200,
        width: '98%',
        marginBottom: 6
    },
    imageBg: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    childView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTitle: {
        fontSize: 16,
        color: '#FFF'
    },
    txtDescription: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: Fonts.Nabila,
        marginLeft: '5%',
    }
})