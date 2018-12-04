import React, { Component } from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    TextInput,
    ScrollView,
    FlatList,
    ListItem,

} from 'react-native';
import { Rating, Icon } from 'react-native-elements'
import {
    createBottomTabNavigator,
    createStackNavigator
}
    from 'react-navigation'
import Login from '../Login/Login';
import HomeScreenChild from './HomeScreenChild';
import Hotels from '../Hotels/Hotels';
import Restaurants from '../Restaurants/Restaurants';
import Search from '../Search/Search';
import StackTripPlan from '../TripPlan/StackTripPlan';
import CreateTripPlan from '../TripPlan/CreateTripPlan';



export default class HomeScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<RootStack />);
    }
}
const StackHome = createStackNavigator({
    HomeScreenChild_: HomeScreenChild,
    Hotels_:Hotels,
    Restaurants_: Restaurants,
    Search_:Search,
    StackTripPlan_:StackTripPlan
  },
  
    {
      headerMode:'none'
    }
  );
  StackHome.navigationOptions= ({ navigation }) => {
      
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
    
      return {
        tabBarVisible,
      };
    };
    StackTripPlan.navigationOptions= ({ navigation }) => {
        let tabBarVisible = false;
      
        return {
          tabBarVisible,
        };
      };
const RootStack = createBottomTabNavigator({
    
    Home: {
        screen:StackHome ,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/home.png')} style={styles.inputIcon} />
        })
    },
    // Home:StackHome,
    File: {
        screen: HomeScreenChild ,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/file.png')} style={styles.inputIcon} />
        })
    },
    Button: {
        screen: StackTripPlan,
        navigationOptions: () => (
            {
                tabBarIcon: <Image source={require('../../Resource/Home/CreateTrip.png')} style={{ width: 82, height: 70, marginTop: -20 }}></Image>
            }
        )
    },
    Volume: {
        screen: HomeScreenChild ,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/music.png')} style={styles.inputIcon} />
        })
    },
    User: {

        screen: HomeScreenChild ,
        navigationOptions: () => ({
            tabBarIcon: <Image source={require('../../Resource/Home/icontabbar/user.png')} style={styles.inputIcon} />

        })
    },

},

    {
        headerMode: 'none'
    }
);

const styles={
    inputIcon:{
        marginTop: 10,
        width: 24,
        height: 24,
    }
}

