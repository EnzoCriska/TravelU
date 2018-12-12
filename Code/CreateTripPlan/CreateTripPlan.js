import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Switch,
    TouchableHighlight,
    Text,
    Image,
    TextInput
}from 'react-native';
import {
    createStackNavigator
}from 'react-navigation';

export default class CreateTripPlan extends Component {
    gray = '#9E9E9E';
    _onpressPickDate() {
        this.props.navigation.navigate('PickDate_')
    }
    _onpressNextSteep(){
        this.props.navigation.navigate('BookHotels_')
    }
    render() {
        const { goBack } = this.props.navigation.dispatch({ type: 'Navigation/BACK' });
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <View style={styles.logo}>
                    <ImageBackground source={require('../../Resource/CreateTripPlan/CreateTripPlan/logo.png')}
                        style={styles.logo}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                
                                    <TouchableHighlight onPress={() => goBack()} style={styles.touchableBack}
                                    >
                                    <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/back.png')}
                                        style={styles.iconBack} />
                                </TouchableHighlight>
                                <Text style={styles.textLogo}>Create Trip Plan</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

                <View style={[shadow, styles.parentPlanName]}>
                    <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/user.png')}
                        style={styles.iconUser}></Image>
                    <Text style={{ marginLeft: 20, color: this.gray }}> Plan name</Text>
                    <TextInput style={[styles.textBlack, { marginLeft: 'auto', marginRight: 18 }]}>
                        3 Days to Hà Giang from Hà Nội
                    </TextInput>
                </View>

                <View style={[styles.parentRoute, shadow]}>
                    <View style={{ flex: 11, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/route.png')}
                            style={styles.iconRoute}></Image>
                    </View>
                    <View style={{ flex: 89 }} >
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableHighlight >
                                <View style={styles.touchableToFrom}>
                                    <Text style={{ marginLeft: 20, color: this.gray }}>Từ</Text>
                                    <Text style={[styles.textBlack, { marginLeft: 'auto', marginRight: 11 }]}>Hà Nội</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableHighlight >
                                <View style={styles.touchableToFrom}>
                                    <Text style={{ marginLeft: 20, color: this.gray }}>Đến</Text>
                                    <Text style={{ marginLeft: 'auto', marginRight: 11, fontSize: 17, color: this.gray }}>Chọn điểm đến</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

                <TouchableHighlight style={{ marginTop: 10 }} onPress={() => this._onpressPickDate()}>
                    <View style={[styles.parentStartDay, shadow]}>
                        <View style={{ flex: 11, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/calendar.png')}
                                style={styles.iconCalendar}>
                            </Image>
                        </View>
                        <View style={{ flex: 89, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 10, color: this.gray }}>Ngày bắt đầu</Text>
                            <Text style={[{ marginLeft: 'auto', marginRight: 11, fontSize: 17 }, styles.textBlack]}>23/10/2018</Text>
                        </View>
                    </View>

                </TouchableHighlight>

                <TouchableHighlight style={{ marginTop: 5 }} onPress={() => this._onpressPickDate()}>
                    <View style={[styles.parentEndDay, shadow]}>
                        <View style={{ flex: 11, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/calendar.png')}
                                style={styles.iconCalendar}>
                            </Image>
                        </View>
                        <View style={{ flex: 89, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 10, color: this.gray }}>Ngày quay lại</Text>
                            <Text style={[{ marginLeft: 'auto', marginRight: 11, fontSize: 17 }, styles.textBlack]}>26/10/2018</Text>
                        </View>
                    </View>

                </TouchableHighlight>

                <TouchableHighlight style={{ marginTop: 5 }}>
                    <View style={[styles.parentLock, shadow]}>
                        <View style={{ flex: 11, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/lock.png')}
                                style={styles.iconLock}>
                            </Image>
                        </View>
                        <View style={{ flex: 89, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 10, color: this.gray }}>Private ?</Text>
                            <Text style={[{ marginLeft: 20 }, styles.textBlack]}>Mark a trip as private</Text>
                            <Switch
                                style={{ marginLeft: 'auto', marginRight: 11, fontSize: 17, width: 50 }}></Switch>
                        </View>
                    </View>

                </TouchableHighlight>

                <TouchableHighlight style={{ marginTop: 'auto',width:'100%' }} 
                onPress={()=>this._onpressNextSteep()}>
                    <Image source={require('../../Resource/CreateTripPlan/CreateTripPlan/nextsteep.png')}
                        style={styles.nextsteepButton} />
                </TouchableHighlight>
            </View>
        );
    }
};
const shadow = {
    shadowColor: '#999a9a',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 4,
}
const styles = {
    iconBack: {
        width: 50,
        height: '100%',

    },
    iconUser: {
        width: 17,
        height: 20,
        marginLeft: 10
    },
    iconRoute: {
        width: 16,
        height: 91
    },
    iconCalendar: {
        width: 16,
        height: 16
    },
    iconLock: {
        width: 14,
        height: 20
    },
    logo: {
        width: '100%',
        height: 90,
    },
    nextsteepButton: {
        width: '100%',
        height: 55,
    },
    parentPlanName: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 17,
        width: '95%',
        height: 50,
        borderRadius: 5
    },
    parentRoute: {
        marginTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '95%',
        height: 148,
        borderRadius: 5
    },
    parentStartDay: {
        backgroundColor: 'white',
        flexDirection: 'row',
        width: '95%',
        height: 46,
        borderRadius: 5
    },
    parentEndDay: {
        backgroundColor: 'white',
        width: '95%',
        flexDirection: 'row',
        height: 46,
        borderRadius: 5
    },
    parentLock: {
        backgroundColor: 'white',
        width: '95%',
        flexDirection: 'row',
        height: 46,
        borderRadius: 5
    },

    textLogo: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    textBlack: {
        color: 'black',
        fontSize: 16
    },
    touchableToFrom: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        height: 46,
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#9E9E9E'
    },
    touchableBack: {
        justifyContent: 'center',
        width: 50,
        height: '100%',

    },
}


