import React, { Component } from 'react'
import { 
    View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity
} from "react-native";
import ItemThingsToDo from './ItemFlatsList/ItemThingsToDo';
export default class ThingsToDo extends Component {
    constructor(props){
        super(props)
        this.state  = {
            listThings:[{
                title: 'gfhjsdyfsdvfg',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },{
                title: 'grt',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'rthyg',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'wrfg',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'ikuh',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'ku7ygk',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'tyjk',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'rstht',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
        ]
        }
    }
  render() {
    return (
        <ScrollView>
            <TouchableOpacity>
                <View style = {styles.containerTopBody}>
                    <Image
                        source={require('../../../../../Resource/CreateTripPlan/addPlaceandMap/clock.png')}
                        style={styles.imageClock}
                    />
                    <Text>
                        Add free time
                    </Text>
                </View>
            </TouchableOpacity>
            
            <View style={styles.containerStick}>
                <Text style = {styles.textStick}>Ngay 1</Text>
            </View>
            <View style={styles.containerFlatList}>
               <FlatList
                    data = {this.state.listThings}
                    keyExtractor = {(item)=>(item.toString())}
                    renderItem ={({item})=>(
                        <ItemThingsToDo
                            title = {item.title}
                            image = {item.image}
                            rating  = {item.rating}
                            rank = {item.rank}
                            per_night = {item.per_night}
                            vote = {item.vote}
                            />
                    )}
                ></FlatList>
            </View>
            <View style={styles.containerStick}>
                <Text style = {styles.textStick}>Ngay 2</Text>
            </View>
            <View style={styles.containerFlatList}>
               <FlatList
                    data = {this.state.listThings}
                    keyExtractor = {(item)=>(item.toString())}
                    renderItem ={({item})=>(
                        <ItemThingsToDo
                            title = {item.title}
                            image = {item.image}
                            rating  = {item.rating}
                            rank = {item.rank}
                            per_night = {item.per_night}
                            vote = {item.vote}
                            />
                    )}
                ></FlatList>
            </View>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    containerTopBody:{
        flex:1,
        flexDirection: 'row',
        alignItems:"center"
    },
    imageClock:{
        width:20,
        height:20,
        margin:5,
        marginLeft: 10,
    },
    containerStick:{ 
        backgroundColor:'blue', 
        width:50, borderRadius:3, 
        justifyContent: 'center', 
        alignItems:'center', 
        zIndex:2
    },
    textStick: {
        color:'#fff'
    },
    containerFlatList: {
        alignItems:'center', 
        marginTop:-10, 
        zIndex:1
    },

})