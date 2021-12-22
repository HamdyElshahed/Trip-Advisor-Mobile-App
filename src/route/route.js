// @flow
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import Hotel from "../screens/hotels";
import HotelCard from "../component/hotelCard";
import DetailsCard from "../component/detailsCard";
const RouteComponent = () => {
  const Navigation = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Navigation.Navigator>
        <Navigation.Screen
          Navigation={Navigation}
          name="hotel"
          component={Hotel}
        />
        <Navigation.Screen name="details" component={DetailsCard} />
        <Navigation.Screen name="home" component={Home} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
};
export default RouteComponent;
