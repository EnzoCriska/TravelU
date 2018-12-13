import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import ItemItineraries from './FlatListItem/ItemItineraries';
import ItemItinerariesByTravelers from './FlatListItem/ItemItinerariesByTravelers';

export default class TripPlanDaLat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPopular: [
                {
                    location: 'Đà Lạt',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/1.png')
                },
                {
                    location: 'Đà Lạt',
                    sumday: 4,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/2.png')
                },
                {
                    location: 'Đà Lạt',
                    sumday: 2,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/3.png')
                },
                {
                    location: 'Đà Lạt',
                    sumday: 5,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/4.png')
                },
            ],

            dataTravelers: [
                {
                    location: 'Đà Lạt',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta_avata.jpg'),
                    name: 'Alexsandro Nesta',
                    time: '2 hour'
                },
                {
                    location: 'Đà Lạt đến thành phố Hồ Chí Minh',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/maldini_avata.jpg'),
                    name: 'Paolo Maldini',
                    time: '3 hour'
                },
                {
                    location: 'Đà Lạt đến Vũng Tàu',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stamp.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stam_avata.jpg'),
                    name: 'Jaap Stam',
                    time: '4 hour'
                },
                {
                    location: 'Đà Lạt',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta_avata.jpg'),
                    name: 'Alexsandro Nesta',
                    time: '2 hour'
                },
                {
                    location: 'Đà Lạt đến thành phố Hồ Chí Minh',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/maldini_avata.jpg'),
                    name: 'Paolo Maldini',
                    time: '3 hour'
                },
                {
                    location: 'Đà Lạt đến Vũng Tàu',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stamp.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stam_avata.jpg'),
                    name: 'Jaap Stam',
                    time: '4 hour'
                },
                {
                    location: 'Đà Lạt',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta_avata.jpg'),
                    name: 'Alexsandro Nesta',
                    time: '2 hour'
                },
                {
                    location: 'Đà Lạt đến thành phố Hồ Chí Minh',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/maldini_avata.jpg'),
                    name: 'Paolo Maldini',
                    time: '3 hour'
                },
                {
                    location: 'Đà Lạt đến Vũng Tàu',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stamp.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stam_avata.jpg'),
                    name: 'Jaap Stam',
                    time: '4 hour'
                },
                {
                    location: 'Đà Lạt',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta_avata.jpg'),
                    name: 'Alexsandro Nesta',
                    time: '2 hour'
                },
                {
                    location: 'Đà Lạt đến thành phố Hồ Chí Minh',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/nesta/nesta.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/maldini_avata.jpg'),
                    name: 'Paolo Maldini',
                    time: '3 hour'
                },
                {
                    location: 'Đà Lạt đến Vũng Tàu',
                    sumday: 3,
                    image: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stamp.png'),
                    imageprofile: require('../../Resource/Denistation/Dalat/TripPlan/PlanTravelers/stam/stam_avata.jpg'),
                    name: 'Jaap Stam',
                    time: '4 hour'
                },
                
             


            ]
        };
    }

    render() {
        const { goBack } = this.props.navigation
        return (

            <View style={styles.container}>

                {/* background logo inclue buttonback, text title */}
                <ImageBackground source={require('../../Resource/DataImages/imgLogo90.png')}
                    style={styles.imgbgLogo}
                >

                    <View style={{ flex: 1 }}></View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                        <TouchableOpacity style={styles.btnBack} onPress={() => goBack()}>
                            <Image source={require('../../Resource/DataImages/imgBack.png')}
                                style={styles.imgBack}
                            >
                            </Image>
                        </TouchableOpacity>

                        <Text style={styles.txtTittle}>Trip Plan</Text>
                    </View>
                </ImageBackground>

                <ScrollView style={{ width: '100%' }}>


                    <View style={styles.viewPopularItineraries}>
                        <Text style={styles.txtItineraries}>Popular Itineraries</Text>
                        <Text style={styles.txtSeeAll}>See All</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                        <FlatList
                            keyExtractor={(item) => item.toString()}
                            numColumns={2}
                            style={styles.fllItineraries}
                            data={this.state.dataPopular}
                            renderItem={({ item }) => (
                                <ItemItineraries
                                    location={item.location}
                                    image={item.image}
                                    sumday={item.sumday}
                                />
                            )}
                        />
                    </View>


                    <View style={styles.viewPopularItineraries}>
                        <Text style={styles.txtItineraries}>Itineraries by travelers</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', backgroundColor: 'white' }}>
                        <FlatList
                            keyExtractor={(item) => item.toString()}
                            numColumns={2}
                            style={styles.fllItineraries}
                            data={this.state.dataTravelers}
                            renderItem={({ item }) => (
                                <ItemItinerariesByTravelers
                                    location={item.location}
                                    image={item.image}
                                    sumday={item.sumday}
                                    name={item.name}
                                    time={item.time}
                                    imageprofile={item.imageprofile}
                                />
                            )}
                        />
                    </View>
                </ScrollView>

            </View>
        );
    }
}
const styles = {
    btnBack: {
        width: 46,
        height: 46,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    fllItineraries: {
        backgroundColor: 'white',
        width: '95%',
        marginTop: 9,
        marginBottom: 15
    },
    imgBack: {
        width: 24,
        height: 9
    },
    imgbgLogo: {
        width: '100%',
        height: 90
    },
    txtTittle: {
        fontSize: 18,
        color: 'white'
    },
    txtItineraries: {
        marginLeft: '5%',
        fontSize: 14,
        color: '#7F8B9A'
    },
    txtSeeAll: {
        marginLeft: 'auto',
        color: '#ED50C6',
        fontSize: 12,
        marginRight: 19
    },
    viewPopularItineraries: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    }

}
