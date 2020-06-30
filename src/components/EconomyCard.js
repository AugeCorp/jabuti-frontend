import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const EconomyCard = ({majorExpense, minorExpense, expenses, income}) => {
  return (
    <View>
      <Card style={styles.card}>
        <Text style={styles.cardTitle} category='h6'>resumo do mês</Text>

        <Text category='c2' style={styles.expensesLabel}>MAIOR GASTO</Text>
        <Text style={styles.major}>R${majorExpense}</Text>

        <Text category='c2' style={styles.expensesLabel}>MENOR GASTO</Text>
        <Text style={styles.minor}>R${minorExpense}</Text>

        <Text category='h6' style={styles.graphicsLabel}>seus ganhos: {income}</Text>
        <Text category='h6' style={styles.graphicsLabel}>seus gastos: {expenses}</Text>

        <Text category='p2' onPress={() => console.log('aaaaa')}>
          detalhes
        </Text>
        <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  expensesLabel: {
    color: '#9F9F9F',
  },
  graphicsLabel: {
    color: '#9F9F9F',
  },
  major: {
    fontSize: 24,
    color: '#B73838',
  },
  minor: {
    fontSize: 24,
    color: '#009947',
  },
  card: {
    marginTop: 30,
    width: 370,
    alignSelf: 'center',
    borderColor: 'white',
    borderRadius: 15,
  },
  cardTitle: {
    textAlign: 'center',
  },
  icon: {
    width: 12,
    height: 12,
  },
})

export default EconomyCard
