import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    FlatList,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';

export default class Place extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{ source: require('../../Resource/CreateTripPlan/Place/DataImage/day1.png'), date: "24/12/2018", sumplace: 1, index: 1 },
            { source: require('../../Resource/CreateTripPlan/Place/DataImage/day2.png'), date: "25/12/2018", sumplace: 1, index: 2 },
            { source: require('../../Resource/CreateTripPlan/Place/DataImage/day3.png'), date: "26/12/2018", sumplace: 1, index: 3 }]
        }
    }
    onpressNextSteep() {
        this.props.navigation.navigate('Finish_')
    }
    onpressDayOne() {
        this.props.navigation.navigate('StackRoute_')
    }
    render() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ImageBackground
                    source={require('../../Resource/CreateTripPlan/Place/logo.png')}
                    style={styles.logoImage}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />

                        <View style={{ flex: 1 }}>
                            <View style={styles.parentTitle}>
                                <TouchableHighlight
                                    style={{ width: 50, height: '100%', justifyContent: 'center' }}
                                    onPress={() => goBack()}>

                                    <Image source={require('../../Resource/CreateTripPlan/Place/back.png')}
                                        style={styles.iconBack} />
                                </TouchableHighlight>

                                <Text style={styles.textTitle}>3 days to Đà Lạt</Text>

                                <TouchableHighlight style={{ marginLeft: 'auto', marginRight: '4%' }}>
                                    <Image
                                        source={require('../../Resource/CreateTripPlan/Place/addHuman.png')}
                                        style={styles.iconAddHuman} />
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.viewBudget}>
                    <TouchableHighlight
                        style={{ marginLeft: '4%' }}
                    >
                        <Image
                            source={require('../../Resource/CreateTripPlan/Place/budget.png')}
                            style={styles.iconBudget} />
                    </TouchableHighlight>

                    <Text style={styles.textAddBudget}> Thêm Budget...</Text>
                </View>

                <View></View>

                <FlatList
                    keyExtractor={(item) => item.toString()}
                    style={{ width: '100%', }}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.onpressDayOne()}
                        >
                            <View style={styles.viewItem}>
                                <ImageBackground
                                    source={item.source}
                                    style={styles.imageItem}
                                >
                                    <View style={{ flex: 1, marginBottom: 15, marginLeft: 15 }}>
                                        <View style={{ flex: 2 }} />

                                        <View style={{ flex: 1, width: '100%' }}>
                                            <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                                                <View style={styles.viewDescriptionItem}>
                                                    <Text style={{ fontSize: 12, color: '#000' }}>Ngày {item.index}</Text>
                                                </View>

                                                <View style={styles.viewDescriptionItem}>
                                                    <Text style={{ fontSize: 12, color: '#000' }}>{item.sumplace} địa điểm</Text>
                                                </View>
                                            </View>

                                            <View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                                <Text style={[styles.textWhite, { marginLeft: '4%' }]}>
                                                    {item.date}
                                                </Text>

                                                <View style={{ marginLeft: 'auto', marginRight: 20, flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image
                                                        style={styles.iconLocation}
                                                        source={require('../../Resource/CreateTripPlan/Place/location.png')} />

                                                    <Text style={{ marginLeft: 10, fontSize: 13, color: '#FFF' }}>Mở bản đồ</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    )}
                />

                <TouchableHighlight
                    style={{ width: '100%' }}
                    onPress={() => this.onpressNextSteep()}
                >
                    <Image
                        style={styles.touchableNextSteep}
                        source={require('../../Resource/CreateTripPlan/Place/nextsteep.png')} />
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = {
    logoImage: {
        width: '100%',
        height: 90,
    },
    iconBack: {
        width: 50,
        height: '100%'
    },
    iconLocation: {
        width: 13,
        height: 18,
    },
    iconAddHuman: {
        width: 21,
        height: 21,
    },
    iconBudget: {
        width: 16,
        height: 16
    },
    imageItem: {
        width: '100%',
        height: 150
    },
    parentTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 18,
        color: '#FFF',
    },
    textWhite: {
        color: '#FFF',
        fontSize: 14
    },
    textAddBudget: {
        color: '#9F9F9F',
        marginLeft: '4%',
        fontSize: 14
    },
    touchableNextSteep: {
        height: 50,
        width: '100%',

    },
    viewBudget: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        backgroundColor: '#F3F5F9',
        flexDirection: 'row'
    },
    viewItem: {
        marginTop: 15,
        width: '100%',
        alignItems: 'center'
    },
    viewDescriptionItem: {
        marginLeft: '4%',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 3,
        height: 18,
        borderRadius: 9,
        backgroundColor: '#FFF'
    }
}