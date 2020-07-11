import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'
import AddExpenseModal from '../components/AddExpensesModal'
import { margins } from '../../helper/GlobalStyle'

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