import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import AddIncomeModal from '../components/AddIncomeModal'
import IncomeList from '../components/IncomeList'

const Incomes = () => {
  return (
    <ScrollView>
      <IncomeList />
      <AddIncomeModal />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
// })

export default Incomes