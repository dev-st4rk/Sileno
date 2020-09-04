import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Profile from "../pages/profile/profile";
import Register from "../pages/register/register";
import Verification from "../pages/verification/verification";

const Drawer = createDrawerNavigator();

export default function DrawerSlide() {
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Register'>
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Verification" component={Verification} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}