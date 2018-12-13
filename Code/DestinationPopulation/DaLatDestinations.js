import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
  TouchableHighlight,
  TextInput,
  FlatList

} from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager'
import { ActionButton, ActionButtonItem } from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
import ItemLocations from './FlatListItem/ItemLocations';
export default class DaLatDenistation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {

          name: "Top vui chơi giải trí",
          locations: [
            {
              name: "Vườn hoa Đà Lạt",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Topentertaiment/flower_gardens_dalat.png')
            },
            {
              name: "Nhà thờ Domain De Marie",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Topentertaiment/domain_de_marie_church.png')
            },
            {
              name: "Fanspan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Topentertaiment/fansipan.png')
            },
          ]
        },
        {
          name: "Top khách sạn",
          locations: [
            {
              name: "Sammy Hotels",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopHotels/1.png')
            },
            {
              name: "Đà Lạt Plaza",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopHotels/2.png')
            },
            {
              name: "Fansipan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopHotels/3.png')
            },
          ]
        },
        {
          name: "Top ăn uống",
          locations: [
            {
              name: "Bún bò Golden Cow",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopEating/1.png')
            },
            {
              name: "Nhà thờ Domain de Marie",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopEating/2.png')
            },
            {
              name: "Fansipan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopEating/3.png')
            },
          ]
        },
        {
          name: "Địa điểm văn hóa địa phương",
          locations: [
            {
              name: "XQ Xứ quán",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopLocalCulture/1.png')
            },
            {
              name: "Làng bình an",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopLocalCulture/2.png')
            },
            {
              name: "Fansipan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopLocalCulture/3.png')
            }
          ]
        },
        {
          name: "Địa điểm thiên nhiên hấp dẫn",
          locations: [
            {
              name: "Hồ Xuân Hương",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Naturallocation/1.png')
            },
            {
              name: "Thác Dalanta",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Naturallocation/2.png')
            },
            {
              name: "Fansipan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Naturallocation/3.png')
            }
          ]
        },
        {
          name: "Địa điểm dành cho gia đình",
          locations: [
            {
              name: "XQ Sứ quán",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Familylocation/1.png')
            },
            {
              name: "Làng Bình An",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Familylocation/2.png')
            },
            {
              name: "Fansipan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/Familylocation/3.png')
            }
          ]
        },
        {
          name: "Địa điểm mới lạ",
          locations: [
            {
              name: "XQ Sứ quán",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopLocalCulture/1.png')
            },
            {
              name: "Làng Bình An",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopLocalCulture/2.png')
            },
            {
              name: "Fansipan",
              rating: 4,
              vote: "190",
              image: require('../../Resource/Denistation/Dalat/TopLocalCulture/3.png')
            }
          ]
        }

      ]
    };
  }
  _onpressBack() {
    this.props.navigation
  }
  _onpressRestaurant() {
    this.props.navigation.navigate('DaLatRestaurants_');
  }
  _onpressHotels(){
    this.props.navigation.navigate('DaLatHotels_')
  }
  _renderDotIndicator() {
    return <PagerDotIndicator style={{ marginBottom: 100 }} pageCount={5} dotStyle={{ backgroundColor: 'black' }} />
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ width: '100%' }}>
          <View style={{ flex: 1, alignItems: 'center' }}>

            {/* Logo Da Lat include 5 image Logo*/}
            <IndicatorViewPager style={{ width: '100%', height: 311, position: 'absolute' }}
              indicator={this._renderDotIndicator()}

            >
              <Image style={styles.imgbgLogo}
                source={require('../../Resource/Denistation/Dalat/logoDaLat.png')}
              />

              <Image style={styles.imgbgLogo}
                source={require('../../Resource/Denistation/Dalat/logoDaLat2.png')}
              />

              <Image style={styles.imgbgLogo}
                source={require('../../Resource/Denistation/Dalat/logoDaLat3.png')}
              />

              <Image style={styles.imgbgLogo}
                source={require('../../Resource/Denistation/Dalat/logoDaLat4.png')}
              />

              <Image style={styles.imgbgLogo}
                source={require('../../Resource/Denistation/Dalat/logoDaLat5.png')}
              />

            </IndicatorViewPager>

            <View style={styles.viewLogo}>

              {/* Box 1 inclue : 1 button Back, 1 button Map, 1 text name */}
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity style={styles.btnBack}
                  onPress={() => this._onpressBack()}
                >
                  <Image source={require('../../Resource/Denistation/Dalat/imgBack.png')}
                    style={styles.imgBack}
                  >
                  </Image>
                </TouchableOpacity>

                <Text style={styles.txtWhite}>   Đà Lạt</Text>

                <TouchableOpacity style={styles.btnMap}>
                  <Image source={require('../../Resource/Denistation/Dalat/imgMap.png')}
                    style={styles.imgmap}
                  >
                  </Image>
                </TouchableOpacity>

              </View>

              {/* view Search include icon search & inputtext */}
              <View style={styles.viewSearch}>
                <TextInput style={styles.inputTextSearch} placeholder={"What do you search in"} />
                <TouchableOpacity style={styles.btnSearch}>
                  <Image style={styles.imgSearch}
                    source={require('../../Resource/Denistation/Dalat/imgSearch.png')}
                  >
                  </Image>
                </TouchableOpacity>
              </View>

            </View>

            {/* 5 Button Options: Trips Plan, Hotels, Fights, Restaurants, Tours */}
            <View elevation={5} style={styles.optionView}>
              <View style={{ flex: 1 }}>
                <TouchableOpacity

                >
                  <Image
                    style={styles.optionImage}
                    source={require('../../Resource/Home/logo/TripPlan.png')}
                    resizeMode='stretch'
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                onPress={()=>this._onpressHotels()}
                >
                  <Image
                    style={styles.optionImage}
                    source={require('../../Resource/Home/logo/Hotel.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity

                >
                  <Image
                    style={styles.optionImage}
                    source={require('../../Resource/Home/logo/Flights.png')}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  onPress={() => this._onpressRestaurant()}
                >
                  <Image
                    style={styles.optionImage}
                    source={require('../../Resource/Home/logo/Restaurants.png')} />
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity

                >
                  <Image
                    style={styles.optionImage}
                    source={require('../../Resource/Home/logo/Tours.png')} />
                </TouchableOpacity>
              </View>
            </View>

            {/* View inclue Text Description Đà Lạt */}
            <View style={styles.viewDescription}>
              <Text style={styles.txtTitlePresent}>Giới thiệu</Text>
              <Text style={styles.txtPresent} >Đà Lạt là một thành phố trực thuộc tỉnh và tỉnh lị tỉnh Lâm Đồng,
                nằm trên cao nguyên Lâm Viên, ở độ cao 1.500 m so với mặt nước biển và diện tích tự nhiên: 393,29 km².
                Với nhiều cảnh quan đẹp, Đà Lạt là một trong những thành phố du lịch nổi tiếng nhất của Việt Nam.
                Trong thời Pháp thuộc, tên tiếng Latin Dat Aliis Laetitiam Aliis Temperiem có nghĩa là
                 “cho những người này niềm vui, cho những người khác sự mát mẻ”.
                   <Text style={styles.txtViolet}> Xem thêm...</Text>
              </Text>
            </View>
          </View>

          {/* FlatList all Location */}

          <FlatList
            keyExtractor={(item) => item.toString()}
            showsVerticalScrollIndicator={false}
            style={{ width: '100%' }}
            data={this.state.data}
            renderItem={({ item }) => (
              <View style={styles.itemParentFlatList}>
                <Text style={styles.txtTitleList}>{item.name}</Text>
                <FlatList
                  keyExtractor={(item) => item.toString()}
                  horizontal={true}
                  data={item.locations}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => (
                    <ItemLocations
                      name={item.name}
                      image={item.image}
                      vote={item.vote}
                      rating={item.rating}

                    />
                  )}
                />
              </View>
            )

            }
          />

        </ScrollView>

        <TouchableOpacity style={{ bottom: 10, right: 10, position: 'absolute' }}>
          <Image source={require('../../Resource/Denistation/Dalat/imgCreate.png')}
            style={styles.imgCreateTripPlan}
          >
          </Image>
        </TouchableOpacity>

      </View>
    );
  }
}
const styles = {
  btnBack: {
    height: 46,
    width: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMap: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
    marginRight: '5%',
  },
  btnSearch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '10%',
    height: '100%'
  },
  btnCreatTripPlan: {
    marginTop: 'auto',
    marginBottom: 31,
    marginLeft: 'auto',
    marginRight: '3.5%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // position:'absolute'
  },
  itemParentFlatList: {
    marginLeft: '3%',
    width: '100%',
    marginTop: 18
  },
  imgmap: {
    width: '100%',
    height: '100%'
  },
  imgBack: {
    height: 10,
    width: 24,
  },
  viewLogo: {
    height: 311,
    flex: 1,
    marginTop: 44
  },
  imgbgLogo: {
    width: '100%',
    height: 311
  },
  imgCreateTripPlan: {
    width: 80,
    height: 72
  },
  imgSearch: {
    width: 17,
    height: 17
  },
  inputTextSearch: {
    paddingLeft: 17,
    fontSize: 12,
    color: '#9F9F9F',
    width: '90%',
    height: '100%'
  },
  optionView: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: -85,
    flex: 1,
    flexDirection: 'row'
  },
  optionImage: {
    width: 65,
    height: 65
  },
  txtWhite: {
    color: 'white',
    fontSize: 18
  },
  txtTitlePresent: {
    marginTop: 15,
    fontSize: 18,
    color: '#920DBB'
  },
  txtPresent: {
    color: '#090909',
    fontSize: 14,
    marginHorizontal: 10,
  },
  viewDescription: {
    width: '93%',
    paddingBottom: 10,
    alignItems: 'center',
  },
  txtTitleList: {
    marginLeft: '2%',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  txtViolet: {
    color: '#920DBB',
    fontSize: 14
  },
  viewSearch: {
    borderRadius: 5,
    marginTop: 127,
    backgroundColor: 'white',
    width: '84%',
    marginLeft: '8%',
    height: 41,
    alignItems: 'center',
    flexDirection: 'row',
  }
}
