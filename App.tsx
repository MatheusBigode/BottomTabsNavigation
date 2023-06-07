import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TelaA } from './src/screens/telaA';
import { TelaB } from './src/screens/telaB';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Tela A'>
      <Tab.Screen name="Tela A" component={TelaA} />
      <Tab.Screen name="Tela B" component={TelaB} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}