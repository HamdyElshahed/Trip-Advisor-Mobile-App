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
    SectionList,
    Stack,
    NativeBaseProvider,
    Fab, Icon,
    Button,
    Modal,
    FormControl,
    Input,
} from "native-base"
import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"

export const RestaurantDetails = ({ route, navigation }) => {
    const { restaurant } = route.params;
    React.useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, [navigation]);
    // console.log(JSON.stringify(restaurant['photos']))
    const [showModal, setShowModal] = useState(false)
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [userData, setUserData] = useState({})

    const handleChange = (event) => setUserName(event.target.value)
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
                        {restaurant.categories.map((val, index) => {
                            return index < 5 && <Text color={'#00aa6c'} key={index}>{val.title}</Text>
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
                        <Heading size="xs" ml="-1" style={{ alignSelf: 'flex-start', paddingVertical: 8 }}>
                            {restaurant.location.address1}
                        </Heading>
                        <Heading size="xs" ml="-1" style={{ alignSelf: 'flex-start' }}>
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
                        {/* {restaurant.features.map((val, index) => {
                            return <Text style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }} key={index}>{val}{" "}</Text>
                        })} */}
                    </Text>
                    <Center flex={1} px="3">
                        <SectionList
                            px="12"
                            mb="4"
                            sections={[{
                                title: "Violet",
                                data: [
                                  "violet.100",
                                  "violet.200",
                                  "violet.300",
                                  "violet.400",
                                  "violet.500",
                                ],
                              }]}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item }) => (
                                <Center py="4" minW="64" bg={item}>
                                    {item.split(".")[1]}
                                </Center>
                            )}
                            renderSectionHeader={({ section: { title } }) => (
                                <Center>
                                    <Heading fontSize="xl" mt="8" pb="4">
                                        {title}
                                    </Heading>
                                </Center>
                            )}
                        />      </Center>
                </Stack>
            </Stack>

            <Center flex={1} px="3">
                <Box position="relative" h={100} w="100%">
                    <Fab
                        onPress={() => setShowModal(true)}
                        bg={"green.400"}
                        position="absolute"
                        size="sm"
                        icon={<Icon color="white" as={<AntDesign name="creditcard" />} size="sm" />}
                    />
                    <Center flex={1} px="3">
                        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                            <Modal.Content maxWidth="400px">
                                <Modal.CloseButton />
                                <Modal.Header>Find a Table</Modal.Header>
                                <Modal.Body>
                                    <FormControl>
                                        <FormControl.Label>Name</FormControl.Label>
                                        <Input type='text' value={userName} onChange={handleChange} />
                                    </FormControl>
                                    <FormControl mt="3">
                                        <FormControl.Label>Email</FormControl.Label>
                                        <Input type='email' value={email} onChange={(event) => { setEmail(event.target.value) }} />
                                    </FormControl>
                                    <FormControl mt="3">
                                        <FormControl.Label>Phone</FormControl.Label>
                                        <Input type='number' value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                                    </FormControl>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button.Group space={2}>
                                        <Button
                                            variant="ghost"
                                            colorScheme="blueGray"
                                            onPress={() => {
                                                setShowModal(false)
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            bg={'green.400'}
                                            onPress={() => {
                                                setUserData({ userName, email, phone });
                                                setShowModal(false)
                                            }}
                                        >
                                            Resrerve
                                        </Button>
                                    </Button.Group>
                                </Modal.Footer>
                            </Modal.Content>
                        </Modal>
                    </Center>
                </Box>
            </Center>
        </>
    )
}
