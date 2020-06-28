import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import AddIncomeButton from '../components/AddIncomeButton'
import IncomeCard from '../components/IncomeCard'

const Incomes = () => {
  return (
    <ScrollView>
      <IncomeCard />
      <AddIncomeButton />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
// })

export default Incomes