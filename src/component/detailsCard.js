import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
// import Hotel from "../screens/hotels";
// import { Box, VStack, Divider, Image } from "native-base";
import {
  Box,
  Heading,
  AspectRatio,
  // Image,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";
import { Image} from "react-native"
export default function DetailsCard() {
  const [hotel, sethotel] = useState();
  const route = useRoute();

  // console.log(hotel);
  useEffect(() => {
    getHotels();
    // console.log(id);
  }, []);

  //   const getHotels = async () => {
  //     const hoteldoc = await getDoc(doc(db, "hotels", id));
  //     // sethotel(hoteldoc);
  //     console.log(hoteldoc);
  const getHotels = async () => {
    const id = route.params.id;
    const data = await getDoc(doc(db, "hotels", `${id}`));
    sethotel(data.data());
    console.log(data.data());
  };

  return (
    // <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    //   <Text>{route.params.id}</Text>
    //   <Text>{hotel?.name}</Text>
    //   <Text>{hotel?.feature}</Text>
    //   <Text>{hotel?.review}</Text>

    // </View>
    <Center>
    <Box
      maxW="80"
      rounded="lg"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "gray.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{uri :`${hotel?.image_url}`}} alt="image" />
        </AspectRatio>
        <Center
          bg="violet.500"
          _dark={{
            bg: "violet.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        ></Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {hotel?.name}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="600"
            ml="-0.5"
            mt="-1"
          >
          <Text style={{fontSize: 20 , color: "red"}}>Payment :</Text>  {hotel?.payment_method}
          </Text>
        <Text fontWeight="400" >  <Text style={{fontSize: 20 , color: "red"}}>features :</Text> {hotel?.feature}</Text>
        </Stack>
        <HStack alignItems="center" space={5} justifyContent="space-around">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "black",
              }}
              fontWeight="400"
            >
              <Text style={{fontSize: 20 , color: "red"}}>Review :</Text> {hotel?.review}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    </Center>
  );
}
