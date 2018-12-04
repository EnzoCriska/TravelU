import React, { Component } from 'react';

import {
    TextInput,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    ScrollView
} from 'react-native';
export default class SignUp extends Component {

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

                        <Text style={styles.textLogin}>Re-Password :</Text>
                        <TextInput style={styles.input} placeholder='********'></TextInput>

                    </View >
                    <View style={{alignItems:'center',marginTop:-23}}>
                    <TouchableHighlight style={styles.buttonLogin}>
                            <ImageBackground source={require('../../Resource/SignIn/ButtonLogin.png')}
                                style={styles.buttonLogin}>
                            </ImageBackground>
                        </TouchableHighlight>
                    </View>



                </View>
            </ScrollView>
        );
    }
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
        marginRight: 10,
        marginTop: 30,
        textDecorationLine: 'underline'
    },
    buttonLogin: {
        width: 166,
        height: 47,

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