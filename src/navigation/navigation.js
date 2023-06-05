import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/Search';
import BookDetails from '../screens/BookDetails';

//  enableScreens();


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'black',
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: 'transparent',
            elevation: 0,
          },
        }}
      >
        <Stack.Screen name="Search" component={SearchScreen}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="Detail" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default (Navigation);
