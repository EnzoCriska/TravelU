import React, { Component } from 'react';

import { ScrollView, TouchableHighlight, Platform, StyleSheet, Text, View, Image, ImageBackground, TextInput, DeviceEventEmitter } from 'react-native';

export default class SignInEmail extends Component {
    _onpressSignUp() {
       
        this.props.navigation.navigate('SingUp_')
    }
    _onpressSignIn(){
        this.props.navigation.navigate('Home_')
    }
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <ImageBackground source={require('../../Resource/SignIn/Logo.png')}
                        style={styles.imageLogo}>
                    </ImageBackground>
                    <View style={styles.addLogin}>

                        <Text style={styles.textLogin}>Username :</Text>
                        <TextInput style={styles.input} placeholder='example@email.com'></TextInput>

                        <Text style={styles.textLogin}>Password :</Text>
                        <TextInput style={styles.input} placeholder='********'></TextInput>

                        <Text style={styles.forgotpasswod}>Forget your password </Text>

                        <TouchableHighlight style={[styles.buttonLogin,shadow]} onPress={()=>this._onpressSignIn()}>
                            <ImageBackground source={require('../../Resource/SignIn/ButtonLogin.png')}
                                style={styles.imageButtonLogin}>
                            </ImageBackground>
                        </TouchableHighlight>
                    <View style={{flex:1 , flexDirection:'row'}} >
                    <Text style={{marginTop:30}} onPress={()=>this._onpressSignUp()}>Don't have an Acount ?</Text>
                    <Text style={{marginTop:30,color:'blue'}}>SignUp</Text>
                    </View>    
                    </View >


                </View>
            </ScrollView>
           

        );
    }
}
const shadow = {
    shadowColor: '#30C1DD',
    shadowRadius: 10,
    shadowOpacity: 0.9,
    elevation: 8,
    
  }
const styles = {
    imageLogo: {
        flex: 3,
        height: 176,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textLogin: {
        marginRight: 'auto',
        margin: 20,

    },
    addLogin: {
        flex: 7,
        alignItems: 'center',
        height: 428,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: -30,
        borderRadius: 25,

    },
    forgotpasswod: {
        marginLeft: 'auto',
        marginRight: '5%',
        marginTop: 30,
        textDecorationLine: 'underline'
    },
    buttonLogin: {
        borderRadius:24,
        marginTop: 20,
        width: 166,
        height: 47,

    },
    imageButtonLogin:{
        width: 166,
        height: 47
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        width: '90%',
        height: 40,
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    }
}