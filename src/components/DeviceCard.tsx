import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Device } from 'react-native-ble-plx';
import { RootStackParamList } from '../navigation';
import { Base64 } from '../lib/base64';

type DeviceCardProps = {
  device: Device;
};

const DeviceCard = ({ device }: DeviceCardProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // is the device connected?
    device.isConnected().then(setIsConnected);
  }, [device]);

  return (
    <TouchableOpacity
      style={styles.container}
      // navigate to the Device Screen
      onPress={() => navigation.navigate('Device', { device })}>
      <Text style={{ color: '#000' }}>{`Id : ${device.id}`}</Text>
      <Text style={{ color: '#000' }}>{`Name : ${device.name}`}</Text>
      <Text style={{ color: '#000' }}>{`Is connected : ${isConnected}`}</Text>
      <Text style={{ color: '#000' }}>{`RSSI : ${device.rssi}`}</Text>
      {/* Decode the ble device manufacturer which is encoded with the base64 algorythme */}
      <Text style={{ color: '#000' }}>{`Manufacturer : ${Base64.decode(
        device.manufacturerData?.replace(/[=]/g, ''),
      )}`}</Text>
      <Text
        style={{ color: '#000' }}>{`ServiceData : ${device.serviceData}`}</Text>
      <Text style={{ color: '#000' }}>{`UUIDS : ${device.serviceUUIDs}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginBottom: 12,
    // shadowColor: 'rgba(60,64,67,0.3)',
    shadowOpacity: 0.4,
    elevation: 4,
    padding: 12,
  },
});

export { DeviceCard };
