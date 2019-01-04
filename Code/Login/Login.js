import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableHighlight
} from 'react-native';
import {CheckPermission} from '../Util/CheckPermission'
export default class Login extends Component {
    constructor(props) {
        super(props);
        CheckPermission()
        this.state = {
            sologan: "Travel with people. Make new friends",
        };
    }
    // functions when button clicked
    btnLoginFBClicked() {
        this.props.navigation.navigate('SignInScreen');
    }

    btnLoginGPlusClicked() {
        this.props.navigation.navigate('SignInScreen');
    }

    btnSignInEmailClicked() {
        this.props.navigation.navigate('SingUpScreen');
    }

    btnLoginClicked() {
        this.props.navigation.navigate('SignInScreen');
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent={true}
                />
                {/* Image component to set background for screen
                    Stylesheet have to  resizeMode: 'stretch' and position: 'absolute' 
                */}
                <Image style={styles.imageBg} source={require('../../Resource/Login/Background.png')}></Image>

                {/* Box 1 include: Image title - TravelU and Text */}
                <View style={styles.viewBox}>
                    <Image source={require('../../Resource/Login/title.png')}></Image>
                    <Text style={{ color: 'white' }}>{this.state.sologan}</Text>
                </View>
                    
                {/* Box 2 include: 4 button using TouchableHighlight (LoginFB, LoginG+, LoginEmail, Login) */}
                <View style={styles.viewBox}>
                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => { this.btnLoginFBClicked() }}
                        underlayColor={'transparent'}
                    >
                        <Image source={require('../../Resource/Login/ButtonFaceBook.png')}
                            resizeMode='stretch'
                            style={styles.imgButton}>
                        </Image>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => { this.btnLoginGPlusClicked() }}
                        underlayColor={'transparent'}
                    >
                        <Image source={require('../../Resource/Login/ButtonGoogle.png')}
                            resizeMode='stretch'
                            style={styles.imgButton}>
                        </Image>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.btn}
                        onPress={() => { this.btnSignInEmailClicked() }}
                        underlayColor={'transparent'}
                    >
                        <Image source={require('../../Resource/Login/SignInEmail.png')}
                            resizeMode='stretch'
                            style={styles.imgButton}>
                        </Image>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.btnLogin}
                        onPress={() => { this.btnLoginClicked() }}
                        underlayColor={'transparent'}
                    >
                        <Text style={{ color: '#FFF' }}>Login</Text>
                    </TouchableHighlight>
                </View>
            </View >
        );
    }
};
const styles = StyleSheet.create({
    imageBg: {
        flex: 1,
        resizeMode: 'stretch',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    viewBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        height: '14%',
        width: '73%',
        marginTop: '8%'
    },
    imgButton: {
        height: '100%',
        width: '100%'
    },
    btnLogin: {
        height: '14%',
        width: '73%',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});