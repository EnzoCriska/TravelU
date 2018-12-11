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
    buttonBackClicked() {
        this.props.navigation.navigate('SignInScreen')
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FFF' }}>
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

                    <View elevation={5} style={styles.addLogin}>
                        <Text
                            style={styles.textLogin}>
                            Username
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='example@email.com' />

                        <Text
                            style={styles.textLogin}>
                            Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            secureTextEntry={true} />

                        <Text style={styles.textLogin}>
                            Re-Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            secureTextEntry={true} />

                    </View>

                    <View
                        elevation={6}
                        style={{ alignItems: 'center', marginTop: -23 }}
                    >
                        <TouchableHighlight style={styles.buttonLogin}>
                            <ImageBackground
                                source={require('../../Resource/SignIn/ButtonLogin.png')}
                                style={styles.buttonLogin}
                            >
                            </ImageBackground>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    imageLogo: {
        flex: 3,
        height: 176,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
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
        height: 375,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
        marginTop: -45,
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
        color: '#9596AD',
        fontSize: 14,
        width: '90%',
        height: 40,
        borderBottomColor: '#9596AD',
        borderBottomWidth: 0.5,
    }
})