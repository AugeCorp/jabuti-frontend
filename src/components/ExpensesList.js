import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Input, Text, Icon } from '@ui-kitten/components'
import AddExpenseModal from './AddExpensesModal'
import { colors } from '../helper/GlobalStyle'

const ExpensesList = () => {
  const [rows, setRows] = useState([])

  const expenses = [
    {
      id: 1,
      description: 'Banana',
      price: '2,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 2,
      description: 'Café',
      price: '1,50',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 3,
      description: 'Maça',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 4,
      description: 'Manga',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    },
  ]

  useEffect(() => {
    setRows(expenses)
  }, [])

  const handleTextInput = (value) => {
    const arr = expenses.filter(expense => expense.description.includes(value) || expense.price.includes(value))
    setRows(arr)
  }

  return (
    <View>
      <Card style={styles.card}>
        <Input placeholder='Pesquisar por nome, data, valor...' onChangeText={value => handleTextInput(value)} />
        <Text style={styles.date} category="c2">24/06/2020</Text>
        <ScrollView> 
          {rows.map(row => (
            <Card style={styles.listCard} key={row.id}>
              {row.icon}
              <Text category="h6">{row.description}</Text>
              <Text category="h6">RS {row.price}</Text>
            </Card>
          ))}
        </ScrollView>
        <AddExpenseModal />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    marginLeft: 15,
    marginBottom: 5,
  },
  card: {
    marginTop: 5,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  listCard: {
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 15,
    marginBottom: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default ExpensesList