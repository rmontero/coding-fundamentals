import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PostDetailsScreen from './PostDetailsScreen';

const Stack = createStackNavigator();

const AppLayout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Posts' }} />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} options={{ title: 'Post Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppLayout;
