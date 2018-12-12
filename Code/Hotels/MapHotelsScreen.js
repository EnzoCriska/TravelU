import React, { Component } from 'react'
import { 
    View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground, Image, ScrollView, Dimensions
 } from "react-native";
import MapView, {Marker} from "react-native-maps";
import  Icon  from "react-native-vector-icons/FontAwesome";

import ItemHotel from './FlatlistItem/ItemHotel';


const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapRestaurantScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            region:{
                latitude:21.038247,
                longitude:105.7825949,
                latitudeDelta:0.02,
                longitudeDelta:0.02,
            },
            listRestaurants:[
                {
                    title: "la decima",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.038240,
                        longitude: 105.7825929 
                    },
                    rank:4,
                    per_night:100000
                },
                {
                    title: "la decima34",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.040226,
                        longitude: 105.779483 
                    },
                    rank:4,
                    per_night:100000
                },
                {
                    title: "la decima54",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude:21.035850, 
                        longitude:105.783474 
                    },
                    rank:4,
                    per_night:100000
                },
                {
                    title: "la decima7uy6",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.03421,
                      longitude: 105.732345 
                    },
                    rank:4,
                    per_night:100000
                },
            ]
        }
    }
  render() {
    return (
      <View style={styles.container}>
            <View style={StyleSheet.header}>
                <ImageBackground
                        source={require('../../Resource/Hotels/logo.png')}
                        style = {styles.imageBackground}>
                        <View style={styles.containerHeader}>
                            <View style={styles.containerBackHeader}>
                                <TouchableOpacity 
                                    style={styles.touchableIcon}
                                    onPress={()=> {this.props.navigation.goBack()}}>
                                    <Icon
                                        name='long-arrow-left'
                                        size={20}
                                        style={{color:'white'}}
                                    />
                                </TouchableOpacity>
                                
                                <Text style={styles.titleHeader}>Hotels</Text>
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
            </View>
            <View style = {styles.body}>
                <MapView
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    style={{height:'100%'}}>
                    {this.state.listRestaurants.map((item, index) => (
                    <Marker
                        coordinate = {item.location}
                        title = {item.title}>
                        <Image source = {require('../../Resource/Hotels/Map/hotelMarker.png')}
                            style={styles.imageMarker}
                        />
                        </Marker>
                        
                ))}
                </MapView>
                {/* <Image
                        source={require('../../Resource/Hotels/Map/qw.png')}
                        style={{height:100, width:100}}
                        contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                /> */}

                <ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                    {this.state.listRestaurants.map((item, index) => (
                        <ItemHotel
                            title = {item.title}
                            image = {item.image}
                            distance = {item.distance}
                            rating = {item.rating}
                            vote = {item.vote}
                            rank = {item.rank}
                            per_night = {item.per_night}
                        />
                    ))}
                </ScrollView>
                
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }, 
    imageBackground:{
        height: 100, 
        width:'100%'
    },
    containerHeader:{
        flex:1, 
        flexDirection:'row', 
        marginTop:50
    },
    touchableIcon:{
        height:20, 
        width:30, 
        borderRadius:20
    },
    titleHeader:{
        color:'white', 
        fontSize:20, 
        marginHorizontal:15
    },
    imageMarker:{
        height:150, 
        width:150
    },
    header:{

    },
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
    body:{
        flex:1,
    },
    scrollView: {
        position: "absolute",
        bottom: 10,
        left: 10,
        right: 0,
        paddingVertical: 5,
    },
    endPadding: {
    //  paddingHorizontal: width - CARD_WIDTH,
    },
})