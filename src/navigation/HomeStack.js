import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AfterHome from '../screens/AfterHome';
import HomeScreen from '../screens/HomeScreen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="AfterHome"
        component={AfterHome}
        options={{
          headerTitle: '',
          headerBackTitle: 'Away',
          headerLeft: () => (
            <TouchableOpacity
              style={styles.backContainer}
              onPress={() => navigation.pop()}
              activeOpacity={0.9}>
              <Feather name="chevron-left" color="black" size={24} />
              <Text style={styles.backText}>Home</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.notification}>
              <View style={styles.bellContainer}>
                <View style={styles.redDot} />
                <FontAwesome name="bell-o" color="black" size={24} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  backText: {
    color: 'black',
    fontSize: 14,
  },
  notification: {
    marginRight: 8,
  },
  bellContainer: {},
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff5757',
    position: 'absolute',
    top: 1,
    right: 2,
    zIndex: 1,
  },
});
