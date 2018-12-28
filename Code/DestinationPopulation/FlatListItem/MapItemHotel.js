import React, {Component} from 'react'
import { 
    View, Image, Text, Dimensions, StyleSheet
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
                            <Text>{this.props.distance} Km</Text>
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
                        <View style={styles.containerRank}>
                            <Text>Hotel star: {this.props.rank} </Text>
                        </View>
                        <View style={styles.containerPernight}>
                            <Text>Per night: {this.props.per_night}</Text>
                        </View>
                            
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
         borderRadius:5
        },
        containerPreview:{
            height:95, 
            width:95, 
            margin:2.5
        },
        imagePreview:{
            height:95, 
            width:95
        },
        containerContent:{
            flex:1, 
            padding:10
        },
        containerTitle:{
            flex:1, 
            flexDirection:'row', 
            justifyContent:'space-between'
        },
        title:{
            fontWeight: 'bold', 
            fontSize:16
        },
        containerRating:{
            flex:1, 
            flexDirection:'row'
        },
        containerRank:{
            flex:1, 
            flexDirection:'row',
        },
        containerPernight:{
            flex:1, 
            flexDirection:'row',
        }


 })