// screens/SummaryScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Transaction = {
  id: number;
  storeName: string;
  amount: number;
  storeAddress: string;
  date: string;
};

const transactions: Transaction[] = [
  { id: 1, storeName: 'Grocery Mart', amount: 50, storeAddress: '123 Main St', date: '2024-07-01' },
  { id: 2, storeName: 'Bill App', amount: 1200, storeAddress: '456 Elm St', date: '2024-07-03' },
  { id: 3, storeName: 'Utility Bills', amount: 200, storeAddress: '789 Pine St', date: '2024-07-05' },
  { id: 4, storeName: 'Walmart', amount: 70, storeAddress: '101 Maple St', date: '2024-07-10' },
  { id: 5, storeName: 'Apple', amount: 2000, storeAddress: '101 Maple St', date: '2024-07-10' },
];

const SummaryScreen: React.FC = () => {
  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  const highest = transactions.reduce((max, transaction) => transaction.amount > max.amount ? transaction : max, transactions[0]);
  const lowest = transactions.reduce((min, transaction) => transaction.amount < min.amount ? transaction : min, transactions[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Summary</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Total Transactions:</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Total Amount:</Text>
        <Text style={styles.value}>${totalAmount.toFixed(2)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Highest Transaction:</Text>
        <Text style={styles.value}>Store: {highest.storeName}</Text>
        <Text style={styles.value}>Amount: ${highest.amount.toFixed(2)}</Text>
        <Text style={styles.value}>Date: {highest.date}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Lowest Transaction:</Text>
        <Text style={styles.value}>Store: {lowest.storeName}</Text>
        <Text style={styles.value}>Amount: ${lowest.amount.toFixed(2)}</Text>
        <Text style={styles.value}>Date: {lowest.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
});

export default SummaryScreen;
