import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Carousel from '../components/Carousel';
import TextInput from '../components/TextInput';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PrimaryButton from '../components/PrimaryButton';

const AfterHome = () => {
  const dummy = ['one'];
  const data = [
    {icon: 'medicinebox', text: 'Talk to a Doctor'},
    {icon: 'dingding', text: 'Talk to a Doctor'},
    {icon: 'heart', text: 'Talk to a Doctor'},
    {icon: 'android1', text: 'Talk to a Doctor'},
  ];
  const renderHeader = () => (
    <View style={styles.inputContainer}>
      <View style={styles.inputHeader}>
        <Text style={styles.inputHeaderText}>Video/Audio Consultation</Text>
        <Feather name="chevron-down" size={24} color="#043f7c80" />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={'Select Specialty'}
          leftIcon={
            <View style={styles.cicleOuter}>
              <View style={styles.circleInner} />
            </View>
          }
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder={'Select Date'}
          leftIcon={<Fontisto name="date" color="#5d428a" size={16} />}
        />
      </View>
      <View style={styles.buttonView}>
        <PrimaryButton label={'Search'} />
      </View>
    </View>
  );

  const box = ({item}) => (
    <View style={styles.box}>
      <AntDesign name={item.icon} size={40} color="#65ce7c" />
      <Text style={styles.boxText}>{item.text}</Text>
    </View>
  );
  const renderItem = () => (
    <View style={styles.categorySection}>
      <Text style={styles.title}>Category</Text>
      <FlatList
        renderItem={box}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          //   paddingVertical: 20,
          paddingHorizontal: 16,
          //   backgroundColor: 'green',
        }}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        // style={{backgroundColor: 'green'}}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        // showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AfterHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cicleOuter: {
    width: 16,
    height: 16,
    borderRadius: 14 / 2,
    backgroundColor: '#00b272',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInner: {
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'white',
  },
  inputContainer: {
    paddingHorizontal: 16,
  },
  inputHeader: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputHeaderText: {
    color: '#043f7c',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 1,
  },
  inputView: {
    marginBottom: 10,
  },
  buttonView: {
    marginTop: 5,
    marginBottom: 30,
  },
  title: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 16,
    marginBottom: 5,
  },
  box: {
    width: 120,
    height: 120,
    borderRadius: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    marginRight: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  boxText: {
    fontSize: 12,
    color: '#000000',
    marginTop: 10,
  },
});
