import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Input, Text } from '@ui-kitten/components'
import AddExpenseModal from './AddExpensesModal'

const ExpensesList = () => {
  const [rows, setRows] = useState([])

  const expenses = [
    {
      id: 1,
      description: 'Banana',
      price: '2,00',
    }, {
      id: 2,
      description: 'Café',
      price: '1,50',
    }, {
      id: 3,
      description: 'Maça',
      price: '7,00',
    }, {
      id: 4,
      description: 'Manga',
      price: '7,00',
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
        <AddExpenseModal />
        <ScrollView style={styles.card}> 
          {rows.map(row => <Card key={row.id}><Text>{row.description + ' ---- ' + row.price}</Text></Card>)}
        </ScrollView>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default ExpensesList