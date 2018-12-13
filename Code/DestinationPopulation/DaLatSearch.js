import React, { Component } from 'react';
import { View, Image, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';

export default class DaLatSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    _onpressRestaurant() {
        this.props.navigation.navigate('DaLatRestaurants_');
    }
    _onpressHotels() {
        this.props.navigation.navigate('DaLatHotels_', { titleHotel: "Hotels" })

    }
    _onpressTripPlan() {
        this.props.navigation.navigate('TripPlanDaLat_')
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../Resource/DataImages/imgLogo90.png')}
                    style={styles.imgLogo}
                >
                    <View style={{ marginTop: 38, flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.btnBack}>
                            <Image style={styles.imgBack}
                                source={require('../../Resource/DataImages/imgBack.png')}
                            />
                        </TouchableOpacity>
                        <View style={styles.viewSearch}>
                            <TextInput style={styles.inputSearch}
                                placeholder="What do you search in Da Lat"
                            />
                            <TouchableOpacity style={styles.btnSearch}>
                                <Image source={require('../../Resource/DataImages/imgSearchColor.png')}
                                    style={styles.imgSearch}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                {/* 5 button options */}
                <View elevation={5} style={styles.optionView}>
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => this._onpressTripPlan()}
                        >
                            <Image
                                style={styles.optionImage}
                                source={require('../../Resource/Home/logo/TripPlan.png')}
                                resizeMode='stretch'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity

                            onPress={() => this._onpressHotels()}
                        >
                            <Image
                                style={styles.optionImage}
                                source={require('../../Resource/Home/logo/Hotel.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity

                        >
                            <Image
                                style={styles.optionImage}
                                source={require('../../Resource/Home/logo/Flights.png')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            onPress={() => this._onpressRestaurant()}
                        >
                            <Image
                                style={styles.optionImage}
                                source={require('../../Resource/Home/logo/Restaurants.png')} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity

                        >
                            <Image
                                style={styles.optionImage}
                                source={require('../../Resource/Home/logo/Tours.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = {
    btnBack: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 46
    },
    btnSearch: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 41,
        height: '100%'
    },
    container: {
        flex: 1,
        width: '100%'
    },
    inputSearch: {
        borderRadius: 5,
        width: '85%',
        height: '100%'
    },
    imgSearch: {
        width: 17,
        height: 17
    },
    imgLogo: {
        width: '100%',
        height: 90
    },
    imgBack: {
        width: 24,
        height: 10,
    },
    viewSearch: {
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 41,
        width: '76%'
    },
    optionView: {
        marginHorizontal: '5%',
        width:'90%',
        marginTop: 19,
        flex: 1,
        flexDirection: 'row'
    },
    optionImage: {
        borderRadius: 5,
        width: '95%',
        height: 65
    },

}
