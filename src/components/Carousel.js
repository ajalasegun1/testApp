import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';

const Carousel = () => {
  const images = [
    {
      banner: require('../assets/images/landing3.jpeg'),
      banner: require('../assets/images/landing3.jpeg'),
      banner: require('../assets/images/landing3.jpeg'),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatListSlider
        data={images}
        height={180}
        width={300}
        imageKey="banner"
        loop={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          backgroundColor: 'red',
          width: '100%',
        }}
        local
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
});
