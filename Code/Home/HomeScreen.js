import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import HomeScreenChild from './HomeScreenChild';
import Hotels from '../Hotels/Hotels';
import Restaurants from '../Restaurants/Restaurants';
import Search from '../Search/Search';
import PopularDestinations from '../DestinationPopulation/PopularDestinations';
import MapHotelsScreen from '../Hotels/MapHotelsScreen';
import StackCreateTripPlan from '../CreateTripPlan/StackCreateTripPlan';
import StackTripPlan from '../TripPlan/StackTripPlan';
import DaLatDenistation from '../DestinationPopulation/DaLatDestinations';
import StackPopularDes from '../DestinationPopulation/StackPopularDes';
import StackNearly from '../CreateTripPlan/StackRoute/AddPlace/Nearly/StackNearly';
import ThingsToDo from '../CreateTripPlan/StackRoute/AddPlace/Nearly/ThingsToDo';
import ItemThingsToDo from '../CreateTripPlan/StackRoute/AddPlace/Nearly/ItemFlatsList/ItemThingsToDo';
import StackAddPlace from '../CreateTripPlan/StackRoute/AddPlace/AddPlace/StackAddPlace';


export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<HomeBottomTab />);
    }
}
const StackHome = createStackNavigator({
    HomeScreenChild_: HomeScreenChild,
    Hotels_: Hotels,
    Restaurants_: Restaurants,
    Search_: Search,
    MapHotel_: MapHotelsScreen,
    StackTripPlan_: StackTripPlan,
    StackPopular_:StackPopularDes,
    TempStNearly_: StackNearly,   // temp for test, delete when finish stack
    TempStAddPlace_:StackAddPlace,  // temp for test, delete when finish stack
    // TempThingsTodo_: ThingsToDo,
    // TempItem_:ItemThingsToDo
},

    {
        headerMode: 'none'
    });

StackHome.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }
    return {
        tabBarVisible,
    };
};

StackCreateTripPlan.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;

    return {
        tabBarVisible,
    };
};
StackTripPlan.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;

    return {
        tabBarVisible,
    };
};

// Create Button Tab 
const HomeBottomTab = createBottomTabNavigator({
    HomeTab: {
        screen: StackHome,

        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/home.png')} style={styles.inputIcon} />
        })
    },
    PlanTab: {
        screen: HomeScreenChild,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/file.png')} style={styles.inputIcon} />
        })
    },
    CreateTripPlanTab: {
        screen: StackCreateTripPlan,
        navigationOptions: () => (
            {
                tabBarIcon: <Image source={require('../../Resource/Home/CreateTrip.png')} style={{ width: 82, height: 70, marginTop: -20 }}></Image>
            }
        )
    },
    ActivityTab: {
        screen: HomeScreenChild,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/music.png')} style={styles.inputIcon} />
        })
    },
    ProfileTab: {
        screen: HomeScreenChild,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/user.png')} style={styles.inputIcon} />
        })
    },
},
    {
        tabBarOptions: {
            showLabel: false
        }
    },
    {
        headerMode: 'none'
    });

const styles = StyleSheet.create({
    inputIcon: {
        marginTop: 10,
        width: 24,
        height: 24,
    }
})

