// @flow 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../screens/home';
import { restaurant } from '../screens/restaurant';
import { RestaurantDetails } from '../screens/RestaurantDetails';
const RouteComponent = () => {
    const Navigation = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Navigation.Navigator>
                <Navigation.Screen name="restaurant" component={restaurant} />
                <Navigation.Screen name="restaurantdetails" component={RestaurantDetails} />
                <Navigation.Screen name="home" component={Home}  options={{headerShown: false}}/>
            </Navigation.Navigator>
        </NavigationContainer>
    );
};
export default RouteComponent;