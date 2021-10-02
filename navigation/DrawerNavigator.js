import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from '../screens/DashboardScreen'
import Profile from '../screens/Profile'
import ChatScreen from "../screens/ChatScreen";
import Logout from '../screens/Logout.js'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
    render() {
        return (
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="Chat"
                    component={ChatScreen}
                />
                <Drawer.Screen 
                    name="Profile"
                    component={Profile}
                />
                <Drawer.Screen 
                    name="Logout"
                    component={Logout}
                />
            </Drawer.Navigator>
        )
    }
}
