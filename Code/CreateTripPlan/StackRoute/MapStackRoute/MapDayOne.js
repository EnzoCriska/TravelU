import React, { Component } from 'react'
import { 
    View, Text, Image,ScrollView, Dimensions, StyleSheet, Animated
 } from "react-native";
import MapView, {Marker} from "react-native-maps";
import ItemLocation from './ItemLocation/ItemLocation';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width - 20;

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

    componentWillMount(){
        this.index = 0;
        this.animation = new Animated.Value(0);
    }

    componentDidMount(){
        console.log('componentDidmount...')
        this.animation.addListener(({ value }) => {
            console.log('value: '+ value)
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            console.log('index: ' + index)
            if (index >= this.state.list.length) {
              index = this.state.list.length - 1;
            }
            if (index <= 0) {
              index = 0;
            }
      
            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
              if (this.index !== index) {
                this.index = index;
                const { location } = this.state.list[index];
                this.map.animateToRegion(
                  {
                    ...location,
                    latitudeDelta: this.state.region.latitudeDelta,
                    longitudeDelta: this.state.region.longitudeDelta,
                  },
                  350
                );
              }
            }, 10);
          });
        }
        currentLocation(){

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
          <TouchableOpacity
                    onPress={() => {console.log("get current locations")
                                    this.currentLocation()}}
                    style={{height:50, width:50, zIndex:2, position:'absolute',marginLeft: "85%", marginTop:"5%"}}>
                    <Image
                            source={require('../../../../Resource/Hotels/Map/qw.png')}
                            style={{height:50, width:50}}
                            contentContainerStyle={{alignItems:'center', justifyContent:'center'}}
                    />
                </TouchableOpacity>
          <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                        [
                        {
                            nativeEvent: {
                            contentOffset: {
                                x: this.animation,
                            },
                            },
                        },
                        ],
                        { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                    {this.state.list.map((item, index) => (
                        <ItemLocation
                            key = {'key'+ index.toString()}
                            title = {item.title}
                            image = {item.image}
                            distance = {item.distance}
                            rating = {item.rating}
                            vote = {item.vote}
                        />
                    ))}
                </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    mapSize:{
        width: width,
        height:height-100,
        zIndex:1,
        position: 'absolute',
    },
    imageMarker:{
        height:40, 
        width:30
    },
    scrollView: {
        zIndex:2,
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