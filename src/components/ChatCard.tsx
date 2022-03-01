import React from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { Device } from 'react-native-ble-plx';
// import { RootStackParamList } from '../navigation';
// import { Base64 } from '../lib/base64';
import { msgProps } from '../screens/Chat';

const ChatCard = ({ msg, msgfrom }: msgProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      //   onPress={() => navigation.navigate('Device', { device })}
    >
      <Text style={{ color: '#000' }}>{`From : ${msgfrom}`}</Text>
      <Text style={{ color: '#000' }}>{`Msg ${msg}`}</Text>
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

export { ChatCard };
