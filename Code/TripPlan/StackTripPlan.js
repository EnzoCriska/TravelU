import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import { createTabNavigator } from 'react-navigation'
import MyTripPlan from './MyTripPlan';
import Group from './Group';
import AllTripPlan from './AllTripPlan';

export default class StackTripPlan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    btnBackClicked() {
        this.props.navigation.navigate('HomeScreenChild_');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={false} />
                <ImageBackground
                    source={require('../../Resource/StackRoute/logo.png')}
                    style={styles.imageLogo}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 2 }}>
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity
                                    style={styles.buttonBack}
                                    onPress={() => { this.btnBackClicked() }}
                                >
                                    <Image
                                        source={require('../../Resource/StackRoute/back.png')}
                                        style={styles.iconBack} />
                                </TouchableOpacity>

                                <Text style={styles.textWhite}>Trip Plan</Text>

                                <Image
                                    style={styles.iconSearch}
                                    source={require('../../Resource/TripPlan/search.png')} />
                            </View>

                            <View style={{ flex: 1 }} />
                        </View>
                    </View>
                </ImageBackground>

                <TripPLanTab />
            </View>
        );
    }
}
const TripPLanTab = createTabNavigator(
    {
        AllTripPlan_: {
            screen: AllTripPlan,
            navigationOptions: { title: 'ALL' }
        },
        MyTripPlan_: {
            screen: MyTripPlan,
            navigationOptions: { title: 'My Trip Plan' }
        },
        Group_: {
            screen: Group,
            navigationOptions: {
                title: 'Group'
            }
        }
    }, {
        initialRouteName: 'AllTripPlan_',
        tabBarOptions: {
            style: {
                width: '100%',
                height: 40,
                backgroundColor: 'Transparent',
                left: 0,
                right: 0,
            }
        }
    })

const styles = StyleSheet.create({
    buttonBack: {
        width: '14%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        height: 120,
        width: '100%',
        marginBottom: -40
    },
    iconBack: {
        width: '60%',
        height: 10
    },
    iconSearch: {
        marginLeft: 'auto',
        marginRight: 18,
        width: 24,
        height: 24
    },
    textWhite: {
        color: '#FFF',
        fontSize: 18
    },
})