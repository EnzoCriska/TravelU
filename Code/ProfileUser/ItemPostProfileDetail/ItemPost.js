import React, { Component } from 'react'
import { 
    Text, View, StyleSheet, Dimensions, ImageBackground, Image, TouchableOpacity
 } from 'react-native'
 import { Avatar, Rating} from "react-native-elements";
 import  Icon  from "react-native-vector-icons/FontAwesome";

const {width, height} = Dimensions.get('window')
export default class ItemPost extends Component {
  render() {
    return (
      <View style={[styles.container, shadow]}>
        <View style={styles.headerPost}>
            <View style={styles.containerAva}>
                <Avatar
                    small
                    rounded
                    source={{uri: this.props.userAva}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>
            <View style={styles.contentHeaderPost}>
                <Text>{this.props.user}</Text>
                <Text>{this.props.time}</Text>
            </View>
        </View>
        <ImageBackground
            source={{uri: this.props.image}}
            style = {styles.ImageItem}
            imageStyle={styles.ImageItemRadius}>
            <View style={styles.IBTop}>
                <TouchableOpacity
                    onPress={()=> console.log("popup")}>
                    <Icon
                        name="ellipsis-h"
                        color="#fff"
                        size={20}
                    />
                </TouchableOpacity>
                
            </View>
            <View style={styles.IBMid}>

            </View>
            <View style={styles.IBBottom}>
                <View>
                    <Image
                        source={require('../../../Resource/ProfileUser/MyProfile/location-pin.png')}
                        style={styles.icLocation}
                    />
                </View>
                <View style={styles.contentTitle}>
                    <View>
                        <Text style={styles.textTitle}>{this.props.title}</Text>
                        <Text style={styles.textAddress}>{this.props.address}</Text>
                    </View>
                    <Rating
                        type='custom'
                        ratingColor='#ff8000'
                        ratingBackgroundColor='rgba(26, 26, 26, 0.5)'
                        startingValue={this.props.rating}
                        imageSize={10}
                        type='star'
                        
                    />
                </View>
            </View>
        </ImageBackground>
        <View style={styles.descriptionContainer}>
            <Text>{this.props.description}</Text>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        width:width,
        padding:10
    },
    headerPost:{
        width:'100%',
        flexDirection:'row',
    },
    contentHeaderPost:{
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    containerAva:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    ImageItem:{
        height:180, 
        width:'100%',
    },
    ImageItemRadius:{
        borderTopLeftRadius:10,
        borderTopRightRadius: 10,
    },
    IBTop:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        margin:10
    },
    IBMid:{
        flex:2,
    },
    IBBottom:{
        flex:1,
        width:'100%',
        backgroundColor:'rgba(26, 26, 26, 0.5)',
        flexDirection:'row'
    },
    icLocation:{
        width:30,
        height:30,
        marginTop:5
    },
    contentTitle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:5
    },
    textTitle:{
        color:"#fff",
        fontWeight: 'bold',
    },
    textAddress:{
        color:'#fff',
        fontSize:12
    },
    descriptionContainer:{
        padding:5
    }
})

const shadow = {
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'red',
    shadowOffset: { height: 0, width: 0 },
}