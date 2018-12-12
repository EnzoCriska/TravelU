import React, { Component } from 'react'
import { 
    View, Text, FlatList 
} from "react-native";
export default class ThingsToDo extends Component {
    constructor(props){
        super(props)
        this.state  = {
            listThings:[{
                title: 'gfhjsdyfsdvfg',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },{
                title: 'grt',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'rthyg',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
            {
                title: 'wrfg',
                rating: 4,
                vote:190,
                rank: 4,
                per_night:190000,
                image: 'https://r-ec.bstatic.com/images/hotel/max1024x768/945/94534929.jpg'
            },
        ]
        }
    }
  render() {
    return (
        <View>
            <View style={{backgroundColor:'blue'}}>
                <Text>Ngay 1</Text>
            </View>
            <View>
               <FlatList
                    data = {this.state.listThings}
                    keyExtractor = {(item)=>(item.toString())}
                    renderItem ={({item})=>(
                        <View>

                        </View>
                    )}
                ></FlatList>
            </View>
        </View>
    )
  }
}
