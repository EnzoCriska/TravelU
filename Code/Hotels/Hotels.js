import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableHighlight,
    TextInput,
    ScrollView,
    FlatList,
} from 'react-native';
import { Rating, Icon } from 'react-native-elements';

export default class Hotels extends Component {
    constructor(props) {
        super(props);

        topHotels = [{
            source: require('../../Resource/Hotels/TopHotel/Dalat.png'),
            title: 'Giai Điệu - Melody Hotel Đà Lạt',
            ratting: 4,
            vote: 190,
            pernight: "1000000"
        }, {
            source: require('../../Resource/Hotels/TopHotel/LungCu.png'),
            title: 'Lũng Cú',
            ratting: 4,
            vote: 190,
            pernight: "1000000"
        }, {
            source: require('../../Resource/Hotels/TopHotel/Fansipan.png'),
            title: 'Fansipan',
            ratting: 4,
            vote: 190,
            pernight: "1000000"
        }]

        hotelRomatic = [{
            source: require('../../Resource/Hotels/TopHotelRomatic/HaGiang.png'),
            title: 'Hà Giang',
            ratting: 4,
            vote: 190,
            pernight: "1000000"
        }, {
            source: require('../../Resource/Hotels/TopHotelRomatic/GoldenHotel.png'),
            title: 'Golden Hotel',
            ratting: 4,
            vote: 190,
            pernight: "1000000"
        }, {
            source: require('../../Resource/Hotels/TopHotelRomatic/Fansipan.png'),
            title: 'Fansipan',
            ratting: 4,
            vote: 190,
            pernight: "1000000"
        }]

        homeStay = [{ source: require('../../Resource/Hotels/HomeStay/Fansipan.png'), title: 'Le Bleu', ratting: 4, vote: 190, pernight: "1000000" },
        { source: require('../../Resource/Hotels/HomeStay/GoldenHotel.png'), title: 'Golden Hotel', ratting: 4, vote: 190, pernight: "1000000" },
        { source: require('../../Resource/Hotels/HomeStay/LeBleu.png'), title: 'Fansipan', ratting: 4, vote: 190, pernight: "1000000" }]

        populars = [{ source: require('../../Resource/Hotels/popular/HaLong.png'), title: 'Le Bleu', ratting: 4, vote: 190, pernight: "1000000" },
        { source: require('../../Resource/Hotels/popular/HaGiang.png'), title: 'Golden Hotel', ratting: 4, vote: 190, pernight: "1000000" },
        { source: require('../../Resource/Hotels/popular/FindLand.png'), title: 'Fansipan', ratting: 4, vote: 190, pernight: "1000000" }]

        this.state = {
            dataTopHotel: topHotels,
            dataHotelRomatic: hotelRomatic,
            dataHomeStay: homeStay,
            dataPopular: populars
        }
    }
    rattingSize = 12;

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

    btnBackClicked() {
        console.log("btnBack clicked");
        this.props.navigation.navigate('HomeScreenChild_');
    }

    render() {
        return (
            <ScrollView style={styles.containerScroll}>
                {/* Statusbar and background header Image */}
                <StatusBar hidden={false} />
                <Image
                    source={require('../../Resource/Home/logo/homeCover.png')}
                    style={styles.imageLogo} />

                {/* Box Header inlcude: back button, image title, form find */}
                <View style={styles.containerHeader}>
                    {/* Header view */}
                    <View style={styles.headerView}>
                        <TouchableHighlight
                            style={{ flex: 1 }}
                            onPress={() => { this.btnBackClicked() }}
                            underlayColor={'transparent'}
                        >
                            <Image
                                source={require('../../Resource/SignIn/btnBack.png')} />
                        </TouchableHighlight>

                        <View style={styles.containerTitle}>
                            <Image
                                source={require('../../Resource/Home/logo/title.png')} />
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text></Text>
                        </View>
                    </View>

                    {/* Form Find Restaurants */}
                    <View style={[styles.viewSearch, shadow]}>
                        <View style={styles.packageInputSearch}>
                            <View style={styles.inputSearch}>
                                <Image
                                    source={require('../../Resource/Restaurants/Logo/IconSearch.png')}
                                    style={styles.iconsearch} />

                                <TextInput
                                    style={styles.textInput}
                                    placeholder='Where do you want to go?' />
                            </View>
                        </View>

                        <View style={styles.containerFindBtn}>
                            <TouchableHighlight
                                style={{ width: '90%' }}
                                onPress={() => { }}
                                underlayColor={'transparent'}
                            >
                                <Image
                                    source={require('../../Resource/Hotels/btnFindHotels.png')}
                                    style={styles.buttonFind} />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

                <View style={styles.titleFirst}>
                    <Text style={styles.textTitle}>
                        Top khách sạn
                    </Text>

                    <Text
                        style={styles.textSeeAll}
                        onPress={() => { this.props.navigation.navigate('MapRestaurant_') }}>
                        See all
                    </Text>
                </View>

                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataTopHotel}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={styles.containerRating}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />

                                <Text style={{ fontSize: 12 }}>
                                    ({item.vote} đánh giá)
                                </Text>
                            </View>

                            <View style={styles.containerPernight}>
                                <View style={styles.pernightItemContainer}>
                                    <Text style={styles.txtPriceTitle}>Per night</Text>
                                    <Text style={styles.txtPrice}>
                                        {this.formatNumberWithDot(item.pernight)}
                                    </Text>
                                </View>

                                <Text style={styles.txtPrice}>đ</Text>
                            </View>
                        </View>
                    )}
                />

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Homestay view đẹp ngất ngây</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>

                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataHomeStay}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={styles.containerRating}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />

                                <Text style={{ fontSize: 12 }}>
                                    ({item.vote} đánh giá)
                                </Text>
                            </View>

                            <View style={styles.containerPernight}>
                                <View style={styles.pernightItemContainer}>
                                    <Text style={styles.txtPriceTitle}>Per night</Text>
                                    <Text style={styles.txtPrice}>
                                        {this.formatNumberWithDot(item.pernight)}
                                    </Text>
                                </View>

                                <Text style={styles.txtPrice}>đ</Text>
                            </View>
                        </View>
                    )}
                />

                <View style={styles.title}>
                    <Text style={styles.textTitle}>Top khách sạn lãng mạn</Text>
                    <Text style={styles.textSeeAll}>See all</Text>
                </View>

                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataHotelRomatic}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={styles.containerRating}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />
                                <Text style={{ fontSize: 12 }}>({item.vote} đánh giá)</Text>
                            </View>

                            <View style={styles.containerPernight}>
                                <View style={styles.pernightItemContainer}>
                                    <Text style={styles.txtPriceTitle}>Per night</Text>
                                    <Text style={styles.txtPrice}>
                                        {this.formatNumberWithDot(item.pernight)}
                                    </Text>
                                </View>
                                <Text style={styles.txtPrice}>đ</Text>
                            </View>
                        </View>
                    )}
                />

                <View style={styles.title}>
                    <Text style={styles.textTitle}>
                        Điểm đến phổ biến
                    </Text>
                    <Text style={styles.textSeeAll}>
                        See all
                    </Text>
                </View>

                <FlatList
                    style={{ marginTop: -10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={this.state.dataPopular}
                    keyExtractor={(item) => item.toString()}
                    renderItem={({ item }) => (
                        <View style={{ width: 150 }}>
                            <Image source={item.source} style={styles.imageTop}></Image>
                            <Text style={styles.textName}>{item.title}</Text>
                            <View style={styles.containerRating}>
                                <Rating
                                    style={{ marginLeft: 10 }}
                                    type="star"
                                    fractions={1}
                                    imageSize={this.rattingSize}
                                    startingValue={item.ratting}
                                />
                                <Text style={{ fontSize: 12 }}>({item.vote} đánh giá)</Text>
                            </View>

                            <View style={styles.containerPernight}>
                                <View style={styles.pernightItemContainer}>
                                    <Text style={styles.txtPriceTitle}>Per night</Text>
                                    <Text style={styles.txtPrice}>
                                        {this.formatNumberWithDot(item.pernight)}
                                    </Text>
                                </View>
                                <Text style={styles.txtPrice}>đ</Text>
                            </View>
                        </View>
                    )}
                />
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

const styles = StyleSheet.create({
    containerScroll: {
        backgroundColor: '#FFF'
    },
    containerHeader: {
        alignItems: 'center',
        height: 250
    },
    containerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        marginLeft: 12,
        width: '90%',
        fontSize: 12,
        color: '#9F9F9F'
    },
    containerFindBtn: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    containerRating: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerPernight: {
        flexDirection: 'row',
        marginLeft: 10,
        height: 30
    },
    pernightItemContainer: {
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    imageLogo: {
        height: 250,
        width: '100%',
        position: 'absolute',
    },
    headerView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        marginBottom: 20,
    },
    viewSearch: {
        flex: 1,
        backgroundColor: '#FFF',
        height: 148,
        width: '95%',
        borderRadius: 5,
        marginTop: -50,
        justifyContent: 'center',
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
    },
    iconsearch: {
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
        width: '90%',
        flexDirection: 'row'
    },
    titleFirst: {
        margin: '5%',
        width: '90%',
        flexDirection: 'row'
    },
    textTitle: {
        color: '#000',
        fontSize: 16,
        marginTop: 'auto',
        marginLeft: -10
    },
    textSeeAll: {
        color: '#ED50C6',
        fontSize: 12,
        marginTop: 'auto',
        marginLeft: 'auto'
    },
    txtPriceTitle: {
        fontSize: 12,
        color: '#707070',
        marginRight: 10
    },
    txtPrice: {
        fontSize: 12,
        color: '#FF5526'
    },
    imageTop: {
        width: 170,
        height: 110
    },
    imagePopular: {
        marginLeft: 10,
        width: 170,
        height: 230
    },
    textName: {
        margin: 5,
        marginLeft: 10,
        fontSize: 13,
        color: '#000'
    }
})