// navigators/TransactionStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionListScreen from '../screens/TransactionListScreen';
import TransactionDetailScreen from '../screens/TransactionDetailScreen';

type Transaction = {
  id: number;
  storeName: string;
  amount: number;
  storeAddress: string;
  date: string;
};

type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: Transaction };
};

const Stack = createStackNavigator<RootStackParamList>();

const TransactionStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionListScreen} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetailScreen} />
    </Stack.Navigator>
  );
};

export default TransactionStackNavigator;
