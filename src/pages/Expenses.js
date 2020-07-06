import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'
import { margins } from '../helper/GlobalStyle'
import AddExpenseModal from '../components/AddExpensesModal'

const Expenses = () => {
  return (
    <>
      <AddExpenseModal />
      <ScrollView style={styles.view}>
        <ExpensesList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: margins.global
})

export default Expenses