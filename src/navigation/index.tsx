import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/Home';
import { DeviceScreen } from '../screens/Device';
import { Device } from 'react-native-ble-plx';

/**
 *  BLE uses GATT profile
 *  HW: Central (GATT Client) and Peripheral (GATT Server) device : ( 1 to many )
 *    The Peripheral Device will only serve or broadcast its details till 1 central devices connects to it.
 *    2 Way Comm, we can set a interval, for the central device to check on peripheral device
 *      1 Device : 1 UUID (1 Profile) -> Many Services  ( UUID 16 bit standard)
 *        Each Service : 1 UUID -> Many Characteristics
 *          Characteristic : 1 UUID and has some data or array or data.
 *          This Char will have read/write permission -> Communication takes place
 **/

/**
 *
 */
export type RootStackParamList = {
  Home: undefined;
  Device: { device: Device };
  Chat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => (
  <NavigationContainer>
    {/* @ts-ignore */}
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Blue Home',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Device" component={DeviceScreen} />
      <Stack.Screen name="Chat" component={DeviceScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
