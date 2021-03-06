import React, { Component } from 'react';
import {
    createStackNavigator
} from 'react-navigation'
import CreateTripPlan from './CreateTripPlan';
import Search from '../Search/Search';
import PickDate from './Pickdate/Pickdate';
import BookHotels from './BookHotels';
import Place from './Place';
import Finish from './Finish';
import MyTripPlan from './MyTripPlans';
import StackRoute from './StackRoute/StackRoute';
import MapStack from './StackRoute/MapStackRoute/MapStack';
import StackNearly from './StackRoute/AddPlace/Nearly/StackNearly';
import HomeScreenChild from '../Home/HomeScreenChild';

export default class StackCreateTripPlan extends Component {
    render() {
        return <CreateTripPlanManager />;
    }
};

const CreateTripPlanManager = createStackNavigator(
    {
        CreateTripPlan_: CreateTripPlan,
        Search_: Search,
        PickDate_: PickDate,
        BookHotels_: BookHotels,
        Place_: Place,
        Finish_: Finish,
        MyTripPlans_: MyTripPlan,
        StackRoute_: StackRoute,
        MapStack_: MapStack,
        HomeMainScreen: HomeScreenChild
    },
    {
        headerMode: 'none'
    }
)
