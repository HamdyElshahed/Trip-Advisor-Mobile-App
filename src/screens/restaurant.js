import {
    collection,
    getDocs,
    query
} from 'firebase/firestore'
import React, {
    useEffect,
    useState
} from 'react'
import {
    AppBar
} from '../components/restaurant-components/AppBar'
import {
    RestaurantCard
} from '../components/restaurant-components/RestaurantCard'
import {
    db
} from '../config/firebase'
import {
    Text,
    View
} from "react-native";
import { Button, HStack, ScrollView, Stack,Spinner,Heading, Center } from 'native-base'
import { styles } from '../../style'

export const restaurant = ({navigation}) => {
    console.log(navigation)
    
    const [restaurantList, setRestaurantList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);

    useEffect(() => {
        getRestaurants();

    }, [])

    const getRestaurants = async () => {
        setIsLoading(true)
        await getDocs(collection(db, "restaurant")).then(rest => {
            const restaurantList = rest.docs.map(doc => doc.data())
            console.log(restaurantList);
            setRestaurantList(restaurantList)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
    }

    
    return (
        <>
         <AppBar/>

        {isLoading? <Center flex={1} px="3"><HStack space={2} alignItems="center">
        <Spinner color="green.500" size={33} accessibilityLabel="Loading posts" />
        <Heading color="green.500" fontSize="md">
          Loading
        </Heading>
      </HStack>
      </Center>:<ScrollView contentContainerStyle={styles.contentContainer}>{
        restaurantList?.map(restaurant => {
            return <View key = {restaurant.id}> 
           
            <RestaurantCard navigation={navigation} 
            restaurant = {
                restaurant
            }
            
            />
             <Button style={{marginBottom:9}} bg={'#04ce84'} onPress={()=>{navigation.navigate('restaurantdetails',{restaurant:restaurant})}}>
                <Text>Details</Text>
            </Button>
            </View>
        }) }
        </ScrollView>
        }
        </>
    )
}