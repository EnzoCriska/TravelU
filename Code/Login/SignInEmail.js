import React, { Component } from 'react';
import {
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

export default class SignInEmail extends Component {
    signUpClicked() {
        this.props.navigation.navigate('SingUpScreen')
    }
    buttonBackClicked() {
        this.props.navigation.navigate('LoginScreen')
    }
    btnLoginClicked() {
        this.props.navigation.navigate('HomeScreen')
    }
    forgetPassClicked() {
        console.log("forget password clicked");
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#FFF' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={require('../../Resource/SignIn/cover.png')}
                        style={styles.imageLogo} />

                    {/* Header UI include: button Back and Image Title App - TravelU */}
                    <View style={{ height: 176, marginTop: 15 }}>
                        <TouchableHighlight
                            style={{ marginLeft: 15 }}
                            onPress={() => { this.buttonBackClicked() }}
                            underlayColor={'transparent'}
                        >
                            <Image source={require('../../Resource/SignIn/btnBack.png')} />
                        </TouchableHighlight>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../Resource/SignIn/title_signup.png')} />
                        </View>
                    </View>

                    {/* Content Screen include: 2 textInput(Username, Password), forget Password, Button Login and SignUp */}
                    <View elevation={5} style={styles.addLogin}>
                        <Text style={styles.textLogin}>
                            Username
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='example@email.com' />

                        <Text style={styles.textLogin}>
                            Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            secureTextEntry={true} />

                        <TouchableHighlight
                            style={styles.forgotpasswod}
                            onPress={() => { this.forgetPassClicked() }}
                            underlayColor={'transparent'}
                        >
                            <Text style={{ color: '#9596AD' }}>
                                Forget your password
                            </Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={[styles.buttonLogin, shadow]}
                            onPress={() => { this.btnLoginClicked() }}
                            underlayColor={'transparent'}
                        >
                            <Image
                                source={require('../../Resource/SignIn/ButtonLogin.png')}
                                style={styles.imageButtonLogin}>
                            </Image>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => { this.signUpClicked() }}
                            underlayColor={'transparent'}
                        >
                            <Text style={{ marginTop: 30, color: '#9596AD' }}>
                                Don't have an Acount?
                            <Text style={{ marginTop: 30, color: '#2088FF' }}> SignUp</Text>
                            </Text>
                        </TouchableHighlight>
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
const styles = StyleSheet.create({
    imageLogo: {
        flex: 3,
        height: 176,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    textLogin: {
        marginRight: 'auto',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 10,
        color: '#9596AD'
    },
    addLogin: {
        flex: 7,
        alignItems: 'center',
        height: 428,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: -45,
        borderRadius: 25,
    },
    forgotpasswod: {
        marginLeft: 'auto',
        marginRight: '5%',
        marginTop: 10,
    },
    buttonLogin: {
        borderRadius: 24,
        marginTop: 30,
        width: 166,
        height: 47,
    },
    imageButtonLogin: {
        width: 166,
        height: 47
    },
    input: {
        backgroundColor: 'white',
        color: '#9596AD',
        fontSize: 14,
        width: '90%',
        height: 40,
        borderBottomColor: '#9596AD',
        borderBottomWidth: 0.5,
    }
})