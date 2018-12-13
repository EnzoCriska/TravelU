import React, { Component } from 'react'
import { 
    View, Text, TouchableHighlight, Image, StyleSheet, Dimensions
} from "react-native";
import {Rating} from 'react-native-elements'

const {height, width} = Dimensions.get('window')

export default class ItemThingsToDo extends Component {
  render() {
    return (
        <View style = {styles.container}>
                    <View style={styles.containerPreview}>
                        <Image
                            source={{uri:this.props.image}}
                            style={styles.imagePreview}
                        />
                    </View>
                    <View style = {styles.containerContent}>
                        <View style={styles.containerTitle}>
                            <Text style={styles.title}>{this.props.title}</Text>
                        </View>
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
                        <View style = {{flex:2}}>
                            <Text>Hotel Star: {this.props.rank}</Text>
                            <Text>Per night: {this.props.per_night} d</Text>
                        </View>
                            
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableHighlight
                            onPress={()=> console.log('add...')}>
                            <View style = {styles.button}>
                                <Text>Thêm</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
             </View>
         );
     }
 }

 const styles = StyleSheet.create({
    container:{
        margin:3, 
        height:100, 
        width:width-20,
        flexDirection: 'row', 
        backgroundColor:'#fff', 
        borderRadius:5,
        alignItems: 'center',
    },
    containerPreview:{
        height:95, 
        width:95, 
        margin:2.5
    },
    imagePreview: {
        height:95, 
        width:95
    },
    containerContent: {
        flex:2, 
        padding:10
    },
    containerButton:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    button:{
        height:30,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff234',
        borderRadius:5
    },
    containerTitle:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'space-between'
    },
    title: {
        fontWeight: 'bold', 
        fontSize:16
    },
    containerRating: {
        flex:1, 
        flexDirection:'row'
    }
 })