/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ExpensesList from '../components/ExpensesList';
import AddExpenseModal from '../components/AddExpensesModal';
import { margins } from '../../helper/GlobalStyle';
import AddButton from '../components/AddButton';

const Expenses = () => {
  const handleExpenseRequisitions = {
    create: async (params) => {
      try {
        const response = await expense.create(params);

      } catch (err) {
        console.log(err);
      }
    },
    show: async () => {
      try {
        const response = await expense.show({ _id: "5f0e36229b975e3180049945" });

        return response;
      } catch (err) {
        console.log(err);
      }
    }
  }
  
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
