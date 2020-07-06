import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import AddIncomeModal from '../components/AddIncomeModal'
import IncomeList from '../components/IncomeList'
import { colors, margins } from '../helper/GlobalStyle'

const Incomes = () => {
  return (
    <ScrollView style={styles.view}>
      <IncomeList />
      <AddIncomeModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: margins.global,
  totalIncome: {
    color: colors.primary,
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 30,
  }
})

export default Incomes