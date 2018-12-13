import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    TextInput,
    ScrollView,
    FlatList,
    StatusBar,
    Alert
} from 'react-native';
import { Rating } from 'react-native-elements'


export default class HomeScreenChild extends Component {
    constructor(props) {
        super(props);
        promotions = [
            { id: 1, source: require('../../Resource/Home/promotion/Dalat.png'), key: 'Đà Lạt', rating: 4, vote: 190 },
            { id: 2, source: require('../../Resource/Home/promotion/Hagiang.png'), key: 'Hà Giang', rating: 3, vote: 190 },
            { id: 3, source: require('../../Resource/Home/promotion/Hagiang.png'), key: 'Đà Nẵng', rating: 3, vote: 190 }
        ]
        trends = [
            { id: 1, source: require('../../Resource/Home/popular/HaLong.png') },
            { id: 2, source: require('../../Resource/Home/popular/HaGiang.png') },
            { id: 3, source: require('../../Resource/Home/popular/FinLand.png') }
        ]
        placeNears = [
            { id: 1, source: require('../../Resource/Home/nearyou/HaGiang.png'), rating: 4, key: 'Hà Giang', vote: 190 },
            { id: 2, source: require('../../Resource/Home/nearyou/LungCu.png'), rating: 3, key: 'Lũng Cú', vote: 190 },
            { id: 3, source: require('../../Resource/Home/nearyou/Fansipan.png'), rating: 5, key: 'Fansipan', vote: 190 }
        ]
        placeOfMonth = [
            { id: 1, source: require('../../Resource/Home/octorber/TayBac.png'), rating: 4, key: 'Tây Bắc ', vote: 190 },
            { id: 2, source: require('../../Resource/Home/octorber/HoaTayBac.png'), rating: 3, key: 'Hoa Tây Bắc', vote: 190 },
            { id: 3, source: require('../../Resource/Home/octorber/Fansipan.png'), rating: 5, key: 'Fansipan', vote: 190 }
        ]
        this.state = {
            datapromotion: promotions,
            dataTrend: trends,
            dataNear: placeNears,
            dataOctorber: placeOfMonth,
        }
    }
    _onpressTripPlan() {
        this.props.navigation.navigate('StackTripPlan_')
    }
    _onpressRestaurant() {
        this.props.navigation.navigate('Restaurants_')
    }
    _onpressHotel() {
        this.props.navigation.navigate('Hotels_')
    }
    _onpressSearch() {
        this.props.navigation.navigate('Search_')
    }
    _onpressCreateTripPlan() {
        this.props.navigation.navigate('StackCreateTripPlan_')
    }
    _onpressPopular() {
        this.props.navigation.navigate('StackPopular_')
    }
    sizerat = 12;

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FFF' }}>
                <View style={{ flex: 1 }}>
                    <StatusBar hidden={true} />
                    <Image
                        source={require('../../Resource/Home/logo/homeCover.png')}
                        style={styles.imageLogo} />

                    {/* Header UI include: titleImage, Notify, Search */}
                    <View style={{ height: 195, width: '100%' }}>
                        <View style={styles.headerView}>
                            <Image
                                source={require('../../Resource/Home/logo/title.png')} />
                            <Image
                                source={require('../../Resource/Home/logo/ring.png')}
                                style={{ position: 'absolute', right: 25 }} />
                        </View>

                        <View style={styles.inputSearch}>
                            <ImageBackground
                                style={{ width: 300, height: 50 }}
                                resizeMode='stretch'
                                source={require('../../Resource/Home/logo/bgInput.png')}
                            >
                                <TextInput
                                    style={{ marginLeft: 10, marginRight: 10 }}
                                    onFocus={() => this._onpressSearch()}
                                    placeholder='Find Destinations, hotels, restaurants....' />
                            </ImageBackground>
                        </View>
                    </View>

                    {/* 5 Button Options: Trips Plan, Hotels, Fights, Restaurants, Tours */}
                    <View elevation={5} style={styles.optionView}>
                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={() => this._onpressTripPlan()}
                                underlayColor={'transparent'}
                            >
                                <Image
                                    style={styles.optionImage}
                                    source={require('../../Resource/Home/logo/TripPlan.png')}
                                    resizeMode='stretch' />
                            </TouchableHighlight>
                        </View>

                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={() => this._onpressHotel()}
                                underlayColor={'transparent'}
                            >
                                <Image
                                    style={styles.optionImage}
                                    source={require('../../Resource/Home/logo/Hotel.png')} />
                            </TouchableHighlight>
                        </View>

                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor={'transparent'}
                            >
                                <Image
                                    style={styles.optionImage}
                                    source={require('../../Resource/Home/logo/Flights.png')} />
                            </TouchableHighlight>
                        </View>

                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={() => this._onpressRestaurant()}
                                underlayColor={'transparent'}
                            >
                                <Image
                                    style={styles.optionImage}
                                    source={require('../../Resource/Home/logo/Restaurants.png')} />
                            </TouchableHighlight>
                        </View>

                        <View style={{ flex: 1 }}>
                            <TouchableHighlight
                                onPress={() => { }}
                                underlayColor={'transparent'}
                            >
                                <Image
                                    style={styles.optionImage}
                                    source={require('../../Resource/Home/logo/Tours.png')} />
                            </TouchableHighlight>
                        </View>
                    </View>

                    {/* List Khuyen mai */}
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Tin khuyến mại</Text>
                        <Text style={styles.textSeeAll}>See all</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.datapromotion}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <View>
                                <Image source={item.source} style={styles.imagePromotion}></Image>
                                <Text style={{ marginLeft: 10, fontSize: 13 }}>{item.key}</Text>
                                <View
                                    style={{ marginLeft: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Rating
                                        ratingBackgroundColor='blue'
                                        type="star"
                                        fractions={1}
                                        startingValue={item.rating}
                                        imageSize={this.sizerat}
                                    ></Rating>
                                    <Text style={styles.txtRating}>  ({item.vote} bình chọn)</Text>
                                </View>
                            </View>
                        )}
                    />

                    {/* List Place Public */}
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Địa điểm phổ biến</Text>

                        <Text style={styles.textSeeAll}
<<<<<<< HEAD
                            onPress={() => { this.props.navigation.navigate('StackPopular_') }} >
=======
                            onPress={() => this._onpressPopular()} >
>>>>>>> 2a90587ce2f6aafb0e1a540fe075d85a5d05f6d0
                            See all
                        </Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.dataTrend}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <View >
                                <Image source={item.source} style={styles.imageTrend} />
                            </View>
                        )}
                    />

                    {/* List Near Place */}
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Địa điểm gần bạn</Text>
                        <Text style={styles.textSeeAll}
                            onPress={()=> this.props.navigation.navigate('TempStNearly_')}>See all</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.dataNear}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <View >
                                <Image source={item.source} style={styles.imageNear}></Image>
                                <Text style={{ marginLeft: 10 }}>{item.key}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Rating
                                        style={{ marginLeft: 10 }}
                                        ratingBackgroundColor='blue'
                                        type="star"
                                        fractions={1}
                                        startingValue={item.rating}
                                        imageSize={this.sizerat}
                                    ></Rating>
                                    <Text style={styles.txtRating}>  ({item.vote} bình chọn)</Text>
                                </View>
                            </View>
                        )}
                    />

                    {/* List Place of Month */}
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Tháng mười nên đi đâu</Text>
                        <Text style={styles.textSeeAll} 
                                onPress={()=> this.props.navigation.navigate('TempStAddPlace_')}>See all</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.dataOctorber}
                        keyExtractor={(item) => item.toString()}
                        renderItem={({ item }) => (
                            <View >
                                <Image source={item.source} style={styles.imageOctorber}></Image>
                                <Text style={{ marginLeft: 10 }}>{item.key}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Rating
                                        style={{ marginLeft: 10 }}
                                        ratingBackgroundColor='blue'
                                        type="star"
                                        fractions={1}
                                        startingValue={item.rating}
                                        imageSize={this.sizerat}
                                    ></Rating>
                                    <Text style={styles.txtRating}>  ({item.vote} bình chọn)</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView >
        );
    }
}

const styles = StyleSheet.create({
    imageLogo: {
        height: 250,
        width: '100%',
        position: 'absolute',
    },
    headerView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSearch: {
        flex: 1,
        alignItems: 'center',
        marginTop: -25
    },
    optionView: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: -55,
        flex: 1,
        flexDirection: 'row'
    },
    optionImage: {
        width: 65,
        height: 65
    },
    inputIcon: {
        width: 17.5,
        height: 17.5,
    },
    parentTouch: {
        width: '100%',
        marginTop: -33,
        marginBottom: 'auto',
        flexDirection: 'row',
        height: 65
    },
    imagePromotion: {
        width: 210,
        height: 144
    },
    imageTrend: {
        width: 155,
        height: 200
    },
    imageNear: {
        width: 150,
        height: 102
    },
    imageOctorber: {
        width: 150,
        height: 102
    },
    textTitle: {
        marginLeft: 10,
        color: '#000',
        fontSize: 16,
        marginTop: 'auto'
    },
    textSeeAll: {
        color: '#ED50C6',
        fontSize: 12,
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 10,
    },
    txtRating: {
        fontSize: 10,
        color: '#A5A4A4'
    }
})