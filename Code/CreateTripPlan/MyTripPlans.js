import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image,FlatList  } from 'react-native';

export default class MyTripPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                index: 1, sumkm: 9.8, sumplace: 3, day: '23/10/2018', images: [
                    { name: 'Đà Lạt Cadasa resort luxury 5 star', image: require('../../Resource/TripPlan/MyTripPlans/data/day1/dalat_cadasa.png') },
                    { name: 'Nhà thờ Đức bà', image: require('../../Resource/TripPlan/MyTripPlans/data/day1/ducba_church.png') },
                    { name: 'Ruộng hoa', image: require('../../Resource/TripPlan/MyTripPlans/data/day1/flower.png') },
                ]

            }, {
                index: 2, sumkm: 9.8, sumplace: 3, day: '24/10/2018', images: [
                    { name: 'Đà Lạt Cadasa resort luxury 5 star', image: require('../../Resource/TripPlan/MyTripPlans/data/day2/dalat_cadasa.png') },
                    { name: 'Thị trấn sương mù', image: require('../../Resource/TripPlan/MyTripPlans/data/day2/fog_town.png') },
                    { name: 'Ruộng hoa', image: require('../../Resource/TripPlan/MyTripPlans/data/day2/flower.png') },
                ]

            }, {

                index: 1, sumkm: 9.8, sumplace: 3, day: '25/10/2018', images: [
                    { name: 'Đà Lạt Cadasa resort luxury 5 star', image: require('../../Resource/TripPlan/MyTripPlans/data/day3/dalat_cadasa.png') },
                    { name: 'Thị trấn sương mù', image: require('../../Resource/TripPlan/MyTripPlans/data/day3/fog_town.png') },
                    { name: 'Ruộng hoa', image: require('../../Resource/TripPlan/MyTripPlans/data/day3/flower.png') },
                ]

            },]
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../Resource/TripPlan/MyTripPlans/Logo/logo.png')}
                    style={styles.imageLogo}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.buttonBack}>
                                <Image source={require('../../Resource/TripPlan/MyTripPlans/Logo/back.png')}
                                    style={styles.iconBack}></Image>
                            </TouchableOpacity>
                            <Text style={styles.textLogo}>3 days to Đà Lạt</Text>
                            <TouchableOpacity style={styles.buttonEdit}>
                                <Image source={require('../../Resource/TripPlan/MyTripPlans/Logo/edit.png')}
                                    style={styles.iconEdit}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.buttonOption}>
                                <Image source={require('../../Resource/TripPlan/MyTripPlans/Logo/option.png')}
                                    style={styles.iconOption}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.viewProfile}>
                    <Image source={require('../../Resource/TripPlan/MyTripPlans/Profile/avata.png')}
                        style={styles.imageAvata}></Image>

                    <View style={{ marginLeft: 10, width: '25%' }}>
                        <Text style={styles.textGrey}>Tạo bởi</Text>
                        <Text style={styles.textBlack}>Minh Palmy</Text>
                        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                        <Image style={styles.iconBudget}
                                source={require('../../Resource/TripPlan/MyTripPlans/Profile/budget.png')}></Image>
                        </TouchableOpacity>
                            
                            <Text style={{ color: '#9E9E9E', marginLeft: 5 }}>Thêm budget</Text>
                        </View>
                    </View>

                    <View style={styles.viewRoute}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.viewSumday}>
                                <Text style={{ color: 'black' }}> 3</Text>
                            </View>
                            <Text style={[styles.textBlack, { marginLeft: 5 }]}> Days</Text>
                        </View>

                        <Text style={[styles.textGrey, { marginLeft: 'auto' }]}>Từ 23/10/2018</Text>
                        <View style={{ marginLeft: 'auto', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
                            <Image source={require('../../Resource/TripPlan/MyTripPlans/Profile/gps.png')}
                                style={styles.iconTo}
                            ></Image>
                            <Text style={[styles.textPink, { marginLeft: 10 }]}>Hà Nội  -------  </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../Resource/TripPlan/MyTripPlans/Profile/location.png')}
                                    style={styles.iconFrom}></Image>
                                <Text style={[styles.textPink, { marginLeft: 10 }]}>Thành phố Hồ Chí Minh</Text>
                            </View>



                        </View>

                    </View>

                </View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    style={{ width: '95%' }}
                    renderItem={({ item }) =>
                        (
                            <View style={[styles.viewItem]}>
                                <View style={styles.viewTitleItem}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.textBlack}> Ngày {item.index}</Text>
                                        <Text style={styles.textGrey}>{item.day}</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={styles.textBlack}> Số km</Text>
                                        <Text style={styles.textGrey}>{item.sumkm}</Text></View>
                                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                        <Text style={styles.textBlack}> Số địa điểm</Text>
                                        <Text style={styles.textGrey}>{item.sumplace} places</Text>
                                    </View>

                                </View>
                                <View style={{ backgroundColor: '#9E9E9E', height: 0.5, width: '95%' }} />

                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={item.images}
                                    horizontal={true}
                                    renderItem={({ item }) => (
                                        <View style={styles.viewItemChild}> 
                                            <Image source={item.image} style={styles.imageItem}></Image>
                                            <Text style={[styles.textBlack, { marginTop: 8 }]}>{item.name}</Text>
                                        </View>
                                    )}
                                />

                            </View>
                        )
                    }
                />


            </View>
        );
    }

}
const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.1,
    elevation: 8,
    shadowOffset: { width: 0, height: 4 }
}
const styles = {
    buttonBack: {

        justifyContent: 'center',
        alignItems: 'center',
        width: 45,
        height: '100%'
    },
    buttonEdit: {

        justifyContent: 'center',
        marginLeft: 'auto',
        alignItems: 'center',
        width: 45,
        height: '100%'
    },
    buttonOption: {
        justifyContent: 'center',
        marginLeft: 20,
        alignItems: 'center',
        width: 45,
        height: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    iconBack: {
        width: 25,
        height: 9
    },
    iconBudget: {
        width: 13,
        height: 13
    },
    iconTo: {
        width: 17,
        height: 17
    },
    iconFrom: {
        marginLeft: 3.5,
        width: 10,
        height: 15,
    },
    iconEdit: {
        width: 21,
        height: 21,

    },
    iconOption: {
        width: 5,
        height: 20,

    },
    imageAvata: {
        width: 67,
        height: 67
    },
    imageLogo: {
        width: '100%',
        height: 90
    },
    imageItem: {
        width: 120,
        height: 80
    },
    textLogo: {
        marginLeft: 10,
        color: 'white',
        fontSize: 17
    },
    textGrey: {
        fontSize: 13,
        color: '#9E9E9E'
    },

    textBlack: {
        fontSize: 15,
        color: 'black'
    },
    textPink: {
        fontSize: 16,
        color: '#E044D1'
    },
    viewTitleItem: {
        width: '100%',
        height: 52,
        flexDirection: 'row',
    },
    viewProfile: {
        flexDirection: 'row',
        marginTop: 10,
        width: '95%',
        height: 100
    },
    viewRoute: {
        marginLeft: 20,
        width: '50%'
    },
    viewSumday: {
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        height: 18,
        width: 28,
        borderRadius: 9,
        borderWidth: 0.5,
        borderColor: '#9E9E9E',
    },
    viewItem: {
        marginBottom: 10,
        padding: '2.5%',
        alignItems: 'center',
        height: 230,
        width: '100%',
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: '#707070'
    },
    viewItemChild: {
        width: 120,
        marginLeft: 10,
        flex: 1,
        marginTop: 15
    }

}
