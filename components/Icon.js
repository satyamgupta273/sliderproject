import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const CustomIcon = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcons name={icon} size={24} />
    </TouchableOpacity>
  );
};

export default CustomIcon;



