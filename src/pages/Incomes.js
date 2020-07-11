import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import AddIncomeModal from '../components/AddIncomeModal'
import IncomeList from '../components/IncomeList'
import { colors, margins } from '../helper/GlobalStyle'

const Incomes = () => {
  return (
    <ScrollView style={styles.view}>
      <IncomeList />
      <Text style={styles.totalIncome}>Renda total: R$ 2.400,00</Text>
      {/* <AddIncomeModal /> */}
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