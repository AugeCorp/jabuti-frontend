/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ExpensesList from '../components/ExpensesList';
import AddExpenseModal from '../components/AddExpensesModal';
import { margins } from '../../helper/GlobalStyle';
import AddButton from '../components/AddButton';

const Expenses = () => {
  return (
    <>
      <ScrollView style={styles.view}>
        <ExpensesList/>
        <View style={styles.margin} />
      </ScrollView>
      <AddButton screenName="AddExpenses" />
    </>
  );
};

const styles = StyleSheet.create({
  view: margins.global,
  margin: {
    marginBottom: 100,
  },
});

export default Expenses;
