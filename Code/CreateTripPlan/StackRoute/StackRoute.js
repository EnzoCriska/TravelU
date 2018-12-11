import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { createTabNavigator } from 'react-navigation'
import RouteDayOne from './RouteDayOne';
import RouteDayTwo from './RouteDayTwo';
import RouteDayThree from './RouteDayThree';

export default class StackRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground source={require('../../../Resource/StackRoute/logo.png')} style={styles.imageLogo} >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ flex: 2 }}>
                            <View style={{ flex: 1, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.buttonBack}>
                                    <Image source={require('../../../Resource/StackRoute/back.png')}
                                        style={styles.iconBack} />
                                </TouchableOpacity>
                                <Text style={styles.textWhite}>3 day to Đà Lạt</Text>
                                <TouchableOpacity style={styles.iconNote}>
                                    <Image style={{width:'100%', height:'100%'}}  source={require('../../../Resource/StackRoute/note.png')}></Image>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.iconMap}>
                                    <Image style={{width:'100%', height:'100%'}} source={require('../../../Resource/StackRoute/map.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1 }}></View>
                        </View>
                    </View>
                </ImageBackground>
                <RootStack></RootStack>
            </View>
        );
    }
}
const RootStack = createTabNavigator({
    RouteDayOne_: {
        screen: RouteDayOne,
        navigationOptions: { title: 'Day 1' }

    },
    RouteDayTwo_: {
        screen: RouteDayTwo,
        navigationOptions: { title: 'Day 2' }
    },
    RouteDayThree_: {
        screen: RouteDayTwo,
        navigationOptions: {
            title: 'Day 3'
        }
    }
}, {

        initialRouteName: 'RouteDayOne_',
        // animationEnabled: false,
        // swipeEnabled: false,
        // lazyLoad: true,
        tabBarOptions: {
            indicatorStyle: {
                activeTintColor: 'yellow',
                backgroundColor: 'transparent',
                labelStyle: {
                    fontSize: 30,
                    color: 'red',
                    margin: 0,
                    padding: 0,
                },
            },
            style: {

                width: '100%',
                height: 40,
                backgroundColor: 'Transparent',
                left: 0,
                right: 0,

            }
        }
    })

const styles = {
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
    iconNote: {
        marginLeft: 'auto',
        width: 18,
        height: 18
    },
    iconMap: {
        marginLeft: '9%',
        marginRight: '5%',
        width: 20,
        height: 20
    },
    textWhite: {
        color: 'white',
        fontSize: 17
    },

}

