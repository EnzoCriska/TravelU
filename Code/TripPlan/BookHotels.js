import React, { Component } from 'react';

import {
    Alert,
    View,
    ImageBackground,
    Switch,
    TouchableHighlight,
    Text,
    Image,
    FlatList

} from 'react-native'
import { Rating } from 'react-native-elements'

export default class BookHotels extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ source: require('../../Resource/TripPlan/BookHotels/DataImage/image1.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image2.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: false },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image3.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image4.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image5.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image6.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image7.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true },
            { source: require('../../Resource/TripPlan/BookHotels/DataImage/image8.png'), name: 'The Dune Villa', rating: 4, star: 5, vote: 190, pernight: 10000000, status: true }]

        }
    }
    _backgroundTouchable(status) {
        return status === true ? styles.touchableTrue : styles.touchableFalse
    }
    _textTouchable(status) {

        if (status == true) {
            return 'Đã thêm'
        } else {
            return 'Thêm'
        }
    }
    render() {
        return (
            <View>
                <View style={styles.logo}>
                    <ImageBackground source={require('../../Resource/TripPlan/CreateTripPlan/logo.png')}
                        style={styles.logo}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <Image source={require('../../Resource/TripPlan/BookHotels/back.png')}
                                    style={styles.iconBack} />
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
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={({ item }) =>
                        (<View style={styles.viewItem}>
                            <Image source={item.source} style={styles.imageItems}></Image>
                            <View style={styles.itemDescription}>
                                <Text style={styles.textBlack}>{item.name}</Text>
                                
                                    <Rating
                                        ratingColor='#FF5526'
                                        type='star'
                                        imageSize={12}
                                        startingValue={item.rating}
                                    ></Rating>
                                    <Text> ({item.vote} đánh giá)</Text>
                                

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

                        </View>)

                    }
                />

                <TouchableHighlight style={{ width: '100%', marginTop: 'auto' }}>
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
        width: 24,
        height: 9,
        marginLeft: 10
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