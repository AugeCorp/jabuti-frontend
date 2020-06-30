import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { colors, text } from '../helper/GlobalStyle'

const EconomyCard = ({majorExpense, minorExpense, expenses, income}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>resumo do mês</Text>
      <View style={styles.minorCard}>
        <Text style={styles.expensesLabel}>MAIOR GASTO</Text>
        <Text style={styles.major}>R$ {majorExpense}</Text>
        <Text style={styles.expensesLabel}>MENOR GASTO</Text>
        <Text style={styles.minor}>R$ {minorExpense}</Text>
      </View>

      <Text style={styles.graphicsLabel}>seus ganhos:</Text>
      <Text style={styles.graphicsLabel}>seus gastos:</Text>

      <Text style={styles.details} onPress={() => console.log('apertou ver detalhes')}>
        detalhes
      </Text>
      <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginTop: 8,
    color: colors.midGrey,
    textAlign: 'center',
  },
  expensesLabel: text.medium12,
  expensesLabel: {
    marginTop: 10,
    marginLeft: 45,
    margin: 'auto',
  },
  major: {
    fontSize: 25,
    marginTop: 25,
    marginLeft: -100,
    color: '#B73838',
  },
  minor: {
    fontSize: 25,
    marginTop: 25,
    marginLeft: -105,
    color: '#009947',
  },
  card: {
    marginTop: 30,
    marginBottom: 30,
    width: 355,
    alignSelf: 'center',
    borderColor: 'white',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  minorCard: {
    flex: 1,
    flexDirection: 'row',
  },
  graphicsLabel: {
    fontSize: 18,
    color: colors.midGrey,
    marginLeft: 12,
    marginTop: 25,
  },
  details: {
    fontSize: 12,
    marginLeft: 290,
  },
  icon: {
    marginTop: -13,
    marginLeft: 335,
    marginBottom: 10,
    width: 12,
    height: 12,
  },
})

export default EconomyCard
