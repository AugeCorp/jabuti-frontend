import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const EconomyCard = ({majorExpense, minorExpense, expenses, income}) => {
  return (
    <View>
      <Card style={styles.card}>
        <Text>resumo do mês</Text>

        <Text>maior gasto</Text>
        <Text style={styles.major}>R${majorExpense}</Text>

        <Text>menor gasto</Text>
        <Text style={styles.minor}>R${minorExpense}</Text>

        <Text>seus ganhos: {income}</Text>
        <Text>seus gastos: {expenses}</Text>

        <Text onPress={() => console.log('aaaaa')}>
          detalhes
        </Text>
        <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  major: {
    color: '#B73838',
  },
  minor: {
    color: '#009947',
  },
  card: {
    marginTop: 30,
    width: 370,
    alignSelf: 'center',
    borderColor: 'white',
    borderRadius: 15,
  },
  icon: {
    width: 15,
    height: 15,
  },
})

export default EconomyCard
