import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native';

export default class MyTripPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                avata: require('../../Resource/TripPlan/nesta/nesta_avata.jpg'),
                scenery: require('../../Resource/TripPlan/mytripplan/dalat.png'),
                timeupdate: '29 minutes ago',
                from: 'Hà Nội',
                to: 'Hà Giang',
                sumday: 3,
                name: 'Alessandro Nesta'
            }, {
                avata: require('../../Resource/TripPlan/nesta/nesta_avata.jpg'),
                scenery: require('../../Resource/TripPlan/mytripplan/hagiang.png'),
                timeupdate: '2 hours ago',
                from: 'Hà Nội',
                to: 'Đà Lạt',
                sumday: 3,
                name: 'Alessandro Nesta'
            }]
        };
    }

    render() {
        return (
            // <View style={styles.container}>
            //     <FlatList
            //         keyExtractor={(item) => item.timeupdate}
            //         showsVerticalScrollIndicator={false}
            //         style={styles.flatlist}
            //         data={this.state.data}
            //         renderItem={({ item }) => (
            //             <View style={styles.viewItem}>
            //                 {/* Header Item: Avatar, Name, timeCreated */}
            //                 <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
            //                     <Image
            //                         source={item.avata}
            //                         style={styles.avata} />

            //                     <Text style={{ color: '#000', marginLeft: 5 }}>
            //                         {item.name}
            //                     </Text>

            //                     <Text style={styles.textTimeUpdate}>
            //                         {item.timeupdate}
            //                     </Text>
            //                 </View>

            //                 {/* Content Item: Image, DayOfPlan, MoveDetails (place) */}
            //                 <View style={{ marginTop: 10, width: '100%' }}>
            //                     <ImageBackground
            //                         style={[styles.scenery, shadow]}
            //                         source={item.scenery}
            //                         resizeMode='cover'
            //                         borderTopLeftRadius={5}
            //                         borderTopRightRadius={5}
            //                     >
            //                         <View style={styles.parentSumDay}>
            //                             <View style={styles.parentTextSumday}>
            //                                 <Text style={{ color: 'black', fontSize: 12 }}> {item.sumday}</Text>
            //                             </View>

            //                             <Text style={{ color: 'white', fontSize: 12, marginLeft: 10, fontWeight: 'bold' }}>
            //                                 Days
            //                             </Text>

            //                             <Image
            //                                 style={styles.iconVote}
            //                                 source={require('../../Resource/TripPlan/mytripplan/vote.png')} />
            //                         </View>
            //                     </ImageBackground>
            //                 </View>

            //                 {/* Box Details Plan (Move position) and heart status */}
            //                 <View elevation={1} style={styles.viewFromTo}>
            //                     <View style={{ marginLeft: '5%' }}>
            //                         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //                             <Image
            //                                 source={require('../../Resource/TripPlan/gps.png')}
            //                                 style={styles.iconGPS} />

            //                             <Text style={styles.textFromTo}>  {item.from} --------   </Text>

            //                             <Image
            //                                 source={require('../../Resource/TripPlan/location.png')}
            //                                 style={styles.iconLocation} />

            //                             <Text style={styles.textFromTo}> {item.to}</Text>
            //                         </View>

            //                         <Text style={[styles.textPale, { marginTop: 5 }]}>
            //                             {item.sumday} ngày từ {item.from} đến {item.to}
            //                         </Text>
            //                     </View>

            //                     <Image
            //                         style={styles.iconHeart}
            //                         source={require('../../Resource/TripPlan/heart.png')} />
            //                 </View>
            //             </View>
            //         )}
            //     />
            // </View>

            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item) => item.timeupdate}
                    showsVerticalScrollIndicator={false}
                    style={styles.viewContent}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={styles.itemView}>
                            {/* Header Item: Avatar, Name, timeCreated */}
                            <View style={styles.headerItemView}>
                                <Image
                                    source={item.avata}
                                    style={styles.headerItemAvata} />

                                <Text style={styles.headerItemName}>
                                    {item.name}
                                </Text>

                                <Text style={styles.headerTimeCreated}>
                                    {item.timeupdate}
                                </Text>
                            </View>

                            {/* Content Item: Image, DayOfPlan, MoveDetails (place) */}
                            <View style={styles.contentItemView}>
                                <Image
                                    source={item.scenery}
                                    resizeMode='cover'
                                    borderTopLeftRadius={5}
                                    borderTopRightRadius={5}
                                    style={{ position: 'absolute', height: 150, width: '100%' }} />

                                <View style={styles.txtDayOfPlanView}>
                                    <View style={styles.txtDayOfPlan}>
                                        <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold', }}>
                                            {item.sumday}
                                        </Text>
                                    </View>

                                    <Text style={styles.txtDayOfPlanTitle}>Days</Text>

                                    <Image
                                        style={styles.iconVote}
                                        source={require('../../Resource/TripPlan/mytripplan/vote.png')} />
                                </View>

                                {/* Box Details Plan (Move position) and heart status */}
                                <View style={styles.boxDetailsItem}>
                                    <View style={{ flex: 7 }}>
                                        <Text>
                                            <Image
                                                style={styles.imgGPSItemContentBoxDetails}
                                                source={require('../../Resource/TripPlan/gps.png')} />

                                            <Text style={styles.txtItemContentBoxDetails}>{item.from}</Text>

                                            <Text style={styles.txtItemContentBoxDetails}> ------- </Text>

                                            <Image
                                                style={styles.imgLocalItemContentBoxDetails}
                                                source={require('../../Resource/TripPlan/location.png')} />

                                            <Text style={styles.txtItemContentBoxDetails}>{item.to}</Text>
                                        </Text>

                                        <Text style={{ fontSize: 12, color: '#777777' }}>
                                            {item.sumday} ngày từ {item.from} đến {item.to}
                                        </Text>
                                    </View>

                                    <View style={{ flex: 3 }}>
                                        <Image
                                            style={styles.imgHeartStatusItemContentBoxDetails}
                                            source={require('../../Resource/TripPlan/heart.png')} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    shadowOffset: {
        width: 0,
        height: -3,
    },
}

const styles = StyleSheet.create({
    viewContent: {
        padding: 20,
        width: '100%',
        marginBottom: 30
    },
    itemView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    headerItemView: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        margin: 10,
    },
    headerItemAvata: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    headerItemName: {
        fontSize: 14,
        color: '#000',
        marginLeft: 5,
    },
    headerTimeCreated: {
        position: 'absolute',
        right: 0,
        color: '#9F9F9F',
        fontSize: 12
    },
    contentItemView: {
        width: '100%',
        height: 210,
        borderRadius: 5,
        marginBottom: 20,
        borderWidth: 0.5,
        borderColor: "#DDD",
        elevation: 1
    },
    contentItemImage: {
        position: 'absolute',
        width: '100%',
        height: 150,
    },
    scenery: {
        width: '100%',
        height: 150,
        zIndex: 1,
        marginLeft: 5,
        marginRight: 5,
    },
    boxDetailsItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginTop: 60,
    },
    txtDayOfPlan: {
        backgroundColor: '#FFF',
        borderRadius: 8,
        width: 26,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtDayOfPlanTitle: {
        color: '#FFF',
        fontSize: 12,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    txtDayOfPlanView: {
        height: 150,
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    txtItemContentBoxDetails: {
        fontSize: 12,
        color: '#E044D1',
        fontWeight: 'bold',
    },
    imgGPSItemContentBoxDetails: {
        width: 17,
        height: 17,
        padding: 5
    },
    imgLocalItemContentBoxDetails: {
        width: 11,
        height: 15,
        padding: 5
    },
    imgHeartStatusItemContentBoxDetails: {
        marginLeft: 'auto',
        width: 21,
        height: 19
    },
    iconVote: {
        width: 60,
        height: 30,
        marginLeft: 'auto',
        marginRight: 16
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
})

// const styles = StyleSheet.create({
//     avata: {
//         width: 30,
//         height: 30,
//         borderRadius: 15,
//     },
//     scenery: {
//         width: '100%',
//         height: 150
//     },
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         alignItems: 'center',
//     },
//     flatlist: {
//         width: '90%',
//         marginTop: 20,
//     },
//     iconVote: {
//         width: 60,
//         height: 30,
//         marginLeft: 'auto',
//         marginRight: 16
//     },
//     iconGPS: {
//         width: 17,
//         height: 17
//     },
//     iconLocation: {
//         width: 11,
//         height: 15
//     },
//     iconHeart: {
//         marginLeft: 'auto',
//         width: 21,
//         height: 19
//     },
//     parentSumDay: {
//         flexDirection: 'row',
//         backgroundColor: 'transparent',
//         marginTop: 18,
//         marginLeft: 16,
//         alignItems: 'center'
//     },
//     parentTextSumday: {
//         width: 26,
//         height: 16,
//         backgroundColor: 'white',
//         borderRadius: 8,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     textFromTo: {
//         fontSize: 13,
//         color: '#E044D1',
//         fontWeight: 'bold',
//     },
//     textTimeUpdate: {
//         color: '#777777',
//         fontSize: 12,
//         marginLeft: 'auto',
//     },
//     textPale: {
//         fontSize: 12,
//         color: '#777777'
//     },
//     viewItem: {
//         width: '100%',
//         marginTop: 10,
//         // borderBottomColor:'#707070',
//         // borderBottomWidth: 0.5,
//     },
//     viewFromTo: {
//         alignItems: 'center',
//         marginTop: 15,
//         marginBottom: 12,
//         flexDirection: 'row',
//         width: '100%',
//         borderBottomLeftRadius: 5,
//         borderBottomRightRadius: 5,
//     },
// })
