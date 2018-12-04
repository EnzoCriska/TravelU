import React, { Component } from 'react';

import {
    Alert,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight
} from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props);
        
    }
    _onpress() {
        
        this.props.navigation.navigate('SignIn')
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>

                <ImageBackground source={require('../../Resource/Login/Background.png')}
                    style={styles.backgroundImage}>
                    
                        <Text style={styles.TextLogo}>TravelIu °</Text>
                        <Text style={{ color: 'white', marginTop: '5%' }}>Travel with people. Make new friends</Text>


                    <View style={{  marginTop: '23%' ,height:'60%', width:'100%', alignItems:'center' }}>
                        <TouchableHighlight style={{ height: '16%', width: '73%' }}>
                            <Image source={require('../../Resource/Login/ButtonFaceBook.png')}
                                resizeMode='stretch'
                                style={{ height: '100%', width: '100%' }}>
                            </Image>
                        </TouchableHighlight>


                        <TouchableHighlight style={{ height: '14%', width: '73%', marginTop: '8%' }}>
                            <Image source={require('../../Resource/Login/ButtonGoogle.png')}
                                resizeMode='stretch'
                                style={{ height: '100%', width: '100%' }}>
                            </Image>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={{ height: '28%', width: '73%', marginTop: '8%' }}
                            onPress={() => this._onpress()}>
                            <Image source={require('../../Resource/Login/SignInEmail.png')}
                                resizeMode='stretch'
                                style={{ height: '100%', width: '100%' }}>
                            </Image>
                        </TouchableHighlight>
                    </View>
                </ImageBackground>

            </View>



        );
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center'
    },
    iconEmail: {
        width: 30,
        height: 30,
        alignContent: 'center'
    },
    buttonLogin: {
        height: 60,
        borderWidth: 1,
        borderRadius: 500,
        borderColor: 'white',
        justifyContent: 'center'
    },
    LogoForm: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
    },

    TextLogo: {
        color: 'white',
        marginTop: '34%',
        alignItems: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    }
});