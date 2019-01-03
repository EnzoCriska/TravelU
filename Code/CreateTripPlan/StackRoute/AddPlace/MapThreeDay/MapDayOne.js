import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import ItemLocation from "./ItemLocation/ItemLocation";

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class MapDayOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 21.038247,
        longitude: 105.7825949,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
      },
      list: [
        {
          title: "la decima",
          rating: 4,
          vote: 190,
          distance: 1934,
          type: "hotel",
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.03824,
            longitude: 105.7825929
          }
        },
        {
          title: "la decima34",
          rating: 4,
          vote: 190,
          distance: 1934,
          type: "location",
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.040226,
            longitude: 105.779483
          }
        },
        {
          title: "la decima54",
          rating: 4,
          vote: 190,
          distance: 1934,
          type: "hotel",
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.03585,
            longitude: 105.783474
          }
        },
        {
          title: "la decima7uy6",
          rating: 4,
          vote: 190,
          distance: 1934,
          type: "restaurant",
          image:
            "https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg",
          location: {
            latitude: 21.03421,
            longitude: 105.732345
          }
        }
      ]
    };
  }

  renderImageMarker({ item }) {
    if (item.type === "hotel")
      return (
        <Image
          source={require("../../../../../Resource/Hotels/Map/hotelMarker.png")}
          style={styles.imageMarker}
        />
      );
    if (item.type === "restaurant")
      return (
        <Image
          source={require("../../../../../Resource/Hotels/Map/restaurantMarker.png")}
          style={styles.imageMarker}
        />
      );
    if (item.type === "location")
      return (
        <Image
          source={require("../../../../../Resource/Hotels/Map/location.png")}
          style={styles.imageMarker}
        />
      );
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
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.mapSize}
        >
          {this.state.list.map((item, index) => (
            <Marker coordinate={item.location} title={item.title}>
              {this.renderImageMarker({ item })}
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
            source={require("../../../../../Resource/Hotels/Map/qw.png")}
            style={{ height: 50, width: 50 }}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        </TouchableOpacity>
        <ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.list.map((item, index) => (
            <ItemLocation
              title={item.title}
              image={item.image}
              distance={item.distance}
              rating={item.rating}
              vote={item.vote}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapSize: {
    width: width,
    height: height - 100,
    zIndex: 1,
    position: "absolute"
  },
  imageMarker: {
    height: 40,
    width: 30
  },
  scrollView: {
    zIndex: 2,
    position: "absolute",
    bottom: 10,
    left: 10,
    right: 0,
    paddingVertical: 5
  },
  endPadding: {
    //  paddingHorizontal: width - CARD_WIDTH,
  }
});
