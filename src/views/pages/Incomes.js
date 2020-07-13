import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import AddIncomeModal from '../components/AddIncomeModal'
import IncomesList from '../components/IncomesList'
import { colors, margins, text } from '../../helper/GlobalStyle'
import { incomes } from '../../helper/DataTest'


const Incomes = () => {
  const [totalIncome, setTotalIncome] = useState('-')

  useEffect(() => {
    const totalValue = incomes.reduce((acumulator, income) => {
      return acumulator + income.value;
    }, 0);
    setTotalIncome(totalValue)
  }, [incomes])


  return (
    <ScrollView style={styles.view}>
      <View style={styles.totalIncome}>
        <Image style={styles.icon} source={require('../../assets/images/icons/income-icon.png')} />
        <View>
          <Text style={styles.label}>total do mês:</Text>
          <View style={styles.moneyCard}>
            <Text style={styles.moneySign}>R$</Text>
            <Text style={styles.money}>{totalIncome}</Text>
          </View>
        </View>
      </View>
      <IncomesList incomes={incomes} totalIncome={totalIncome} />
      <AddIncomeModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: margins.global,
  totalIncome: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
    marginLeft: 10,
    alignSelf: 'center',
  },
  label: {
    ...text.light20,
    color: colors.midGrey,
  },
  moneyCard: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -10,
  },
  moneySign: {
    ...text.regular20,
    color: colors.primary,
    marginRight: 5,
    alignSelf: 'flex-end',
    paddingBottom: 5,
  },
  money: {
    color: colors.primary,
    ...text.regular35,
    alignSelf: 'flex-end',
  }
})

export default Incomes