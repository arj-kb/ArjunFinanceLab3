// screens/TransactionDetailScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the transaction
type Transaction = {
  id: number;
  storeName: string;
  amount: number;
  storeAddress: string;
  date: string;
};

// Define the parameter list for the stack navigator
type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: Transaction };
};

// Define the type for route props
type TransactionDetailScreenRouteProp = RouteProp<RootStackParamList, 'TransactionDetail'>;

// Define the component props including route
type Props = {
  route: TransactionDetailScreenRouteProp;
};

const TransactionDetailScreen: React.FC<Props> = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Store Name:</Text>
      <Text style={styles.value}>{transaction.storeName}</Text>
      <Text style={styles.label}>Amount:</Text>
      <Text style={styles.value}>${transaction.amount}</Text>
      <Text style={styles.label}>Store Address:</Text>
      <Text style={styles.value}>{transaction.storeAddress}</Text>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.value}>{transaction.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
});

export default TransactionDetailScreen;
