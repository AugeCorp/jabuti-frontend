import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'

const Expenses = () => {
  return (
    <ScrollView>
      <ExpensesList />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
// })

export default Expenses