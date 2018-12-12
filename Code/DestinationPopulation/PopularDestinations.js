import React, { Component } from 'react';
import { 
    View, Text, ImageBackground, ScrollView, TouchableOpacity, FlatList, StyleSheet
 } from "react-native";
 import  Icon  from "react-native-vector-icons/FontAwesome";
 import ItemDestinations from './FlatListItem/ItemDestinations'

 const datasourceDestinations = [
    {
        image: 'https://mochilerosentailandia.com/wp-content/uploads/2016/07/Halong-Bay.jpg',
        title: 'Hạ Long',
        description: 'Hon Ngoc'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Da Nang',
        description: 'Bien hat'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Hoi An',
        descripstion:'Ngay xua cu'
    },
    {
        image: 'https://mochilerosentailandia.com/wp-content/uploads/2016/07/Halong-Bay.jpg',
        title: 'Hạ Long',
        description: 'Hon Ngoc'
    },
    {
        image: 'https://triphunter.vn/media/W1siZiIsIjIwMTYvMDMvMDUvMmp1dmg0dGljOV8xMjU5MjIyN18xMDE2NTE5MTc1MDU2MjQzXzU4MTU2MDUzNTc3NDIxMzQ0NzNfbi5qcGciXSxbInAiLCJ0aHVtYiIsIjY0MHg0ODBcdTAwM2UiXV0/12592227_1016519175056243_5815605357742134473_n.jpg?sha=c82aa868012d0f4a',
        title: 'Da Nang',
        description: 'Bien hat'
    },
]

 export default class PopularDestinations extends Component {

    

    onPressItem(){
        this.props.navigation.navigate('DaLatDestinations_')

    }
    render() {
         return (
             <View style={styles.container}>
             
                <ImageBackground source ={require('../../Resource/CreateTripPlan/Finish/Logo.png')} style={styles.imageBackground}>
                    <View style={styles.containerHeader}>
                        <TouchableOpacity 
                                style={styles.touchableOpacity}
                                onPress={()=> {this.props.navigation.goBack()}}>
                            <Icon
                                name='long-arrow-left'
                                size={20}
                                style={styles.iconStyle}
                            />
                        </TouchableOpacity>
                        
                        <Text style={styles.titleHeader}>Điểm đến phổ biến</Text>
                    </View>
                    
                </ImageBackground>
                <ScrollView style={styles.scrollView}>
                    <FlatList
                        data={datasourceDestinations}
                        renderItem = {({item}) =>(
                            <TouchableOpacity onPress={()=>{this.onPressItem()}}>
                                <ItemDestinations
                                title = {item.title}
                                image = {item.image}
                                description = {item.description}
                            />
                            </TouchableOpacity>
            
                        )}
                        keyExtractor={item => item.title}
                    />
                </ScrollView>
             </View>
             
         );
     }
 }

 const styles = StyleSheet.create({
     container:{
         flex:1
        },
    imageBackground:{
        height:100, 
        width:'100%',
        paddingTop:55,
    },
    containerHeader:{
        flex:1, 
        flexDirection:'row', 
        alignItems:'center', 
        marginHorizontal:5, 
        height:30
    },
    touchableOpacity: {
        height:20, 
        width:30, 
        borderRadius:20
    },
    titleHeader:{
        color:'white', 
        fontSize:20, 
        marginHorizontal:20
    },
    scrollView: {
        flex:2, 
        backgroundColor:'white', 
        width:'100%', 
        padding:15
    },
    iconStyle: {
        color:'#fff'
    }
 })