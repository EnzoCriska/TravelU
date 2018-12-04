import React, { Component } from 'react';

import {
    createStackNavigator
}
    from 'react-navigation'
import CreateTripPlan from './CreateTripPlan';
import Search from '../Search/Search';
import PickDate from './Pickdate/Pickdate';
import BookHotels from './BookHotels';


export default class StackTripPlan extends Component {
    render() {
        return<RootStack></RootStack>;
    }
};

const RootStack = createStackNavigator({
    CreateTripPlan_: CreateTripPlan,
    Search_: Search,
    PickDate_:PickDate,
    BookHotels_:BookHotels
}, {
        headerMode: 'none'
    })
