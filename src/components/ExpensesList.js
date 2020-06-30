import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Input, Text, Icon } from '@ui-kitten/components'
import AddExpenseModal from './AddExpensesModal'
import { colors, text } from '../helper/GlobalStyle'

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
    }, {
      id: 5,
      description: 'Café',
      price: '1,50',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 6,
      description: 'Maça',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 7,
      description: 'Manga',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 8,
      description: 'Café',
      price: '1,50',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 9,
      description: 'Maça',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 10,
      description: 'Manga',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 11,
      description: 'Café',
      price: '1,50',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 12,
      description: 'Maça',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 13,
      description: 'Manga',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 14,
      description: 'Café',
      price: '1,50',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 15,
      description: 'Maça',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 16,
      description: 'Manga',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 17,
      description: 'Café',
      price: '1,50',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 18,
      description: 'Maça',
      price: '7,00',
      icon: <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />,
    }, {
      id: 19,
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
        <AddExpenseModal />
        <Input placeholder='Pesquisar por nome, data, valor...' onChangeText={value => handleTextInput(value)} />
        <Text style={styles.date} category="c2">24/06/2020</Text>
        <ScrollView> 
          {rows.map(row => (
            <View style={styles.listCard} key={row.id}>
              {row.icon}
              <View style={styles.text}>
                <Text style={styles.description}>{row.description}</Text>
                <View style={styles.price}>
                  <Text style={styles.symbol}>R$ </Text>
                  <Text style={styles.number}>{row.price}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
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
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  description: text.light18,

  price: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    right: 0,
  },
  symbol: text.light14,
  number: text.light18,
})

export default ExpensesList