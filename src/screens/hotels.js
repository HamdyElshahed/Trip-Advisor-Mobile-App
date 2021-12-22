import { collection, getDoc, getDocs } from "firebase/firestore";
import { ScrollView, Center ,View, Text, Button } from "native-base";
import { db } from "../config/firebase";
import React, { useEffect, useState } from "react";
import HotelCard from "../component/hotelCard";

export default function Hotel(props) {
  const [hotelList, setHotelList] = useState();
  console.log(props);
  useEffect(() => {
    getHotels();
  }, []);

  const getHotels = async () => {
    const data = await getDocs(collection(db, "hotels"));
    // setHotelList(data?.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    // data.docs.forEach((h) => {
    //   hotelList.push(h);
    // });

    setHotelList(data.docs);
    console.log(hotelList);
  };

  return (
    <>
      <ScrollView>
        {hotelList?.map((hotel) => {
          return (
            <>
              {/* <Text> {hotel.data().name} </Text> */}
              <Center>
              <HotelCard
                key={hotel.data().id}
                hotel={hotel}
                navigation={props.navigation}
              />
              </Center>
              
            </>
          );
        })}
      </ScrollView>
    </>
  );
}
