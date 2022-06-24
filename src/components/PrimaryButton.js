import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const PrimaryButton = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#ff5757',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: 'white',
  },
});
