import React, { Component } from 'react';
import { 
    View, Text , ImageBackground,TouchableOpacity, Image
} from 'react-native';
import Restaurants from './Restaurants';
import Hotels from './Hotels';
import ThingsToDo from './ThingsToDo';

import { createTabNavigator } from 'react-navigation'

export default class StackNearly extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../../../../../Resource/StackRoute/logo.png')} style={styles.imageLogo} >
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}></View>
                    <View style={{ flex: 2 }}>
                        <View style = {{flex:1, width:'100%', flexDirection:'row'}}>
                            <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity style={styles.buttonBack}
                                    onPress={()=>{this.props.navigation.goBack()}}>
                                    <Image source={require('../../../../../Resource/StackRoute/back.png')}
                                        style={styles.iconBack} />
                                </TouchableOpacity>
                                <Text style={styles.textWhite}>Nearly</Text>
                                
                            </View>
                            <View style ={{flex:1, justifyContent:'center', alignItems:'flex-end', paddingRight:20}}>
                                <Text style ={{color: '#fff', fontSize:16}}>Done</Text>
                            </View>
                        </View>
                        
                        <View style={{ flex: 1}}>
                            
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <RootStack></RootStack>
        </View>
    );
}
}
const RootStack = createTabNavigator({
RouteDayOne_: {
screen: ThingsToDo,
navigationOptions: { title: 'Things To Do' }

},
RouteDayTwo_: {
screen: Restaurants,
navigationOptions: { title: 'Restaurants' }
},
RouteDayThree_: {
screen: Hotels,
navigationOptions: {
    title: 'Hotels'
}
}
}, {

initialRouteName: 'RouteDayOne_',
// animationEnabled: false,
// swipeEnabled: false,
// lazyLoad: true,
tabBarOptions: {
    indicatorStyle: {
        activeTintColor: 'yellow',
        backgroundColor: 'transparent',
        labelStyle: {
            fontSize: 30,
            color: 'red',
            margin: 0,
            padding: 0,
        },
    },
    style: {

        width: '100%',
        height: 40,
        backgroundColor: 'Transparent',
        left: 0,
        right: 0,

    }
}
})

const styles = {
buttonBack: {
width: '14%',
height: 50,
alignItems: 'center',
justifyContent: 'center',
},
imageLogo: {
height: 120,
width: '100%',
marginBottom: -40
},
iconBack: {
width: '60%',
height: 10
},
iconNote: {
marginLeft: 'auto',
width: 18,
height: 18
},
iconMap: {
marginLeft: '9%',
marginRight: '5%',
width: 20,
height: 20
},
textWhite: {
color: 'white',
fontSize: 17
},

}

