import React, {Component} from 'react'
import { 
    View, Image, Text, Dimensions
 } from "react-native";
import {Rating} from 'react-native-elements'

const {height, width} = Dimensions.get('window')

 export default class ItemHotel extends Component {
    constructor(props){
        super(props)
    }

    ratingCompleted(){

    }

     render() {
         return (
             <View style = {{margin:3, height:100, width:width-10,flexDirection: 'row', backgroundColor:'#fff', borderRadius:5}}>
                    <View style={{height:95, width:95, margin:2.5}}>
                        <Image
                            source={{uri:this.props.image}}
                            style={{height:95, width:95}}
                        />
                    </View>
                    <View style = {{flex:1}}>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Text>{this.props.title}</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <Rating
                                    //showRating
                                    type="star" 
                                    fractions={1}
                                    startingValue={this.props.rating}
                                    ratingColor = "red"
                                    imageSize={10}
                                    onFinishRating={this.ratingCompleted}
                                    style={{marginTop:5 }}
                                />
                            <Text>{this.props.vote}</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row',}}>
                            <Text>Hotel star</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row',}}>
                            <Text>Per night</Text>
                        </View>
                            
                    </View>
             </View>
         );
     }
 }