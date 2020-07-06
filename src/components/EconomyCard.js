import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { colors, text, margins } from '../helper/GlobalStyle'

const EconomyCard = ({majorExpense, minorExpense, expenses, income}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>resumo do mês</Text>

      <View style={styles.expensesCard}>
        <View style={styles.individualCard}>
          <Text style={styles.expensesLabel}>MAIOR GASTO</Text>
          <Text style={styles.major}>R$ {majorExpense}</Text>
        </View>
        <View>
          <Text style={styles.expensesLabel}>MENOR GASTO</Text>
          <Text style={styles.minor}>R$ {minorExpense}</Text>
        </View>
      </View>

      <Text category='h6' style={styles.graphicsLabel}>seus ganhos: {income}</Text>
      <Text category='h6' style={styles.graphicsLabel}>seus gastos: {expenses}</Text>

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
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    borderColor: 'white',
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
  graphicsLabel: {
    ...text.light18,
    color: colors.midGrey,
    marginLeft: 12,
    marginTop: 25,
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
