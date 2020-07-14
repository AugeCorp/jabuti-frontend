import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'

import MainGraphic from './MainGraphic'
import { colors, text, margins } from '../../helper/GlobalStyle'


const EconomyCard = ({ expenses, incomes }) => {
  const highestValue =
    expenses.total >= incomes.total ? expenses.total : incomes.total

  return (
    <View style={styles.card}>
      <Text style={styles.title}>resumo do mês</Text>

      <View style={styles.expensesCard}>
        <View style={styles.individualCard}>
          <Text style={styles.expensesLabel}>MAIOR GASTO</Text>
          <Text style={styles.major}>R$ {expenses.major}</Text>
        </View>
        <View>
          <Text style={styles.expensesLabel}>MENOR GASTO</Text>
          <Text style={styles.minor}>R$ {expenses.minor}</Text>
        </View>
      </View>

      <MainGraphic
        label="seus ganhos:"
        graphicColor={colors.primary}
        totalValue={highestValue}
        graphicValue={incomes.total}
      />

      <MainGraphic
        label="seus gastos:"
        graphicColor={colors.secondary}
        totalValue={highestValue}
        graphicValue={expenses.total}
      />

      <View style={styles.detailsCard}>
        <Text style={styles.details} onPress={() => console.log('aaaaa')}>
          detalhes
        </Text>
        <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    ...text.regular20,
    marginTop: 8,
    color: colors.midGrey,
    textAlign: 'center',
    marginBottom: 20,
  },
  expensesLabel: {
    ...text.medium12,
    color: colors.midGrey,
  },
  major: {
    ...text.light25,
    color: colors.error,
  },
  minor: {
    ...text.light25,
    color: colors.success,
  },
  card: {
    ...margins.content,
    marginTop: 30,
    marginBottom: 10,
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  expensesCard: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'space-around',
  },
  individualCard: {
    paddingRight: 50,
  },
  detailsCard: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    ...margins.content,
    paddingBottom: 10,
  },
  details: {
    ...text.medium12,
    color: colors.midGrey,
  },
  icon: {
    marginTop: 3,
    width: 12,
    height: 12,
  },
})

export default EconomyCard
