import React, { Component } from "react";
import {
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from "react-native";

import FormData from 'FormData';

var formData = new FormData();

export default class SignInEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signUpClicked() {
    this.props.navigation.navigate("SingUpScreen");
  }
  buttonBackClicked() {
    this.props.navigation.navigate("LoginScreen");
  }
  btnLoginClicked() {
    console.log(this.state.email + this.state.password);

    formData.append("email", this.state.email)
    formData.append("password", this.state.password)

    fetch("http://10.103.164.233:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email":this.state.email,
        "password": this.state.password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);

        this.props.navigation.navigate("HomeScreen");
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
    console.log("wait...");

    // this.props.navigation.navigate('HomeScreen')
  }
  forgetPassClicked() {
    console.log("forget password clicked");
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.viewContainer}>
          <Image
            source={require("../../Resource/SignIn/cover.png")}
            style={styles.imageLogo}
          />

          {/* Header UI include: button Back and Image Title App - TravelU */}
          <View style={styles.headerContainer}>
            <TouchableHighlight
              style={styles.backBtn}
              onPress={() => {
                this.buttonBackClicked();
              }}
              underlayColor={"transparent"}
            >
              <Image source={require("../../Resource/SignIn/btnBack.png")} />
            </TouchableHighlight>

            <View style={styles.titleImage}>
              <Image
                source={require("../../Resource/SignIn/title_signup.png")}
              />
            </View>
          </View>

          {/* Content Screen include: 2 textInput(Username, Password), forget Password, Button Login and SignUp */}
          <View elevation={5} style={styles.addLogin}>
            <Text style={styles.textLogin}>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              placeholder="example@email.com"
            />

            <Text style={styles.textLogin}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="********"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />

            <TouchableHighlight
              style={styles.forgotpasswod}
              onPress={() => {
                this.forgetPassClicked();
              }}
              underlayColor={"transparent"}
            >
              <Text style={{ color: "#9596AD" }}>Forget your password</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={[styles.buttonLogin, shadow]}
              onPress={() => {
                this.btnLoginClicked();
              }}
              underlayColor={"transparent"}
            >
              <Image
                source={require("../../Resource/SignIn/ButtonLogin.png")}
                style={styles.imageButtonLogin}
              />
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => {
                this.signUpClicked();
              }}
              underlayColor={"transparent"}
            >
              <Text style={{ marginTop: 30, color: "#9596AD" }}>
                Don't have an Acount?
                <Text style={{ marginTop: 30, color: "#2088FF" }}> SignUp</Text>
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const shadow = {
  shadowColor: "#30C1DD",
  shadowRadius: 10,
  shadowOpacity: 0.9,
  elevation: 8
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    height: "100%"
  },
  viewContainer: {
    flex: 1
  },
  headerContainer: {
    height: 176,
    marginTop: 15
  },
  backBtn: {
    marginLeft: 15
  },
  titleImage: {
    justifyContent: "center",
    alignItems: "center"
  },

  imageLogo: {
    flex: 3,
    height: 176,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  textLogin: {
    marginRight: "auto",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 10,
    color: "#9596AD"
  },
  addLogin: {
    flex: 7,
    alignItems: "center",
    height: 428,
    backgroundColor: "white",
    marginLeft: 15,
    marginRight: 15,
    marginTop: -45,
    borderRadius: 25
  },
  forgotpasswod: {
    marginLeft: "auto",
    marginRight: "5%",
    marginTop: 10
  },
  buttonLogin: {
    borderRadius: 24,
    marginTop: 30,
    width: 166,
    height: 47
  },
  imageButtonLogin: {
    width: 166,
    height: 47
  },
  input: {
    backgroundColor: "white",
    color: "#9596AD",
    fontSize: 14,
    width: "90%",
    height: 40,
    borderBottomColor: "#9596AD",
    borderBottomWidth: 0.5
  }
});
