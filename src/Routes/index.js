import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import TodoScreen from '../TodpApp';
import crudOperation from '../screens/crudoperation';
import DataScreen from '../screens/DataScreen';
const Stack = createStackNavigator();
export default function Routes() {
  const isLogin = useSelector((state) => state.Auth.isLogin);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TodoScreen" headerMode="none">
        <Stack.Screen name="crudOperation" component={crudOperation} />
        <Stack.Screen name="DataScreen" component={DataScreen} />
      </Stack.Navigator>
      <Loader />
      {/* {!isLogin ? (
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      )} */}
    </NavigationContainer>
  );
}
