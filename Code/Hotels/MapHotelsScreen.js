import React, { Component } from 'react'
import {
    View, Text, ImageBackground, TouchableOpacity, StyleSheet, FlatList
} from 'react-native'
import  Icon  from "react-native-vector-icons/FontAwesome";
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import ItemHotel from './FlatlistItem/ItemHotel';

const listHotel = [
    {
        title: "melodi",
        rank: 4,
        rating: 4,
        vote: 190,
        distance: 130,
        image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
        per_night: "103454",
        location: {
          latitude: 21.038247,
          longitude: 105.7825949
        }
      },
      {
        title: "melodi",
        rank: 4,
        rating: 4,
        vote: 190,
        distance: 130,
        image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
        per_night: "103454",
        location: {
          latitude: 21.038252,
          longitude: 105.7825949
        }
      },
      {
        title: "melodi",
        rank: 4,
        rating: 4,
        vote: 190,
        distance: 130,
        image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
        per_night: "103454",
        location: {
          latitude: 21.038247,
          longitude: 105.7825936
        }
      },
      {
        title: "melodi",
        rank: 4,
        rating: 4,
        vote: 190,
        distance: 130,
        image: "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
        per_night: "103454",
        location: {
          latitude: 21.038240,
          longitude: 105.7825929
        }
      }
]
export default class MapHotelsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            coordinates:[
                {
                    latitude:21.038247,
                    longitude:105.7825949,
                },
                {
                    latitude:21.0230544,
                    longitude:105.8048466,
                
                }
            ],
            strokeColor: '#FF2D00',
            region:{
                latitude:21.038247,
                longitude:105.7825949,
                latitudeDelta:0.02,
                longitudeDelta:0.02,
            },
            marker:{
                latitude:21.024786,
                longitude:105.8000984
            },
            markerss : [
                {
                    "title": "melodi",
                    "rank": 4,
                    "rating": 4,
                    "vote": 190,
                    "distance": 130,
                    "image": "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    "per_night": "103454",
                    "location": {
                      "latitude": 21.038247,
                      "longitude": 105.7825949
                    }
                  },
                  {
                    "title": "melodi",
                    "rank": 4,
                    "rating": 4,
                    "vote": 190,
                    "distance": 130,
                    "image": "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    "per_night": "103454",
                    "location": {
                      "latitude": 21.038252,
                      "longitude": 105.7825949
                    }
                  },
                  {
                    "title": "melodi",
                    "rank": 4,
                    "rating": 4,
                    "vote": 190,
                    "distance": 130,
                    "image": "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    "per_night": "103454",
                    "location": {
                      "latitude": 21.038247,
                      "longitude": 105.7825936
                    }
                  },
                  {
                    "title": "melodi",
                    "rank": 4,
                    "rating": 4,
                    "vote": 190,
                    "distance": 130,
                    "image": "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
                    "per_night": "103454",
                    "location": {
                      "latitude": 21.038240,
                      "longitude": 105.7825929
                    }
                  }
            ]
        }
    }

    renderMarker(){
        markers = []
        for (marker of listHotel){
            console.log('>>>>>>>')
            console.log(marker.location)
            markers.push(
                <Marker key = {marker.location.longitude + marker.location.latitude}
                    coordinate={marker.location}
                    image={require('../../Resource/Hotels/Map/hotelMarker.png')}
                />
            )
        }
        console.log(markers.length)
        return markers
    }

    renderRow({item}){
        return(          
            <ItemHotel
                title = {item.title}
                image = {item.image}
                rank = {item.rank}
                rating = {item.rating}
                vote = {item.vote}
                distance = {item.distance}
                per_night = {item.per_night}
                location = {item.location}
            />
        )
    }
    render() {
        return (
               <View style={{flex:1}}>
                   <ImageBackground
                        source={require('../../Resource/Hotels/logo.png')}
                        style = {{height: 100, width:'100%'}}>
                        <View style = {{flex:1}}></View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={styles.containerBackHeader}>
                                <TouchableOpacity 
                                    style={{height:20, width:30, borderRadius:20}}
                                    onPress={()=> {this.props.navigation.goBack()}}>
                                    <Icon
                                        name='long-arrow-left'
                                        size={20}
                                        style={{color:'white'}}
                                    />
                                </TouchableOpacity>
                                
                                <Text style={{color:'white', fontSize:20, marginHorizontal:15}}>Hotels</Text>
                            </View>
                            <View style={styles.containerMenuHeader}>
                                    <Icon
                                        name='search'
                                        size={20}
                                        style={{color:'white', margin:10}}
                                    />
                                    <Icon
                                        name='list'
                                        size={20}
                                        style={{color:'white', margin:10}}
                                    />
                            </View>
                        </View>
                   </ImageBackground>
                   <View style={styles.container}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            showsUserLocation
                            style={styles.map}
                            region={{
                                latitude: 21.024786,
                                longitude: 105.8000984,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.0121,
                            }}
                        >
                        {   
                            this.state.markerss.map(marker => (
                            <Marker
                                coordinate={marker.location}
                                title={marker.title}
                            />
                        ))}
                        {this.renderMarker()}
                            <Text>Hello</Text>
                        </MapView>
                    </View>
                    <FlatList
                                horizontal={true}
                                data={listHotel}
                                renderItem = {this.renderRow}
                                // keyExtractor={item => item.title}
                            />
               </View>     
        );
    }
}

const styles = StyleSheet.create({
    containerBackHeader: {
        flex:1,  
        justifyContent:'flex-start', 
        alignItems:'center', 
        flexDirection:'row', 
        paddingLeft:20
    },
    containerMenuHeader:{
        flex:1, 
        justifyContent:'flex-end', 
        alignItems:'center', 
        flexDirection:'row', 
        paddingRight:5
    },
    container: {
        // ...StyleSheet.absoluteFillObject,
        flex:1,
        // height: 400,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',

      },
    map: {
        // ...StyleSheet.absoluteFillObject,
        flex:1,
        width:'100%',
        alignItems:"center",
        justifyContent:'center'
      },
})