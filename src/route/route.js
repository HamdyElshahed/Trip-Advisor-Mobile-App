import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import { restaurant } from '../screens/restaurant';
import { RestaurantDetails } from '../screens/RestaurantDetails';
import Hotel from "../screens/hotels";
import HotelCard from "../component/hotelCard";
import DetailsCard from "../component/detailsCard";
import { Button } from "native-base";
import Login from "../screens/login";
import Register from "../screens/register";
import  AppBar from "../components/restaurant-components/AppBar";
const RouteComponent = () => {
  const Navigation = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <Navigation.Navigator
      // initialRouteName="HomeActivity"
      //  screenOptions={{headerShown: false}}
      > */}
      <Navigation.Navigator 
      initialRouteName="HomeActivity"
       screenOptions={{headerShown: false}}
      >
       <Navigation.Screen name="home" component={Home} />
      <Navigation.Screen name="restaurant" component={restaurant} />
       <Navigation.Screen name="restaurantdetails" component={RestaurantDetails} />
        <Navigation.Screen
          Navigation={Navigation}
          name="hotel"
          component={Hotel}
        />
        <Navigation.Screen name="login" component={Login} />
        <Navigation.Screen name="register" component={Register} />
        <Navigation.Screen name="details" component={DetailsCard} />
       {/* <Navigation.Screen name="app" component={AppBar} /> */}

      </Navigation.Navigator>
    </NavigationContainer>
  );
};
export default RouteComponent;
