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
        <View style={styles.containerLeft}>
            <Image source={{uri:this.props.image}}
                style={styles.imagePreview}
            />
        </View>
        <View style={styles.containerMid}>
            <Text style={styles.titleStyle}>{this.props.title}</Text>
            <View style={styles.containerRating}>
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
        <View style = {styles.containerRight}>
            <Text>{this.props.distance} Km</Text>
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
    },
    containerLeft:{
        flex:1
    },
    button: {
        height:30, 
        width:50, 
        borderRadius:5, 
        backgroundColor:'#59BAF8', 
        alignItems:'center', 
        justifyContent:'center'
    },
    imagePreview:{
        height:95, 
        width:95, 
        margin:5
    }, 
    titleStyle: {
        fontSize:16, 
        fontWeight:'bold', 
        marginLeft:10
    },
    containerRating:{
        flex:1, 
        flexDirection:'row', 
        marginLeft:10
    },
    containerRight: {
        flex:1, 
        alignItems:'flex-end', 
        margin:5, 
        justifyContent:'space-between',
        marginRight:10
    },
    containerMid: {
        flex:2, 
        margin:5}
})
