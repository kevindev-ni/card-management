/** @format */

import * as React from "react";
import {extendTheme, HStack, NativeBaseProvider, Switch, Text, useColorMode,} from "native-base";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import DetailsScreen from "./components/DetailsScreen";
import MyDrawer from "./components/MyDrawer";
import AddNewCard from "./components/page/AddCard";

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({config});
type MyThemeType = typeof theme;
declare module "native-base" {
    interface ICustomTheme extends MyThemeType {
    }
}
const Stack = createNativeStackNavigator();
const MyTheme = {
    ...DefaultTheme,
    colors: {
    },
}
export default function App() {
    return (
        <NativeBaseProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={MyDrawer} options={{headerShown: false}}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                    <Stack.Screen name="add-new-card" component={AddNewCard}/>
                </Stack.Navigator>
            </NavigationContainer>
        </NativeBaseProvider>
    );
}

// Color Switch Component
function ToggleDarkMode() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <HStack space={2} alignItems="center">
            <Text>Dark</Text>
            <Switch
                isChecked={colorMode === "light"}
                onToggle={toggleColorMode}
                aria-label={
                    colorMode === "light" ? "switch to dark mode" : "switch to light mode"
                }
            />
            <Text>Light</Text>
        </HStack>
    );
}
