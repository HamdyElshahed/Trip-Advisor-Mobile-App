import React from 'react'
import Carousal from '../components/restaurant-components/Carousal';
import {
    Box,
    Heading,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Badge,
    Stack,
    NativeBaseProvider,
  } from "native-base"

export const RestaurantDetails = ({ route ,navigation}) => {
    const { restaurant} = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
    // console.log(JSON.stringify(restaurant['photos']))
    return (
        <>
        <Carousal restaurant={restaurant}></Carousal>
        <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {restaurant.name}
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
                        {restaurant.categories.map((val,index)=>{
                            return index<5 && <Text color={'#00aa6c'} key={index}>{val.title}</Text>
                        })}
                    </Text>
                </Stack>
                <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                </Text>
                
            </Stack>
            <Stack p="4" space={3}>
            <Stack space={2}>
                <Box>
                <Badge>CONTACT US</Badge>
                 <Heading size="xs" ml="-1" style={{alignSelf:'flex-start', padding:8}}>
                    {restaurant.location.address1}
                    </Heading>
                    <Heading size="sm" ml="-1" style={{alignSelf:'flex-start'}}>
                        {restaurant.display_phone}
                    </Heading>
                </Box>
                   
                    <Text
                        fontSize="xs"
                        _light={{
                            color: "green.500",
                        }}
                        _dark={{
                            color: "green.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                    >
                        {restaurant.features.map((val,index)=>{
                            return <Text key={index}>{val}</Text>
                        })}
                    </Text>
                </Stack>
                </Stack>
        </>
    )
}
