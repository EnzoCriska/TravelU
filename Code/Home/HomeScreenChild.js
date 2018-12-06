import React, { Component } from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    TextInput,
    ScrollView,
    FlatList,
    StatusBar

} from 'react-native';
import { Rating, Icon } from 'react-native-elements'
import {
    createBottomTabNavigator,

}
    from 'react-navigation'
import Login from '../Login/Login';


export default class HomeScreenChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datapromotion: [{ source: require('../../Resource/Home/promotion/Dalat.png'), key: 'Đà Lạt', rating: 4, vote: 190 },
            { source: require('../../Resource/Home/promotion/Hagiang.png'), key: 'Hà Giang', rating: 3, vote: 190 },
            { source: require('../../Resource/Home/promotion/Hagiang.png'), key: 'Hà Giang', rating: 3, vote: 190 }],

            dataTrend: [{ source: require('../../Resource/Home/popular/HaLong.png') },
            { source: require('../../Resource/Home/popular/HaGiang.png') },
            { source: require('../../Resource/Home/popular/FinLand.png') }],

            dataNear: [{ source: require('../../Resource/Home/nearyou/HaGiang.png'), rating: 4, key: 'Hà Giang', vote: 190 },
            { source: require('../../Resource/Home/nearyou/LungCu.png'), rating: 3, key: 'Lũng Cú', vote: 190 },
            { source: require('../../Resource/Home/nearyou/Fansipan.png'), rating: 5, key: 'Fansipan', vote: 190 }],

            dataOctorber: [{ source: require('../../Resource/Home/octorber/TayBac.png'), rating: 4, key: 'Tây Bắc ', vote: 190 },
            { source: require('../../Resource/Home/octorber/HoaTayBac.png'), rating: 3, key: 'Hoa Tây Bắc', vote: 190 },
            { source: require('../../Resource/Home/octorber/Fansipan.png'), rating: 5, key: 'Fansipan', vote: 190 }],
        }
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
    _onpressTripPlan(){
        this.props.navigation.navigate('StackTripPlan_')
    }
    sizerat = 12;

    render() {
        return (
            
            <View style={{ flex: 1, alignItems: 'center' }}>
<StatusBar></StatusBar>
                <ScrollView style={{ backgroundColor: 'white' }}>
                    <ImageBackground source={require('../../Resource/Home/logo/Logo.png')}
                        style={styles.imageLogo} >

                        <View style={{ flex: 1, width: '100%' }}>
                            <Image source={require('../../Resource/Home/logo/ring.png')} style={styles.notification}></Image>
                        </View>

                        <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>

                            <View style={styles.inputParent}>
                                <TextInput
                                    onFocus={() => this._onpressSearch()}
                                    style={styles.inputSearch} keyboardType='numeric'
                                    placeholder='Find Destinations, hotels, restaurants....' />
                                <TouchableHighlight style={{alignItems:'center'}}
                                >
                                    <Image source={require('../../Resource/Home/logo/Find.png')}
                                        style={styles.inputIcon}
                                    />
                                </TouchableHighlight>

                            </View>

                        </View>
                    </ImageBackground>

                    <View style={styles.parentTouch}>

                        <TouchableHighlight onPress={() => this._onpressTripPlan()}
                        style={[ styles.touchable]}>
                            <Image source={require('../../Resource/Home/logo/TripPlan.png')}
                               style={styles.imageTouchable}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this._onpressHotel()} 
                        style={[{marginLeft:'2.5%'}, styles.touchable]}>
                            <Image source={require('../../Resource/Home/logo/Hotel.png')} style={styles.imageTouchable}
                              ></Image>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this._onpressRestaurant()}
                        style={[{marginLeft:'2.5%'}, styles.touchable]} >
                            <Image source={require('../../Resource/Home/logo/Flights.png')}
                                style={styles.imageTouchable}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight
                           style={[{marginLeft:'2.5%'}, styles.touchable]}
                            onPress={() => this._onpressRestaurant()}>
                            <Image
                                source={require('../../Resource/Home/logo/Restaurants.png')}
                                style={styles.imageTouchable}></Image>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={() => this._onpressRestaurant()}
                        style={[{marginLeft:'2.5%'}, styles.touchable]}>
                            <Image source={require('../../Resource/Home/logo/Tours.png')}
                                style={styles.imageTouchable}></Image>
                        </TouchableHighlight>

                    </View>
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Tin khuyến mại</Text>
                        <Text style={styles.textSeeAll}>See all</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.datapromotion}
                        renderItem={({ item }) =>
                            (<View >
                                <Image source={item.source} style={styles.imagePromotion}></Image>
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
                                    <Text style={{ fontSize: 12 }}>  ({item.vote} bình chọn)</Text>
                                </View>
                            </View>)}
                    />
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Địa điểm phổ biến</Text>
                        <Text style={styles.textSeeAll} onPress={()=> {this.props.navigation.navigate('PopularDes_')}}>See all</Text>
                    </View>

                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.dataTrend}
                        renderItem={({ item }) =>
                            (<View >
                                <Image source={item.source} style={styles.imageTrend}></Image>

                            </View>)}
                    />
                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Địa điểm gần bạn</Text>
                        <Text style={styles.textSeeAll}>See all</Text>
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.dataNear}
                        renderItem={({ item }) =>
                            (<View >
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
                                    <Text style={{ fontSize: 12 }}>  ({item.vote} bình chọn)</Text>
                                </View>
                            </View>)}
                    />

                    <View style={styles.parentTouch}>
                        <Text style={styles.textTitle}>Tháng mười nên đi đâu</Text>
                        <Text style={styles.textSeeAll}>See all</Text>
                    </View>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={this.state.dataOctorber}
                        renderItem={({ item }) =>
                            (<View >
                                <Image source={item.source} style={styles.imageOctorber}></Image>
                                <Text style={{ marginLeft: 10 }}>({item.key}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Rating
                                        style={{ marginLeft: 10 }}
                                        ratingBackgroundColor='blue'
                                        type="star"
                                        fractions={1}
                                        startingValue={item.rating}
                                        imageSize={this.sizerat}
                                    ></Rating>
                                    <Text style={{ fontSize: 12 }}>  ({item.vote} bình chọn)</Text>
                                </View>

                            </View>)}
                    />



                </ScrollView>


            </View>

        );
    }
}

const styles = {
    imageLogo: {
        height: 176,
        width: '100%',
    },
    notification: {
        width: 18,
        height: 18,
        marginTop: 'auto',
        marginLeft: 'auto',
        marginBottom: 20,
        marginRight: '5%'
    },
    inputSearch: {
        padding: 10,
        marginBottom: 'auto',
        fontSize: 16,
        width: '90%',
        height: 41,
        color: 'black',

    },
    inputIcon: {
        
        width: 17.5,
        height: 17.5,

    },
    inputParent: {
       
        borderWidth: 0.5,
        borderColor: 'pink',
        borderRadius: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 41,
        width: '84%',
        alignItems: 'center'
    },
    parentTouch: {
        
        width: '90%',
        margin: '5%',
        marginTop: -33,
        marginBottom: 'auto',
        flexDirection: 'row',
        height: 65
    },
    touchable: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ED50C6',
        width: '18%',
        height: 65,
    },
    imageTouchable: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ED50C6',
        width: '100%',
        height: 65,

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
        color: 'black',
        fontSize: 20,
        marginTop: 'auto'
    },
    textSeeAll: {
        color: '#ED50C6',
        fontSize: 14,
        marginTop: 'auto',
        marginLeft: 'auto'
    }
}