import React, { Component } from 'react';

import {
    Alert,
    View,
    ImageBackground,
    Switch,
    TouchableHighlight,
    Text,
    Image,
    FlatList,
    TouchableOpacity

} from 'react-native'
import { Rating } from 'react-native-elements'

export default class BookHotels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ source: require('../../Resource/TripPlan/BookHotels/DataImage/image1.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image2.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: false },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image3.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: false },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image4.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: false },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image5.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: false },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image6.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: false },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image7.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image8.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: "10000000", status: true }]

        }
    }
    _onpressNextSteep() {
        this.props.navigation.navigate('Place_')
    }
    _backgroundTouchable(status) {
        return status === true ? styles.touchableTrue : styles.touchableFalse
    }
    formatNumberWithDot(number) {

        let string = "";
        k = number.length % 3;

        for (let i = number.length - 1; i >= 0; i--) {
            string += number[i];
            if (i % 3 == k) {
                string += ".";
            }
        }


        return string.split('').reverse().join('');
    }
    _textTouchable(status) {

        if (status == true) {
            return 'Đã thêm'
        } else {
            return 'Thêm'
        }
    }
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View>
                <View style={styles.logo}>
                    <ImageBackground source={require('../../Resource/TripPlan/CreateTripPlan/logo.png')}
                        style={styles.logo}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableHighlight onPress={() => goBack()} style={styles.touchableBack}>
                                    <Image source={require('../../Resource/TripPlan/BookHotels/back.png')}
                                        style={styles.iconBack} />
                                </TouchableHighlight>

                                <Text style={styles.textLogo}>Create Trip Plan</Text>
                                <Image source={require('../../Resource/TripPlan/BookHotels/search.png')}
                                    style={styles.iconSearch}
                                ></Image>
                                <Image source={require('../../Resource/TripPlan/BookHotels/map.png')}
                                    style={styles.iconMap}
                                ></Image>
                            </View>
                        </View>
                    </ImageBackground>
                </View>


                <TouchableHighlight >
                    <View style={styles.viewSortBy}>
                        <Text style={{ marginLeft: 20 }}>Sort by: Popular</Text>
                        <Image source={require('../../Resource/TripPlan/BookHotels/filter.png')}
                            style={styles.iconFilter}></Image>
                        <Text style={{ marginLeft: 5 }}>Filter</Text>
                    </View>

                </TouchableHighlight>

                <FlatList

                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({ item }) =>
                        (
                            <View style={styles.viewItem}>
                                <Image source={item.source} style={styles.imageItems}></Image>
                                <View style={styles.itemDescription}>
                                    <Text style={styles.textBlack}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Rating
                                            ratingColor='#FF5526'
                                            type='star'
                                            imageSize={12}
                                            startingValue={item.rating}
                                        ></Rating>

                                        <Text> ({item.vote} đánh giá)</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>Home star  {item.star}</Text>
                                        <Image style={{ width: 7, height: 7 }} source={require('../../Resource/TripPlan/BookHotels/star.png')}></Image>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text>Per night </Text>
                                        <Text style={styles.textPerNight}>{this.formatNumberWithDot(item.pernight)}</Text>
                                    </View>



                                </View>
                                <View style={{ marginLeft: 40, alignItems: 'center', justifyContent: 'center' }}>
                                    <View>
                                        <TouchableHighlight style={this._backgroundTouchable(item.status)} >
                                            <Text>{this._textTouchable(item.status)}</Text>
                                        </TouchableHighlight>
                                        <TouchableHighlight style={styles.touchableBook} >
                                            <Text>Book</Text>
                                        </TouchableHighlight>
                                    </View>

                                </View>

                            </View>
                       )

                    }
                />

                <TouchableHighlight style={{ width: '100%', marginTop: 'auto' }} onPress={() => this._onpressNextSteep()}>
                    <View style={{ flexDirection: 'row' }}>

                        <Image source={require('../../Resource/TripPlan/BookHotels/nextsteep.png')}
                            style={{ width: '100%', height: 55 }} />

                    </View>

                </TouchableHighlight>





            </View>
        );
    }
}
const styles = {
    iconBack: {
        width: 50,
        height: '100%',
    },
    iconSearch: {
        width: 25,
        height: 25,
        marginLeft: 70,
        marginLeft: 'auto',


    },
    iconMap: {
        width: 20,
        height: 20,
        marginLeft: 25,
        marginRight: 20
    },
    iconFilter: {
        marginLeft: 200,
        width: 18,
        height: 15
    },
    imageItems: {
        width: 100,
        height: 100,
        marginLeft: 20
    },
    itemDescription: {
        marginLeft: 10,
        width: 125
    },
    logo: {
        width: '100%',
        height: 90,
    },
    parentFilter: {
        marginLeft: 'auto',
        marginRight: 20,
        width: 100
    },
    textPerNight: {
        color: '#FF5526',
        marginLeft: 10
    },
    touchableBack: {
        justifyContent: 'center',
        width: 50,
        height: '100%',

    },
    touchableTrue: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F5F9',
        width: 70,
        height: 35,
        borderRadius: 5,
    },
    touchableFalse: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#59BAF8',
        width: 70,
        height: 35,
        borderRadius: 5,
    },
    touchableBook: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: '#FB53A1',
        width: 70,
        height: 35,
        borderRadius: 5,
    },
    textLogo: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    textBlack: {
        color: 'black',
        fontSize: 19
    },
    viewSortBy: {
        alignItems: 'center',
        width: '200%',
        height: 40,
        flexDirection: 'row'
    },
    viewItem: {
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 5
    }
}