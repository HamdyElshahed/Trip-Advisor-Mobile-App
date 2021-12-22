// @flow
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Hotel from "../screens/hotels";
import HotelCard from "../component/hotelCard";
import DetailsCard from "../component/detailsCard";
import Home from "../screens/home";
import { AppBar, Button } from "native-base";
import Login from "../screens/login";
import Register from "../screens/register";
const RouteComponent = () => {
  const Navigation = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigation.Navigator
      // initialRouteName="HomeActivity"
      //  screenOptions={{headerShown: false}}
      >
        <Navigation.Screen
          Navigation={Navigation}
          name="hotel"
          component={Hotel}
        />
        <Navigation.Screen name="login" component={Login} />
        <Navigation.Screen name="register" component={Register} />
        <Navigation.Screen name="home" component={Home} />
        <Navigation.Screen name="details" component={DetailsCard} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
};
export default RouteComponent;
