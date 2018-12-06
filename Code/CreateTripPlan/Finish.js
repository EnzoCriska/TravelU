import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity , Image} from 'react-native';

export default class Finish extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 , alignItems:'center'}}>
                <ImageBackground source={require('../../Resource/TripPlan/Finish/logo.png')}
                    style={styles.imageLogo}>
                    <View>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.touchable}>
                    <Image style source ={require('../../Resource/TripPlan/Finish/back.png')}></Image>
                </TouchableOpacity>
                <Text>3 days to Đà Lạt..</Text>
                        </View>
                    </View>
                </ImageBackground>

                <Image source ={require('../../Resource/TripPlan/Finish/Flight.png')} style={styles.imageFight}></Image>
            </View>
        );
    }
}
const styles = {
    imageLogo: {
        width: '100%',
        height: 90
    },
    iconBack:{
        width:24,
        height:10
    },
    imageFight:{
        marginTop:50,
        width:'67%',
        height:140,
    },
    touchable: {
        width:'13%',
        height:'50%'
    }
}
