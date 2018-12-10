import React, {Component} from 'react'
import { 
    View, Image, Text
 } from "react-native";
import {Rating} from 'react-native-elements'



 export default class ItemHotel extends Component {
    constructor(props){
        super(props)
    }

    ratingCompleted(){

    }

     render() {
         return (
             <View style = {{margin:3, height:100, width:'98%',flexDirection: 'row', backgroundColor:'green'}}>
                    {/* <View style={{height:95, width:95, backgroundColor:'red'}}>
                        <Image
                            source={{uri:this.props.image}}
                        />
                    </View>]
                    <View style = {{flex:1, backgroundColor:'green'}}>
                        <View style={{flex:1, flexDirection:'row', backgroundColor:'blue'}}>
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
                        <View style={{flex:1, flexDirection:'row', backgroundColor:"red"}}>
                            <Text>Hotel star</Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row', backgroundColor:'pink'}}>
                            <Text>Per night</Text>
                        </View>
                            
                    </View> */}
             </View>
         );
     }
 }