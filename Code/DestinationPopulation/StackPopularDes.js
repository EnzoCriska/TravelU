import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native';
import PopularDestinations from './PopularDestinations';
import DaLatDenistation from './DaLatDestinations';
import DaLatRestaurants from './DaLatRestaurants';
import DaLatHotels from './HotelDestination/DaLatHotels';
import TripPlanDaLat from './TripPlanDaLat';
import DaLatSearch from './DaLatSearch';
import MapDestinationPopular from './MapDestinationPopular';
import MapHotelsScreen from './HotelDestination/MapHotelsScreen'

export default class StackPopularDes extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <StackPopular></StackPopular>
      
    );
  }
}
const StackPopular=createStackNavigator({
    PopularDes_: PopularDestinations,
    DaLatDestinations_:DaLatDenistation,
    DaLatRestaurants_:DaLatRestaurants,
    DaLatHotels_:DaLatHotels,
    DaLatMapHotels_: MapHotelsScreen,
    TripPlanDaLat_:TripPlanDaLat,
    DaLatSearch_:DaLatSearch,
    MapDestinationPopular_: MapDestinationPopular
    
},{
  headerMode:'none'
})
