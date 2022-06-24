import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
const WIDTH = Dimensions.get('window').width;
const CarouselComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const renderItem = ({item}) => (
    <Image source={{uri: item}} style={styles.images} />
  );
  const images = [
    'https://www.mysalaryscale.com/blog/wp-content/uploads/2017/10/Doctor-2.jpg',
    'https://leritude.com/wp-content/uploads/2021/08/young-nigerian-female-doctor.png',
    'https://d3qug4wxaelkyn.cloudfront.net/large_doctorsappointment_corona_featured_2_270fe4eeec.jpeg',
  ];
  return (
    <View>
      <Carousel
        layout={'default'}
        sliderWidth={WIDTH * 1}
        itemWidth={320}
        itemHeight={150}
        renderItem={renderItem}
        data={images}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        inactiveDotStyle={styles.inactiveDotStyle}
        dotStyle={styles.activeDotStyle}
      />
    </View>
  );
};

export default CarouselComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  images: {
    width: WIDTH * 0.83,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    borderRadius: 8 / 2,
    backgroundColor: '#c4c4c4',
  },
  activeDotStyle: {
    width: 23,
    height: 5,
    borderRadius: 50,
    backgroundColor: '#ff5757',
  },
});
