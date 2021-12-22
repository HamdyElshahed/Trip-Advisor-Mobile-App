import React, { Component } from 'react'
import {
  Text, 
  View,
  SafeAreaView, 
  Image} from 'react-native';

import PropTypes from 'prop-types'
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import { AspectRatio } from 'native-base';

export default class Carousal extends Component {
    
    constructor(props){
        super(props);
        console.log(props.restaurant)
        this.state = {
          activeIndex:0,
          carouselItems:props.restaurant.photos
      }
    }


    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
               }}>
                  <AspectRatio w="100%" ratio={16 / 9}>
                    <Image
                        source={{
                            uri: item,
                        }}
                        alt="image"
                    />
                </AspectRatio>
            
          </View>

        )
    }

    render() {
        return (
          <SafeAreaView style={{backgroundColor:'white' }}>
            <View style={{flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={400}
                  itemWidth={400}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}
