import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'
import AddExpenseModal from '../components/AddExpensesModal'

const Expenses = () => {
  return (
    <ScrollView>
      <ExpensesList />
      <AddExpenseModal />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
// })

export default Expenses