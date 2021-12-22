import React from "react"
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
} from "native-base"

export const RestaurantCard = ({ restaurant }) => {
    return (
        <Box
            maxW="80"
            rounded="lg"
            roundedBottom={"none"}
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            marginTop={8}
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
                    <Image
                        source={{
                            uri: restaurant.image_url,
                        }}
                        alt="image"
                    />
                </AspectRatio>
                <Center
                    
                    _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs",
                    }}
                    position="absolute"
                    bottom="0"
                    px="3"
                    py="1.5"
                >

                </Center>
            </Box>
            <Stack p="4" space={3}>
                <Stack space={2}>
                    <Heading size="md" ml="-1">
                        {restaurant.name}
                    </Heading>
                    <Text
                        fontSize="xs"
                        _light={{
                            color: "green.700",
                        }}
                        _dark={{
                            color: "green.700",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                    >
                        {restaurant.categories.map((val, index) => {
                            return <Text key={index}>{val.title}</Text>
                        })}
                    </Text>
                </Stack>
                <Text fontWeight="400">
                    Bengaluru (also called Bangalore) is the center of India's high-tech
                    industry. The city is also known for its parks and nightlife.
                </Text>
                <HStack alignItems="center" space={4} justifyContent="space-between">
                    <HStack alignItems="center">
                        <Text
                            color="coolGray.600"
                            _dark={{
                                color: "warmGray.200",
                            }}
                            fontWeight="400"
                        >
                            6 mins ago
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
        </Box>
    )
}
