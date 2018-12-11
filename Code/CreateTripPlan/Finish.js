import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image, Switch, TouchableHighlight } from 'react-native';

export default class Finish extends Component {
    constructor(props) {
        super(props);
       
    }
    onpressBack() {
        this.props.navigation
    }
    onpressNextSteep() {
        this.props.navigation.navigate('MyTripPlans_')
    }

    render() {
        const { goBack } = this.props.navigation
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <ImageBackground source={require('../../Resource/CreateTripPlan/Finish/Logo.png')}
                    style={styles.imageLogo}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity style={styles.touchable}
                                onPress={() => goBack()}>
                                <Image style={styles.iconBack} source={require('../../Resource/CreateTripPlan/Finish/back.png')}
                                ></Image>
                            </TouchableOpacity>
                            <Text style={styles.textWhite}>3 days to Đà Lạt...</Text>
                        </View>
                    </View>
                </ImageBackground>

                <Image source={require('../../Resource/CreateTripPlan/Finish/Flight.png')} style={styles.imageFight}></Image>

                <Text style={styles.textSuccess}>Create Success</Text>

                <Text style={styles.textShare}>Share trip plan ?</Text>

                <View style={styles.viewButton}>
                    <Image source={require('../../Resource/CreateTripPlan/Finish/facebook.png')}
                        style={styles.iconFaceBook} />
                    <Image source={require('../../Resource/CreateTripPlan/Finish/gmail.png')}
                        style={styles.iconGmail} />
                </View>

                <View style={styles.viewDowloadTripPlan}>
                    <Text style={{ fontSize: 17, color: '#9E9E9E' }}>Dowload this plan?</Text>
                    <Switch style={styles.switchDowLoad} ></Switch>
                </View>

                <TouchableHighlight style={{ width: '100%', marginTop:'auto' }} onPress={()=>this.onpressNextSteep()}>
                    <Image source={require('../../Resource/CreateTripPlan/Finish/nextsteep.png')}
                        style={styles.nextsteepButton}></Image>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = {
    imageLogo: {
        width: '100%',
        height: 90
    },
    iconBack: {
        width: 24,
        height: 10
    },
    iconFaceBook: {
        width: 40,
        height: 40,
        resizeMode: 'stretch'
    },
    iconGmail: {
        width: 40,
        height: 40,
        marginLeft: 10,
        resizeMode: 'stretch'
    },
    imageFight: {
        marginTop: 50,
        width: '67%',
        height: 140,
    },
    nextsteepButton: {
        width: '100%',
        height: 55,
    },
    switchDowLoad: {
        marginLeft: 20
    },
    textWhite: {
        fontSize: 20,
        color: 'white'
    },
    textSuccess: {
        fontSize: 25,
        color: 'black'
    },
    textShare: {
        marginTop: 30,
        fontSize: 17,
        color: '#9E9E9E',
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '13%',
        height: '100%'
    },
    viewButton: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'row',
    },
    viewDowloadTripPlan: {
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
    },


}
