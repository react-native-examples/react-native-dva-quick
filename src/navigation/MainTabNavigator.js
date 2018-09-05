import React from 'react'
import { StyleSheet, Image } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import HomeScreen from '../pages/HomeScreen'
import LinksScreen from '../pages/LinksScreen'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused, tintColor }) => (
    <Image
      style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
      source={require('../assets/images/house.png')}
    />
  ),
}

const LinksStack = createStackNavigator({
  Links: LinksScreen,
})

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused, tintColor }) => (
    <Image
      style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
      source={require('../assets/images/person.png')}
    />
  ),
}

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})