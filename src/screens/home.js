import * as React from "react";
import { FlatList, } from "native-base";
import { useContext, useEffect , useState } from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Content,
  CardItem,
  Card,
  Text,
  Body,
  ScrollView,
  Center
} from "native-base";
import { VStack, Box, Divider } from "native-base";
import Carousel from "react-native-snap-carousel";
import CardCarousel from "../components/cardcarousel";
import { collection, query, where , getDocs } from "firebase/firestore";
import {db} from "../config/firebase";
const Home = ({ navigation }) => {
  const [hotels, gethotels] = useState();
  const [restaurants, getrestaurants] = useState();
  useEffect(() =>{
    getdata('hotels' , 'rate', gethotels);
    getdata('restaurant' ,'rating'  ,  getrestaurants);
  },[])
 async function getdata(col , key ,fn){
    const collectionRef = collection(db, col);
    const q =  query(collectionRef, where(key, ">=", 4));
    let snapshot =  await getDocs(q);
    fn(snapshot.docs)
  }
 

  return (
  <ScrollView >
    {/* <Center> */}
      <Text  style={{ fontSize:30 ,  paddingVertical : 20 , paddingLeft: 40}}>Top Rated Hotels</Text>
    <Carousel
      layout={"default"}
      // ref={(c) => { this._carousel = c; }}
      data={hotels ? hotels : []}
      renderItem={
        // CardCarousel
        ({ item, index }) => {
          return (
            <CardCarousel type={'hotels'}  item={item} index={index} />
          )
        }
      }
      sliderWidth={430}
      itemWidth={350}
    />
    {/* </Center> */}
      <Text style={{ fontSize:30 , paddingVertical : 20 , paddingLeft: 40}}>Top Rated Restaurants</Text>
   
    <Carousel
      layout={"default"}
      // ref={(c) => { this._carousel = c; }}
      data={restaurants ? restaurants : [] }
      renderItem={
        // CardCarousel
        ({ item, index }) => {
          return (
            <CardCarousel type={'restaurants'}  item={item} index={index} />
          )
        }
      }
      sliderWidth={400}
      itemWidth={300}
    />
  </ScrollView>

    // <Text></Text>
  );
};
export default Home;
