import React, { Component } from 'react'
import { 
    View, Text, Image, StyleSheet, Dimensions, TouchableOpacity
 } from "react-native";
 import {Rating} from 'react-native-elements'

 const{width, height} = Dimensions.get('window')
export default class ItemLocation extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <View style={{flex:1}}>
            <Image source={{uri:this.props.image}}
                style={{height:95, width:95, margin:5}}
            />
        </View>
        <View style={{flex:2, margin:5}}>
            <Text style={{fontSize:16, fontWeight:'bold', marginLeft:10}}>{this.props.title}</Text>
            <View style={{flex:1, flexDirection:'row', marginLeft:10}}>
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
                            <Text>({this.props.vote} vote)</Text>
                        </View>
        </View>
        <View style = {{flex:1, alignItems:'flex-end', margin:5, justifyContent:'space-between'}}>
            <Text>{this.props.distance}</Text>
            <TouchableOpacity>
                <View style = {styles.button}>
                    <Text style={{color:"#fff"}}>Thêm</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    container:{
        height:100, 
        width:width-20, 
        flexDirection:'row', 
        backgroundColor:'#fff', 
        borderRadius:5,
        margin:5
    }, button: {
        height:30, 
        width:50, 
        borderRadius:5, 
        backgroundColor:'#59BAF8', 
        alignItems:'center', 
        justifyContent:'center'
    },

})
