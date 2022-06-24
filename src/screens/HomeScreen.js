import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <PrimaryButton
        label="Press Me"
        onPress={() => navigation.push('AfterHome')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
