import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import Collection from './pages/Collection';
import Home from './pages/Home';
import Item from './pages/Item';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            cardStyle: {
              backgroundColor: '#92afd7',
            },
          }}
        />
        <Stack.Screen
          name="Collection"
          component={Collection}
          options={{
            cardStyle: {
              backgroundColor: '#d0f4ea',
            },
          }}
        />
        <Stack.Screen
          name="Item"
          component={Item}
          options={{
            cardStyle: {
              backgroundColor: '#d1d1d1',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
