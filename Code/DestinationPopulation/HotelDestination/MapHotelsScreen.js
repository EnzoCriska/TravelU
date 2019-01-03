import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  Animated
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";

import ItemHotel from "./FlatlistItem/ItemHotel";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = width - 20;

export default class MapHotelScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 21.038247,
        longitude: 105.7825949,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      },
      listRestaurants: [
        {
          title: "la decima",
          rating: 4,
          vote: 190,
          distance: 1934,
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.03824,
            longitude: 105.7825929
          },
          rank: 4,
          per_night: 100000
        },
        {
          title: "la decima34",
          rating: 4,
          vote: 190,
          distance: 1934,
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.040226,
            longitude: 105.779483
          },
          rank: 4,
          per_night: 100000
        },
        {
          title: "la decima54",
          rating: 4,
          vote: 190,
          distance: 1934,
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.03585,
            longitude: 105.783474
          },
          rank: 4,
          per_night: 100000
        },
        {
          title: "la decima7uy6",
          rating: 4,
          vote: 190,
          distance: 1934,
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.03421,
            longitude: 105.732345
          },
          rank: 4,
          per_night: 100000
        }
      ]
    };
  }

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    console.log("componentDidmount...");
    this.animation.addListener(({ value }) => {
      console.log("value: " + value);
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      console.log("index: " + index);
      if (index >= this.state.listRestaurants.length) {
        index = this.state.listRestaurants.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { location } = this.state.listRestaurants[index];
          console.log(location);
          this.map.animateToRegion(
            {
              ...location,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta
            },
            350
          );
        }
      }, 10);
    });
  }

  async currentLocation() {
    await navigator.geolocation.getCurrentPosition(position => {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var location = {
        latitude: latitude,
        longitude: longitude
      };
      this.setState({
        region: {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        },
        isCurrentLocation: true
      });
      this.map.animateToRegion(
        {
          ...location,
          latitudeDelta: this.state.region.latitudeDelta,
          longitudeDelta: this.state.region.longitudeDelta
        },
        350
      );
    });
  }
  checkCurrent() {
    console.log("current marker");
    if (this.state.isCurrentLocation) {
      console.log("return marker");
      return <Marker coordinate={this.state.region} />;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../../../Resource/Hotels/logo.png")}
            style={styles.imageBackground}
          >
            <View style={styles.containerHeader}>
              <View style={styles.containerBackHeader}>
                <TouchableOpacity
                  style={styles.touchableIcon}
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                >
                  <Icon
                    name="long-arrow-left"
                    size={20}
                    style={{ color: "white" }}
                  />
                </TouchableOpacity>

                <Text style={styles.titleHeader}>Hotels</Text>
              </View>
              <View style={styles.containerMenuHeader}>
                <Icon
                  name="search"
                  size={20}
                  style={{ color: "white", margin: 10 }}
                />
                <Icon
                  name="list"
                  size={20}
                  style={{ color: "white", margin: 10 }}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.body}>
          <MapView
            ref={map => (this.map = map)}
            initialRegion={this.state.region}
            style={{
              width: width,
              height: height - 100,
              zIndex: 1,
              position: "absolute"
            }}
          >
            {this.state.listRestaurants.map((item, index) => (
              <Marker coordinate={item.location} title={item.title}>
                <Image
                  source={require("../../../Resource/Hotels/Map/hotelMarker.png")}
                  style={styles.imageMarker}
                />
              </Marker>
            ))}

            {this.checkCurrent()}
          </MapView>

          <TouchableOpacity
            onPress={() => {
              console.log("get current locations");
              this.currentLocation();
            }}
            style={{
              height: 50,
              width: 50,
              zIndex: 2,
              position: "absolute",
              marginLeft: "85%",
              marginTop: "5%"
            }}
          >
            <Image
              source={require("../../../Resource/Hotels/Map/qw.png")}
              style={{ height: 50, width: 50 }}
              contentContainerStyle={{
                alignItems: "center",
                justifyContent: "center"
              }}
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
                      x: this.animation
                    }
                  }
                }
              ],
              { useNativeDriver: true }
            )}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}
          >
            {this.state.listRestaurants.map((item, index) => (
              <ItemHotel
                key={index.toString()}
                title={item.title}
                image={item.image}
                distance={item.distance}
                rating={item.rating}
                vote={item.vote}
                rank={item.rank}
                per_night={item.per_night}
              />
            ))}
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    height: 100,
    width: "100%"
  },
  containerHeader: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50
  },
  touchableIcon: {
    height: 20,
    width: 30,
    borderRadius: 20
  },
  titleHeader: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 15
  },
  imageMarker: {
    height: 150,
    width: 150
  },
  header: {},
  containerBackHeader: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20
  },
  containerMenuHeader: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
    paddingRight: 5
  },
  body: {
    flex: 1
  },
  scrollView: {
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 0,
    paddingVertical: 5,
    zIndex: 2,
    position: "absolute"
  },
  endPadding: {
    //  paddingHorizontal: width - CARD_WIDTH,
  }
});
