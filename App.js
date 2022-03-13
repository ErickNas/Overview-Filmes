import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';


const StackNav = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen component={Tela1} name="Tela1" />
        <StackNav.Screen component={Tela2} name="Tela2" />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default App;