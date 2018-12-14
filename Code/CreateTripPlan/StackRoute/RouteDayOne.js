import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    TouchableHighlight
} from 'react-native';
import { Rating } from 'react-native-elements'

export default class RouteDayOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                key: 'Hotel', day: '23/10/2018', sumKm: 9.8, sumPlace: 3, Hotels:
                {
                    image: require('../../../Resource/StackRoute/RouteDay1/the_dune_villa.png'),
                    name: 'The Dune Villa',
                    clock: '00:32',
                    ratting: 4,
                    vote: 190,
                    hotelstar: 5,
                    pernight: "10000000",
                },
                places: [
                    {
                        image: require('../../../Resource/StackRoute/RouteDay1/vong_nguyet_lau.png'),
                        name: 'Vọng Nguyệt Lâu',
                        clock: '00:32',
                        ratting: 4,
                        vote: 190,
                        time: '26',
                        long: '16.5'
                    },
                    {
                        image: require('../../../Resource/StackRoute/RouteDay1/ga_dalat.png'),
                        name: 'Ga Đà lạt',
                        clock: '00:32',
                        ratting: 4,
                        vote: 190,
                        time: '26',
                        long: '16.5'
                    }]
            }
        };
    }

    formatPrice(number) {
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
    render() {
        return (
            <View style={styles.container}>
                {/* View Logo */}
                <View style={styles.viewTitle}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.textBlack}> Ngày 1</Text>
                        <Text style={{ fontSize: 14, color: '#000', opacity: .5 }}>{this.state.data.day}</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.textBlack}> Số Km</Text>
                        <Text style={{ fontSize: 14, color: '#000', opacity: .5 }}>{this.state.data.sumKm}</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={styles.textBlack}> Số địa điểm</Text>
                        <Text style={{ fontSize: 14, color: '#000', opacity: .5 }}>{this.state.data.sumPlace} places</Text>
                    </View>
                </View>
                {/* End View Logo */}
                {/* View Hotel, Location First */}
                <View style={{ width: '100%' }}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: '10%', alignItems: 'center' }}>
                            <Image
                                source={require('../../../Resource/StackRoute/RouteDay1/point.png')}
                                style={[styles.iconPoint, { marginTop: 30 }]} />

                            <Image
                                source={require('../../../Resource/StackRoute/RouteDay1/line.png')}
                                style={styles.iconLine} />
                        </View>

                        <View style={{ width: '85%', marginLeft: 'auto', marginRight: '5%' }}>
                            <View style={styles.viewItem}>
                                <View style={{ flexDirection: 'row', width: '100%' }}>
                                    <Image
                                        source={this.state.data.Hotels.image}
                                        style={styles.imageInView} />

                                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                                        <Text style={{ color: '#000', fontSize: 14 }}>
                                            {this.state.data.Hotels.name}
                                        </Text>

                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <Rating
                                                type='star'
                                                imageSize={12}
                                                startingValue={this.state.data.Hotels.ratting}
                                            />

                                            <Text style={{ fontSize: 12 }}>  ( {this.state.data.Hotels.vote} đánh giá )</Text>
                                        </View>

                                        <View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={{ fontSize: 12 }}>Hotel star {this.state.data.Hotels.hotelstar}</Text>
                                                <Image
                                                    source={require('../../../Resource/StackRoute/RouteDay1/star.png')}
                                                    style={styles.iconStar} />
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 12 }}>Per night</Text>
                                            <Text style={{ color: '#FF5526', fontSize: 12 }} >  {this.formatPrice(this.state.data.Hotels.pernight)}</Text>
                                            <Text style={{ color: '#FF5526', fontSize: 12, marginTop: -4 }}> đ</Text>
                                        </View>
                                    </View>

                                    <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                        <Image
                                            source={require('../../../Resource/StackRoute/RouteDay1/trash.png')}
                                            style={styles.iconTrash} />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ width: '100%', flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <ImageBackground
                                            source={require('../../../Resource/StackRoute/RouteDay1/button_clock.png')}
                                            style={styles.buttonInItem}>
                                            <Text style={styles.textInButton}>
                                                {this.state.data.Hotels.clock}
                                            </Text>
                                        </ImageBackground>
                                    </TouchableOpacity>

                                    <TouchableOpacity>
                                        <ImageBackground
                                            source={require('../../../Resource/StackRoute/RouteDay1/button_note.png')}
                                            style={[styles.buttonInItem, { marginLeft: 10 }]}>
                                            <Text style={styles.textInButton}>Ghi chú</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => {
                                            console.log(this.props.navigation.dangerouslyGetParent())
                                            this.props.navigation.dangerouslyGetParent().navigate('MyTripPlans_')
                                        }}>
                                        <ImageBackground
                                            source={require('../../../Resource/StackRoute/RouteDay1/button_near.png')}
                                            style={[styles.buttonInItem, { marginLeft: 10 }]}>
                                            <Text style={styles.textInButton}>Gần đây</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                        <Image
                                            source={require('../../../Resource/StackRoute/RouteDay1/button_book.png')}
                                            style={[styles.buttonInItem, { borderRadius: 3 }]} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* End Location First */}
                    {/* Flatlist Description Route */}
                    <FlatList
                        style={{ width: '100%' }}
                        data={this.state.data.places}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', height: 140 }}>
                                <View style={{ alignItems: 'center', height: 140, justifyContent: 'center', width: '10%', marginTop: -50 }}>
                                    <Image
                                        style={styles.iconLine}
                                        source={require('../../../Resource/StackRoute/RouteDay1/line.png')} />

                                    <Image
                                        style={styles.iconOto}
                                        source={require('../../../Resource/StackRoute/RouteDay1/oto.png')} />

                                    <Image
                                        style={styles.iconLineShort}
                                        source={require('../../../Resource/StackRoute/RouteDay1/lineshort.png')} />

                                    <Image
                                        source={require('../../../Resource/StackRoute/RouteDay1/point.png')}
                                        style={[styles.iconPoint]} />
                                    {/* <Image style={styles.iconRoute} source={require('../../../Resource/StackRoute/RouteDay1/route.png')}></Image> */}
                                </View>

                                <View style={{ width: '85%', marginRight: '5%', height: 120, marginTop: 20, marginLeft: 'auto' }}>
                                    <Text style={styles.textMinAndLong}>
                                        {item.long} km | {item.time} mins
                                    </Text>

                                    <View style={{ flexDirection: 'row', width: '100%' }}>
                                        <Image
                                            source={item.image}
                                            style={styles.imageInView} />

                                        <View style={{ marginLeft: 10, marginTop: 5 }}>
                                            <Text style={{ color: 'black', fontSize: 15 }}>
                                                {item.name}
                                            </Text>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                                <Rating
                                                    type='star'
                                                    imageSize={12}
                                                    startingValue={item.ratting}
                                                />

                                                <Text style={{ fontSize: 12 }}>  ( {item.vote} đánh giá )</Text>
                                            </View>
                                        </View>

                                        <TouchableOpacity style={{ marginLeft: 'auto' }}>
                                            <Image
                                                source={require('../../../Resource/StackRoute/RouteDay1/trash.png')}
                                                style={styles.iconTrash} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ width: '100%', flexDirection: 'row' }}>
                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../../Resource/StackRoute/RouteDay1/button_clock.png')}
                                                style={styles.buttonInItem}>
                                                <Text style={styles.textInButton}>
                                                    {this.state.data.Hotels.clock}
                                                </Text>
                                            </ImageBackground>
                                        </TouchableOpacity>

                                        <TouchableOpacity>
                                            <ImageBackground
                                                source={require('../../../Resource/StackRoute/RouteDay1/button_note.png')}
                                                style={[styles.buttonInItem, { marginLeft: 10 }]}>
                                                <Text style={styles.textInButton}>Ghi chú</Text>
                                            </ImageBackground>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => { this.props.navigation.navigate('StackNearly_') }}
                                        >
                                            <ImageBackground
                                                source={require('../../../Resource/StackRoute/RouteDay1/button_near.png')}
                                                style={[styles.buttonInItem, { marginLeft: 10 }]}>
                                                <Text style={styles.textInButton}>Gần đây</Text>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />{/* End Flatlist */}
                </View>
            </View>
            // </View >
        );
    }
}
const styles = {
    buttonInItem: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width: 60,
        height: 20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    iconLine: {

        width: 1,
        height: 63
    },
    iconLineShort: {
        marginTop: 2.5,
        width: 1,
        height: 42
    },
    iconOto: {
        marginTop: 2.5,
        width: 18,
        height: 16
    },
    iconRoute: {
        width: 24,
        height: 131
    },
    iconTrash: {
        marginTop: 10,
        width: 14,
        height: 16
    },
    iconPoint: {
        width: 17,
        height: 17
    },
    iconStar: {
        height: 7,
        width: 7
    },
    iconShort: {
        height: 42,
        width: 1,
    },
    imageInView: {
        marginTop: 10,
        width: 60,
        height: 60,
    },
    viewDescriptionRoute: {

    },
    textBlack: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
    },
    textInButton: {
        color: '#000',
        fontSize: 10,
        marginLeft: 12
    },
    textMinAndLong: {
        fontSize: 13,
        color: 'black'
    },
    viewTitle: {
        flexDirection: 'row',
        width: '90%',
        height: 60,
        borderBottomColor: '#707070',
        borderBottomWidth: 0.2,
    },
    viewItem: {
        width: '100%',
        marginLeft: 'auto',
        height: 100
        // marginRight: '6%',
    },
    addPlaceButton: {
        width: '100%',
        height: 55,
    },
}
