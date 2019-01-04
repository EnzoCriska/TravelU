import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableHighlight,
    ScrollView,
    Alert
} from 'react-native';

export default class SignUp extends Component {

    constructor(props){
        super(props)
        this.state={
            email : "",
            password : "",
            re_password : ""
        }
    }

    onSignUp(){
        console.log("SignUp...")
        if(this.state.email == "" || this.state.password == "" || this.state.re_password == ""){
            Alert.alert(
                'Sorry',
                'Please fill all the fields',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }else{
            if(this.state.password != this.state.re_password){
                Alert.alert(
                    'Sorry',
                    'Password and re_password are same',
                    [
                      {text: 'OK', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false }
                  )
            }else{
                fetch('http://10.103.164.233:3000/users', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email": this.state.email,
                    "password": this.state.password,
                }),
                }).then((response) => response.json())
                    .then((responseJson) => {
                        console.log(responseJson)
                        this.props.navigation.navigate('HomeScreen')
                    return responseJson;
                    })
                    .catch((error) => {
                    console.error(error);
                    });
            }
        }
        console.log("wait...")
    }

    buttonBackClicked() {
        this.props.navigation.goBack()
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
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email}
                            placeholder='example@email.com' />

                        <Text
                            style={styles.textLogin}>
                            Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                            secureTextEntry={true} />

                        <Text style={styles.textLogin}>
                            Re-Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='********'
                            onChangeText={(re_password) => this.setState({re_password})}
                            value={this.state.re_password}
                            secureTextEntry={true} />

                    </View>

                    <View
                        elevation={6}
                        style={{ alignItems: 'center', marginTop: -23 }}
                    >
                        <TouchableHighlight 
                            style={styles.buttonLogin}
                            onPress={()=> this.onSignUp()}>
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