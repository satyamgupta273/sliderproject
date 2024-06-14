// MainHeader.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomIcon from './Icon';

const MainHeader = () => {
  return (
    <View style={styles.header}>
      <CustomIcon icon="menu" onPress={() => console.log('Menu pressed')} />
      {/* <Text style={styles.title}>Visit India</Text> */}
      <CustomIcon  icon="notifications" onPress={() => console.log('Search pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainHeader;
