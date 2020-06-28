import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesCard from '../components/ExpensesCard'
import AddExpenseButton from '../components/AddExpenseButton'

const Expenses = () => {
  return (
    <ScrollView>
      <ExpensesCard />
      <AddExpenseButton />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
// })

export default Expenses