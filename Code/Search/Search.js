import React, { Component } from 'react';

import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    TextInput
} from 'react-native';


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSearched: [{ name: 'Hà Giang', description: 'Cung đường sung sướng' },
            { name: 'Vũng Tàu', description: 'Thiên đường Hải Sản' },],

            dataLocation: [{ name: 'Hà Giang', description: 'Cung đường sung sướng' },
            { name: 'Vũng Tàu', description: 'Thiên đường Hải Sản' },
            { name: 'Tạ Hiện', description: 'Thiên đường bia' },
            { name: 'Đà Lạt', description: 'Thành Phố mộng mơ' }]
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.logo}>
                    <ImageBackground style={styles.imageLogo} source={require('../../Resource/search/logo/Logo.png')}>
                        <View style={styles.parrentBackInput}>

                            <TouchableHighlight >
                                <Image source={require('../../Resource/search/logo/iconBack.png')}
                                    style={{ width: 24, height: 9, marginLeft: 10 }} />
                            </TouchableHighlight>

                            <View style={styles.inputParent}>
                                <TextInput style={styles.inputText}
                                    placeholder='Find Destinations, hotels, restaurants...'></TextInput>

                                <TouchableHighlight>
                                    <Image source={require('../../Resource/search/icon/Find.png')}
                                        style={styles.iconSearch}></Image>
                                </TouchableHighlight>

                            </View>
                        </View>


                    </ImageBackground>
                </View>

                <View style={styles.viewNear}>
                    <View style={{ width: '90%', marginVertical: 14 }}>
                        <TouchableHighlight style={[styles.touchable, shadow]}  >
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../Resource/search/icon/location.png')} style={styles.iconLocation}></Image>
                                <View style={styles.viewText}>
                                    <Text>Địa điểm gần bạn</Text>
                                </View>
                            </View>

                        </TouchableHighlight>

                        <TouchableHighlight style={[styles.touchable, shadow]} >
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../Resource/search/icon/gps.png')}
                                    style={styles.iconGPS} />

                                <View style={styles.viewText}>
                                    <Text>Hà Nội</Text>
                                </View>
                            </View>

                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.viewSpace}>
                    <Text style={{ marginLeft: '5%' }}> Địa điểm đã tìm</Text>
                    <Text style={styles.textDelete}>Xóa</Text>
                </View>

                <View style={styles.viewSearchedParents}>
                    <FlatList
                        style={{ width: '100%' }}
                        showsVerticalScrollIndicator={false}
                        data={this.state.dataSearched}
                        renderItem={({ item }) =>
                            (<View style={styles.viewSearched}>
                                <Image style={styles.iconPin}
                                    source={require('../../Resource/search/icon/pin.png')}>
                                </Image>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                            </View>)
                        }
                    />
                </View>

                <View style={styles.viewSpace}>
                    <Text style={{ marginLeft: '5%' }}> Địa điểm Phổ Biến</Text>
                </View>

                <View style={styles.viewPopular}>
                    <FlatList
                        style={{ width: '100%' }}
                        showsVerticalScrollIndicator={false}
                        data={this.state.dataLocation}
                        renderItem={({ item }) =>
                            (<View style={styles.viewSearched}>
                                <Image style={styles.iconLocation}
                                    source={require('../../Resource/search/icon/location.png')}>
                                </Image>
                                <View style={{ marginLeft: 10 }}>
                                    <Text>{item.name}</Text>
                                    <Text>{item.description}</Text>
                                </View>
                            </View>)
                        }
                    />
                </View>


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
   
    imageLogo: {
        flex: 1,
        alignItems: 'center',
        height: 91,
        width: '100%'
    },
    inputParent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        // marginTop: 38,
        marginLeft: 'auto',
        marginRight: '10%',
        width: '80%',
        height: 41,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    inputText: {
        width: '90%',
        height: '100%',
    },
    iconSearch: {
        width: 17.5,
        height: 17.5
    },   
    iconLocation: {
        marginLeft: 20,
        width: 12.5,
        height: 17.8
    },
    iconPin: {
        marginLeft: 20,
        width: 9.4,
        height: 18.5
    },
    iconGPS: {
        marginLeft: 20,
        width: 16.6,
        height: 16.7
    },
    logo: {
        alignItems: 'center',
        height: 91,
        width: '100%'
    },
    parrentBackInput: {
        marginTop: 38,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    touchable: {
        width: '100%',
        height: 46,
        margin: 2,
        borderRadius: 5,
        justifyContent: 'center',
    },
    textDelete: {
        color: '#FF0000',
        marginLeft: 'auto',
        marginRight: '5%'
    },
    viewText: {
        width: '90%',
        marginLeft: 10
    },
    viewSpace: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 39
    },
    viewSearched: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 63.5,
        backgroundColor: 'white',
        marginBottom: 0.5
    },
    viewNear: {
        alignItems: 'center',
        height: 125,
        width: '100%',
        backgroundColor: 'white',
    },
    viewPopular: {
        alignItems: 'center',
        height: 255,
        width: '100%',
    },
    viewSearchedParents: {
        alignItems: 'center',
        height: 125,
        width: '100%',
    },

}

