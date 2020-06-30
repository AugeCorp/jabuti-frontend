import React from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import AddIncomeModal from '../components/AddIncomeModal'
import IncomeList from '../components/IncomeList'
import { colors } from '../helper/GlobalStyle'

const Incomes = () => {
  return (
    <ScrollView>
      <IncomeList />
      <Text style={styles.totalIncome}>Renda total: R$ 2.400,00</Text>
      {/* <AddIncomeModal /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  totalIncome: {
    color: colors.primary,
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 30,
  }
})

export default Incomes