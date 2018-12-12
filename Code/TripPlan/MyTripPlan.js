import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default class MyTripPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [{
            avata: require('../../Resource/TripPlan/nesta/nesta_avata.jpg'), scenery: require('../../Resource/TripPlan/mytripplan/dalat.png'),
            timeupdate: '29 minutes ago',
            from: 'Hà Nội',
            to: 'Hà Giang',
            sumday: 3,
            name:'Alessandro Nesta'
        },
        {
            avata: require('../../Resource/TripPlan/nesta/nesta_avata.jpg'), scenery: require('../../Resource/TripPlan/mytripplan/hagiang.png'),
            timeupdate: '2 hours ago',
            from: 'Hà Nội',
            to: 'Đà Lạt',
            sumday: 3,
            name:'Alessandro Nesta'
        }]
    };

}

render() {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.timeupdate}
                showsVerticalScrollIndicator={false}
                style={styles.flatlist}
                data={this.state.data}
                renderItem={({ item }) => (
                    <View style={[shadow, styles.viewItem]}>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                            <Image source={item.avata} style={styles.avata}></Image>
                            <Text style={{color:'black', marginLeft:5}}>{item.name}</Text>
                            <Text style={styles.textTimeUpdate}>{item.timeupdate}</Text>
                        </View>
                        <View style={{ marginTop: 10, width: '100%' }}>
                            <ImageBackground style={[styles.scenery, shadow]} source={item.scenery}>
                                <View style={styles.parentSumDay}>
                                    <View style={styles.parentTextSumday}>
                                        <Text style={{ color: 'black', fontSize: 12 }}> {item.sumday}</Text>
                                    </View>
                                    <Text style={{ color: 'white', fontSize: 12, marginLeft: 10, fontWeight:'bold' }}>Days</Text>
                                    <Image style={styles.iconVote} source={require('../../Resource/TripPlan/mytripplan/vote.png')}></Image>
                                </View>

                            </ImageBackground>
                        </View>
                        <View style={styles.viewFromTo}>
                            <View style={{ marginLeft: '5%' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../Resource/TripPlan/gps.png')} style={styles.iconGPS}></Image>
                                    <Text style={styles.textFromTo}>  {item.from} --------   </Text>
                                    <Image source={require('../../Resource/TripPlan/location.png')} style={styles.iconLocation}></Image>
                                    <Text style={styles.textFromTo}> {item.to}</Text>
                                </View>
                                <Text style={[styles.textPale, { marginTop: 5 }]}>{item.sumday} ngày từ {item.from} đến {item.to}</Text>
                            </View>
                            <Image style={styles.iconHeart} source={require('../../Resource/TripPlan/heart.png')}></Image>
                        </View>

                    </View>
                )}
            ></FlatList>
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

const styles = {
avata: {
    width: 30,
    height: 30,
    borderRadius: 15,
},
scenery: {
    width: '100%',
    height: 150
},
container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
},
flatlist: {
    width: '90%',
    marginTop: 20,
},
iconVote:{
    width:60,
    height:30,
    marginLeft:'auto',
    marginRight:16
},
iconGPS: {
    width: 17,
    height: 17
},
iconLocation: {
    width: 11,
    height: 15
},
iconHeart: {
    marginLeft: 'auto',
    width: 21,
    height: 19
},
parentSumDay: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginTop: 18,
    marginLeft: 16,
    alignItems: 'center'
},
parentTextSumday: {
    width: 26,
    height: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
},
textFromTo: {
    fontSize: 13,
    color: '#E044D1',
    fontWeight: 'bold',
},
textTimeUpdate: {
    color: '#777777',
    fontSize: 12,
    marginLeft: 'auto',
},
textPale: {
    fontSize: 12,
    color: '#777777'
},
viewItem: {
    width: '100%',
    marginTop: 10,
    // borderBottomColor:'#707070',
    // borderBottomWidth: 0.5,
},
viewFromTo: {
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 12,
    flexDirection: 'row',
    width: '100%'
},

}
