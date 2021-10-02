import * as React from "react";
import {Alert} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../navigation/DrawerNavigator";

export default class DashboardScreen extends React.Component {
    componentDidMount() {
    }
    render(){
        return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );}
}
