import { StackScreenProps } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Service } from 'react-native-ble-plx';
import { ServiceCard } from '../components/ServiceCard';
import { RootStackParamList } from '../navigation/index';
import { Button } from 'react-native-paper';
import { ChatCard } from '../components/ChatCard';

export type msgProps = {
  msg: string;
  msgfrom: string;
};

type ChatProps = {};
const ChatScreen = ({}) => {
  const [msgList, setmsgList] = useState<msgProps[]>([
    { msg: '', msgfrom: 'blueapp' },
  ]);

  // handle the device disconnection
  //   const disconnectDevice = useCallback(async () => {
  //     navigation.goBack();
  //     const isDeviceConnected = await device.isConnected();
  //     if (isDeviceConnected) {
  //       await device.cancelConnection();
  //     }
  //   }, [device, navigation]);

  //   useEffect(() => {
  //     // If connect
  //     // if writeable char
  //     // write msg to char

  //     // give a callback to the useEffect to disconnect the device when we will leave the device screen
  //     return () => {
  //     //   disconnectDevice();
  //     };
  //   }, [device, disconnectDevice, navigation, chat]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {/* Display a list of messages*/}
        {msgList.map(msgItem => (
          <ChatCard msg={msgItem.msg} msgfrom={msgItem.msgfrom} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },

  header: {
    backgroundColor: 'blue',
    marginBottom: 12,
    shadowColor: 'rgba(60,64,67,0.3)',
    shadowOpacity: 0.4,
    elevation: 4,
    padding: 12,
  },
});

export { ChatScreen };
