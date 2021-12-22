import React, { Component, useEffect, useState } from "react";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";
import { VStack, Divider } from "native-base";

export default function HotelCard({ hotel, navigation }) {
  // const [hotel, sethotel] = useState(props.hotel);
  useEffect(() => {}, []);
  const navigateToDetails = (id) => {
    navigation.push("details", {
      id: id,
    });
  };

  return (
    <Box
      maxW="80"
      rounded="lg"
      overflow="hidden"
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
      marginY={3}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{uri : `${hotel?.data().image_url}`}} alt="image" />
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
          <Heading
            onPress={() => {
              navigateToDetails(hotel.id);
            }}
            size="md"
            ml="-1"
          >
            {hotel.data().name}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "violet.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            address : {hotel.data().location?.address}
          </Text>
        </Stack>
        {/* <Text fontWeight="400">{hotel.data().About}</Text> */}
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              rate: {hotel.data().rate}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}
