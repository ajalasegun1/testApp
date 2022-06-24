import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppointmentsScreen from '../screens/AppointmentsScreen';
import HomeStack from './HomeStack';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#00000066',
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: 'white',
          paddingTop: 5,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Ask a Doc',
          tabBarIcon: ({focused, color}) => (
            <Entypo name="home" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AppointmentsScreen"
        component={AppointmentsScreen}
        options={{
          tabBarLabel: 'Appointments',
          tabBarIcon: ({focused, color}) => (
            <Octicons name="checklist" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
