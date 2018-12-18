import React, { Component } from 'react'
import { 
    Text, View, ScrollView, ImageBackground, StyleSheet, TouchableOpacity, Image, FlatList
} from 'react-native'
import  Icon  from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import ItemPost from './ItemPostProfileDetail/ItemPost';


export default class MyProfileDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            userID: 'Tuyen 3d',
            avatarImg: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cAwpJwIR9di4YOHE37IiruBf0f_g4OPslDZvJtM3rZKZcTgtEA',
            follower: 125,
            following:150,
            review:321,
            photos:12,
            likes: 3,
            point:100,
            posts:[
                {   
                    userPost: "Tuyen 3d",
                    avatarUserPost:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    image:'https://www.vntrip.vn/cam-nang/wp-content/uploads/2015/12/20170104081344-cho-dem-dl-gody-17-e1504261240156.jpg',
                    time: '15th Apr 2018',
                    title: 'Chợ đêm Đà Lạt',
                    address:'Đà Lạt, Lâm Đồng',
                    rating:4,
                    description: 'Đà Lạt là một thành phố trực thuộc tỉnh và tỉnh lị của tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, ở độ cao 1500m so với mặt nước biển và diện tích tự nhiên 393,29km2.'
                },
                {
                    userPost: "Tuyen 3d",
                    avatarUserPost:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7vf2LFvgSCJ4gKGwPbaT1HHhfHI2Miui2BBFHhuo7o2BfPAmZw',
                    time: '15th Apr 2018',
                    title: 'Disney land',
                    address:'Đà Lạt, Lâm Đồng',
                    rating:4,
                    description: 'Đà Lạt là một thành phố trực thuộc tỉnh và tỉnh lị của tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, ở độ cao 1500m so với mặt nước biển và diện tích tự nhiên 393,29km2.'
                }
            ]
        }
    }

    _renderItem({item}){
        return(
            <TouchableOpacity
                onPress={()=>console.log('Item click...')}>
                <ItemPost
                    user = {item.userPost}
                    userAva = {item.avatarUserPost}
                    time = {item.time}
                    image = {item.image}
                    title = {item.title}
                    address = {item.address}
                    rating = {item.rating}
                    description = {item.description}
                />
            </TouchableOpacity>          
        )
    }

  render() {
    return (
      <ScrollView>
        <ImageBackground
            source={{uri:this.state.coverImg}}
            style={styles.coverBackground}>
            <View style={styles.HeaderTopContainer}>
                <TouchableOpacity
                    onPress={()=> this.props.navigation.goBack()}>
                    <Icon
                        name='long-arrow-left'
                        size={20}
                        style={{color:'white'}}
                    />
                </TouchableOpacity>
                <View style={styles.TitleHeader}>
                    <Text style={styles.titleContent}>{this.state.userID}</Text>
                    <TouchableOpacity
                        onPress={()=> console.log('go setting...')}>
                        <Image
                            source={require('../../Resource/ProfileUser/MyProfile/settings-work-tool_white.png')}
                            style={styles.iconSetting}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.HeaderBottomContainer}>
            </View>
        </ImageBackground>
        <View style={styles.bodyContainer}>
            <View style = {styles.containerAvatar}>
                <Avatar
                    large
                    rounded
                    source={{uri: this.state.avatarImg}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />
            </View>

            <View style = {styles.interactionsUser}>
                <View style = {styles.interactionRow}>
                    
                    <View style = {styles.cell}>
                        <TouchableOpacity style = {styles.touchableStyle}>
                            <Text style={styles.number}>{this.state.follower}</Text>
                            <Text style = {styles.attribute}>Follower</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {styles.centerCell}>
                        <TouchableOpacity style = {styles.touchableStyle}>
                            <Text style={styles.number}>{this.state.following}</Text>
                            <Text style = {styles.attribute}>Following</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {styles.cell}>
                        <TouchableOpacity style = {styles.touchableStyle}>
                            <Text style={styles.number}>{this.state.review}</Text>
                            <Text style = {styles.attribute}>Review</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {styles.interactionRowBottom}>
                    
                    <View style = {styles.cell}>
                        <TouchableOpacity style = {styles.touchableStyle}>
                            <Text style={styles.number}>{this.state.photos}</Text>
                            <Text style = {styles.attribute}>Photos</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {styles.centerCell}>
                        <TouchableOpacity style = {styles.touchableStyle}>
                            <Text style={styles.number}>{this.state.likes}</Text>
                            <Text style = {styles.attribute}>Likes</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style = {styles.cell}>
                        <TouchableOpacity style = {styles.touchableStyle}>
                            <Text style={styles.number}>{this.state.point}</Text>
                            <Text style = {styles.attribute}>Points</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style = {styles.listPost}>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.toString()}
                    renderItem={(item)=>this._renderItem(item)}
                />
            </View>
            
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    coverBackground:{
        height:150,
        width:'100%',
           
    },
    HeaderTopContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    HeaderBottomContainer:{
        flex:1
    },
    TitleHeader:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleContent:{
        color:'#fff',
        fontSize: 18,
        marginHorizontal: 20,
    },
    iconSetting:{
        width:15,
        height:15,
    },
    bodyContainer:{
        flex:1,
        width:'100%',
        backgroundColor:'#fff',
        borderRadius: 10,
        marginTop:-10,
        alignItems:'center'
    },
    containerAvatar:{
        marginTop:-30
    },
    interactionsUser:{
        width:'100%',
        height:120,
        marginTop:10
    },
    interactionRow:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
    },
    interactionRowBottom:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:50,
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
    },
    cell:{
        justifyContent:'center',
        alignItems:'center',
        width:120,
    },
    centerCell:{
        justifyContent:'center',
        alignItems:'center',
        width:120,
        borderRightColor: 'grey',
        borderLeftColor: 'grey',
        borderRightWidth: 1,
        borderLeftWidth: 1
    },
    number:{
        color: 'black',
        fontSize:18,
        fontWeight: 'bold',
    },
    attribute:{
    },
    listPost:{
        width:'100%',
        alignItems:'center'
    },
    touchableStyle:{
        justifyContent:'center',
        alignItems:'center'
    }
})