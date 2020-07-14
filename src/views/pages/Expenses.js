import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'
import AddExpenseModal from '../components/AddExpensesModal'
import { margins } from '../../helper/GlobalStyle'
import Expense from '../../controllers/Expense';
import AddButton from '../components/AddButton'
const expense = new Expense();

const Expenses = () => {
  return (
    <>
      <ScrollView style={styles.view}>
        <ExpensesList />
      </ScrollView>
      <AddButton screenName="AddExpenses" />
    </>
  );
}

const styles = StyleSheet.create({
  view: margins.global,
})

export default Expenses