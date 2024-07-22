// screens/TransactionListScreen.tsx

import React from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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

type TransactionListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionDetail'>;

const transactions: Transaction[] = [
  { id: 1, storeName: 'Grocery Mart', amount: 50, storeAddress: '123 Main St', date: '2024-07-01' },
  { id: 2, storeName: 'Bill App', amount: 1200, storeAddress: '456 Elm St', date: '2024-07-03' },
  { id: 3, storeName: 'Utility Bills', amount: 200, storeAddress: '789 Pine St', date: '2024-07-05' },
  { id: 4, storeName: 'Walmart', amount: 70, storeAddress: '101 Maple St', date: '2024-07-10' },
  { id: 5, storeName: 'Apple', amount: 2000, storeAddress: '101 Maple St', date: '2024-07-10' },
];

const TransactionListScreen: React.FC = () => {
  const navigation = useNavigation<TransactionListScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.storeName}>{item.storeName}</Text>
            <Text style={styles.amount}>${item.amount}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
  storeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#6495ed',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default TransactionListScreen;
