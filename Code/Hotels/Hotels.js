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
    ListItem,

} from 'react-native';
import { Rating, Icon } from 'react-native-elements'
export default class Hotels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTopHotel: [{ source: require('../../Resource/Hotels/TopHotel/Dalat.png'), title: 'Giai Điệu - Melody Hotel Đà Lạt', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/TopHotel/LungCu.png'), title: 'Lũng Cú', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/TopHotel/Fansipan.png'), title: 'Fansipan', ratting: 4, vote: 190, pernight: "1000000" }],

            dataHotelRomatic: [{ source: require('../../Resource/Hotels/TopHotelRomatic/HaGiang.png'), title: 'Hà Giang', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/TopHotelRomatic/GoldenHotel.png'), title: 'Golden Hotel', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/TopHotelRomatic/Fansipan.png'), title: 'Fansipan', ratting: 4, vote: 190, pernight: "1000000" }],

            dataHomeStay: [{ source: require('../../Resource/Hotels/HomeStay/Fansipan.png'), title: 'Le Bleu', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/HomeStay/GoldenHotel.png'), title: 'Golden Hotel', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/HomeStay/LeBleu.png'), title: 'Fansipan', ratting: 4, vote: 190, pernight: "1000000" }],

            dataPopular: [{ source: require('../../Resource/Hotels/popular/HaLong.png'), title: 'Le Bleu', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/popular/HaGiang.png'), title: 'Golden Hotel', ratting: 4, vote: 190, pernight: "1000000" },
            { source: require('../../Resource/Hotels/popular/FindLand.png'), title: 'Fansipan', ratting: 4, vote: 190, pernight: "1000000" }]
        }
    }
    rattingSize = 12;

    formatNumberWithDot(number) {

        let string = "";
        k = number.length % 3;

        for (let i = number.length - 1; i >= 0; i--) {
            string += number[i];
            if (i % 3 == 1) {
                string += ".";
            }
        }


        return string.split('').reverse().join('');
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <ImageBackground source={require('../../Resource/Hotels/Logo/Logo.png')}
                    style={styles.imageLogo} >
                </ImageBackground>
                <View style={{ alignItems: "center", height: 180 }}>

                    <View style={[styles.viewSearch, shadow]}>

                        <View style={styles.packageInputSearch}>
                            <View style={styles.inputSearch}>
                                <Image source={require('../../Resource/Hotels/Logo/IconSearch.png')} style={styles.iconsearch} />
                                <TextInput style={{ marginLeft: 10, width: '90%' }} placeholder='Where do you want to go?'></TextInput>
                            </View>
                        </View>


                        <View style={{ flex: 1, alignItems: 'center', width: '100%' }}>
                            <TouchableHighlight style={{ width: '90%' }}>
                                <Image source={require('../../Resource/Hotels/Logo/FindHotel.png')}
                                    style={styles.buttonFind}>
                                </Image>
                            </TouchableHighlight>
                        </View>

                    </View>

                </View>
                <View style={styles.titleFirst}>
                    <Text style={styles.textTitle}>Top Khách Sạn</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>
                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataTopHotel}
                    renderItem={({ item }) =>
                        (<View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />
                                <Text style={{ fontSize: 12 }}>({item.vote} đánh giá)</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 10, height: 30 }}>
                                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                                    <Text>Per night</Text>
                                    <Text style={styles.priceNumber}>{this.formatNumberWithDot(item.pernight)}</Text>
                                </View>
                                <Text style={styles.priceText}>đ</Text>
                            </View>

                        </View>)
                    }
                ></FlatList>

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Top khách sạn lãng mạn</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>
                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataHotelRomatic}
                    renderItem={({ item }) =>
                        (<View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />
                                <Text style={{ fontSize: 12 }}>({item.vote} đánh giá)</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 10, height: 30 }}>
                                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                                    <Text>Per night</Text>
                                    <Text style={styles.priceNumber}>{this.formatNumberWithDot(item.pernight)}</Text>
                                </View>
                                <Text style={styles.priceText}>đ</Text>
                            </View>

                        </View>)
                    }
                ></FlatList>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>Top HomeStay</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>
                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataHomeStay}
                    renderItem={({ item }) =>
                        (<View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />
                                <Text style={{ fontSize: 12 }}>({item.vote} đánh giá)</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 10, height: 30 }}>
                                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                                    <Text>Per night</Text>
                                    <Text style={styles.priceNumber}>{this.formatNumberWithDot(item.pernight)}</Text>
                                </View>
                                <Text style={styles.priceText}>đ</Text>
                            </View>

                        </View>)
                    }
                ></FlatList>

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Điểm đến phổ biến</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>
                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataPopular}
                    renderItem={({ item }) =>
                        (<View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imagePopular}></Image>

                        </View>)
                    }
                ></FlatList>


            </ScrollView>
        );
    }
}
const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,

}
const styles = {
    imageLogo: {
        height: 160,
        width: '100%',
    },
    viewSearch: {
        backgroundColor: 'white',
        height: 148,
        width: '90%',
        borderRadius: 5,
        marginTop: -74,
        alignItems: 'center'

    },
    inputSearch: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#BDBDBD',
        borderRadius: 5,
        width: '90%',
        height: 41,
        flexDirection: 'row'
    },
    packageInputSearch: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }, iconsearch: {
        marginLeft: 10,
        marginRight: 'auto',
        width: 20,
        height: 16
    },
    buttonFind: {
        width: '100%',
        height: 41
    },
    title: {
        margin: '5%',
        // marginTop: -74,
        width: '90%',
        flexDirection: 'row'
    },
    titleFirst: {
        margin: '5%',
        marginTop: -74,
        width: '90%',
        flexDirection: 'row'
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
    },
    imageTop: {
        width: 170,
        height: 110
    },
    imagePopular:{
        marginLeft:10,
        width:170,
        height:230
    },
    textName: {
        margin: 5,
        marginLeft:10,
        fontSize: 17,
        color: 'black'
    },
    priceNumber: {
        color: '#FF5526',
        marginLeft: 10
    },
    priceText: { color: '#FF5526' }


}