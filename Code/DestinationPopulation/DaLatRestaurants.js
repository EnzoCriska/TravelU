import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, FlatList } from 'react-native';
import ItemRestaurant from './FlatListItem/ItemRestaurants';

export default class DaLatRestaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    image: require('../../Resource/Denistation/Dalat/Restaurants/1.png'),
                    name: "Le Chale Da Lat",
                    rating: 4,
                    vote: 190,
                    long: 1048.2
                }, {
                    image: require('../../Resource/Denistation/Dalat/Restaurants/2.png'),
                    name: "Phôi pha coffe",
                    rating: 4,
                    vote: 190,
                    long: 1048.2
                }, {
                    image: require('../../Resource/Denistation/Dalat/Restaurants/3.png'),
                    name: "Nhà hàng Xu's food",
                    rating: 4,
                    vote: 190,
                    long: 1048.2
                }, {
                    image: require('../../Resource/Denistation/Dalat/Restaurants/4.png'),
                    name: "Zen Diamond Suites Luxury Hotel",
                    rating: 4,
                    vote: 190,
                    long: 1048.2
                }
            ]
        };
    }
    btnGoBack(){
        this.props.navigation
    }

    render() {
        const{goBack}= this.props.navigation
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.imgLogo}
                    source={require('../../Resource/DataImages/imgLogo90.png')}
                >
                    <View style={{ flex: 1, width: '100%' }}>
                        <View style={{ flex: 1 }}></View>

                        {/* View in logo include button back, search, map */}
                        <View style={styles.viewToolBar}>
                            <TouchableOpacity style={styles.btnBack} 
                                onPress={()=>goBack()}
                            >
                                <Image style={styles.imgBack}
                                    source={require('../../Resource/DataImages/imgBack.png')}
                                >
                                </Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnSearch} >
                                <Image style={styles.imgSearch}
                                    source={require('../../Resource/DataImages/imgSearch.png')}
                                >
                                </Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnMap} >
                                <Image style={styles.imgSearch}
                                    source={require('../../Resource/DataImages/imgMap.png')}
                                >
                                </Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.viewFilter}>
                    <Text style={styles.txtSortBy}> Sort by: Popular</Text>

                    <TouchableOpacity style={styles.btnFilter}>
                        <Image style={styles.imgFilter}
                            source={require('../../Resource/DataImages/imgFilter.png')}
                        >
                        </Image>
                    </TouchableOpacity>

                    <Text style={styles.txtFilter}>Filter</Text>
                </View>

                <FlatList
                    keyExtractor={(item) => item.toString()}
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <ItemRestaurant
                            name={item.name}
                            vote={item.vote}
                            long={item.long}
                            rating={item.rating}
                            image={item.image}


                        />
                    }
                />


            </View>
        );
    }
}
const styles = {
    btnBack: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 46,
        height: 46
    },
    btnFilter: {
        marginLeft: 'auto',
        height: '100%',
        width: '8%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSearch: {
        width: 24,
        height: 24,
        marginLeft: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnMap: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 25,
        marginRight: 16,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imgBack: {
        width: 24,
        height: 10
    },
    imgLogo: {
        height: 90,
        width: '100%'
    },
    imgMap: {
        width: 19,
        height: 19
    },
    imgSearch: {
        width: 17,
        height: 17
    },
    imgFilter: {
        width: 17,
        height: 14
    },
    txtSortBy: {
        marginLeft: '5%',
        color: '#7F8B9A',
        fontSize: 14
    },
    txtFilter: {
        color: '#ED50C6',
        fontSize: 14,
        marginRight: '5%'
    },
    viewToolBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewFilter: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
    },

}
