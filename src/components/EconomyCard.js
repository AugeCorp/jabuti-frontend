import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const EconomyCard = ({majorExpense, minorExpense, expenses, income}) => {
  return (
    <View>
      <Card style={styles.card}>
        <Text>resumo do mês</Text>

        <Text>maior gasto</Text>
        <Text>R${majorExpense}</Text>

        <Text>menor gasto</Text>
        <Text>R${minorExpense}</Text>

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
  card: {
    marginTop: 30,
  },
  icon: {
    width: 15,
    height: 15,
  },
})

export default EconomyCard
