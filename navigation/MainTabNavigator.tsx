import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionStackNavigator from './TransactionStackNavigator';
import SummaryScreen from '../screens/SummaryScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Transactions" component={TransactionStackNavigator} />
      <Tab.Screen name="Summary" component={SummaryScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
