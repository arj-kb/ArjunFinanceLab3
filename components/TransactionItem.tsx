import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Transaction = {
  id: number;
  name: string;
  amount: number;
  date: string;
};

type RootStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: Transaction };
};

type TransactionDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TransactionDetail'>;

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const navigation = useNavigation<TransactionDetailScreenNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TransactionDetail', { transaction })}
    >
      <View>
        <Text style={styles.name}>{transaction.name}</Text>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.date}>{transaction.date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 14,
    color: 'green',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});

export default TransactionItem;
