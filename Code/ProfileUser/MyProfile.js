import React, { Component } from 'react'
import { 
    View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image
 } from "react-native";
import { Avatar, Icon } from "react-native-elements";

export default class MyProfile extends Component {
    constructor(props){
        super(props)
        this.state = {
            userID: "Tuyen 3d",
            avatarImg : 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        }
    }
  render() {
    return (
      <View style = {styles.container}>

            <View style={styles.containerHeader}>
                <ImageBackground
                    source={require('../../Resource/ProfileUser/MyProfile/logo.png')}
                    style={styles.imageBackgroundHeader}>
                    <Text style={styles.titleHeader}>My Profile</Text>

                </ImageBackground>
            </View>

            <View style={styles.containerMyProfile}>
                <View style={styles.containerAvatar}>
                    <Avatar
                        large
                        rounded
                        source={{uri: this.state.avatarImg}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                </View>
                <View style={styles.containerDescription}>
                    <Text style={styles.userName}>{this.state.userID}</Text>
                    <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate('MyDetailPr5_')}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body}>

                {/* Add a place */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/hospital-placeholder.png')}
                            style={styles.iconStyle}
                            
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>Add a place</Text>
                        <TouchableOpacity 
                            onPress={()=> console.log("go...")}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* My Love */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/heart.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>My Love</Text>
                        <TouchableOpacity 
                            onPress={()=> console.log("go...")}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Rate TravelIU */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/star.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>Rate TravelIU</Text>
                        <TouchableOpacity 
                            onPress={()=> console.log("go...")}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Find Friends */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/friends.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>Find Friends</Text>
                        <TouchableOpacity 
                            onPress={()=> console.log("go...")}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Download Plan */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/cloud-download.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>Download Plan</Text>
                        <TouchableOpacity 
                            onPress={()=> console.log("go...")}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Download Place */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/download-symbol.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>Download Place</Text>
                        <TouchableOpacity 
                            onPress={()=> console.log("go...")}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Setting */}
                <View style={styles.menu}>
                    <View>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/settings-work-tool.png')}
                            style={styles.iconStyle}
                        />
                    </View>
                    <View style={styles.containerDescription}>
                        <Text>Setting</Text>
                        <TouchableOpacity 
                            onPress={()=> this.props.navigation.navigate('OtherUser_')}>
                            <Icon
                                name='chevron-right'
                                color='grey'
                                type='font-awesome'
                                size={18}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerHeader:{
        height:100,
        width:'100%'
    },
    imageBackgroundHeader:{
        height:100,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center',
    },
    titleHeader:{
        marginTop:40,
        fontSize:16,
        color:'#fff'
    },
    containerMyProfile:{
        height:100,
        width:'100%',
        flexDirection: 'row',
        backgroundColor:'#fff',
        padding: 10,
        marginBottom: 5,
    },
    containerAvatar:{
        height:80,
        width:80,
        justifyContent: 'center',
        alignItems:'center'
    },
    containerDescription:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginLeft: 10,
    }, 
    userName:{
        fontSize:16,
        margin:10
    },
    body:{
        
    },
    menu:{
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        marginBottom:2
    },
    iconStyle:{
        width:20,
        height:20,
        resizeMode: 'contain'
    }
})