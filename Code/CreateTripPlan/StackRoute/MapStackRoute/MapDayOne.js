import React, { Component } from 'react'
import { 
    View, Text, Image,ScrollView, Dimensions, StyleSheet
 } from "react-native";
import MapView, {Marker} from "react-native-maps";
import ItemLocation from './ItemLocation/ItemLocation';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapDayOne extends Component {
    constructor(props){
        super(props)
        this.state = {
            region:{
                latitude:21.038247,
                longitude:105.7825949,
                latitudeDelta:0.02,
                longitudeDelta:0.02,
            },
            list:[
                {
                    title: "la decima",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    type: 'hotel',
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.038240,
                        longitude: 105.7825929 
                    }
                },
                {
                    title: "la decima34",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    type: 'location',
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.040226,
                        longitude: 105.779483 
                    }
                },
                {
                    title: "la decima54",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    type: 'hotel',
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude:21.035850, 
                        longitude:105.783474 
                    }
                },
                {
                    title: "la decima7uy6",
                    rating: 4,
                    vote: 190,
                    distance: 1934,
                    type: 'restaurant',
                    image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg',
                    location:{
                        latitude: 21.03421,
                      longitude: 105.732345 
                    }
                },
            ]
        }
    }

    renderImageMarker({item}){
        if (item.type === 'hotel') 
            return <Image 
                        source = {require('../../../../Resource/Hotels/Map/hotelMarker.png')}
                        style={styles.imageMarker}/>
        if (item.type === 'restaurant') 
            return <Image 
                        source = {require('../../../../Resource/Hotels/Map/restaurantMarker.png')}
                        style={styles.imageMarker}/>
        if (item.type === 'location') 
            return <Image 
                        source = {require('../../../../Resource/Hotels/Map/location.png')}
                        style={styles.imageMarker}/>
                        
    }

    render() {
    return (
      <View  style = {styles.container}>
          <MapView
                ref={map => this.map = map}
                initialRegion={this.state.region}
                style={styles.mapSize}>
                {this.state.list.map((item, index) => (
                    <Marker
                        coordinate = {item.location}
                        title = {item.title}>
                            {this.renderImageMarker({item})}
                        </Marker>
                    ))}
          </MapView>
          <ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                    {this.state.list.map((item, index) => (
                        <ItemLocation
                            title = {item.title}
                            image = {item.image}
                            distance = {item.distance}
                            rating = {item.rating}
                            vote = {item.vote}
                        />
                    ))}
                </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    mapSize:{
        height:'100%'
    },
    imageMarker:{
        height:40, 
        width:30
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