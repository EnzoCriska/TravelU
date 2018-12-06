import React, { Component } from 'react';

import {
    createStackNavigator
}
    from 'react-navigation'
import CreateTripPlan from './CreateTripPlan';
import Search from '../Search/Search';
import PickDate from './Pickdate/Pickdate';
import BookHotels from './BookHotels';
import Place from './Place';
import Finish from './Finish';


export default class StackPlan extends Component {
    render() {
        return<RootStack></RootStack>;
    }
};

const RootStack = createStackNavigator({
    CreateTripPlan_: CreateTripPlan,
    Search_: Search,
    PickDate_:PickDate,
    BookHotels_:BookHotels,
    Place_:Place,
    Finish_:Finish
    
}, {
        headerMode: 'none'
    })
