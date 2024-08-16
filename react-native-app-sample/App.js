import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';

// Create stack and tab navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Posts' }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetailsScreen}
        options={{ title: 'Post Details' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        {/* You can add more tabs here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
