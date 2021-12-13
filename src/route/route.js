// @flow 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../screens/home';
const RouteComponent = () => {
    const Navigation = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Navigation.Navigator>
                <Navigation.Screen name="home" component={Home} />
            </Navigation.Navigator>
        </NavigationContainer>
    );
};
export default RouteComponent;