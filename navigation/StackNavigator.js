import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "../navigation/DrawerNavigator"
import ChatScreen from "../screens/ChatScreen"

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
