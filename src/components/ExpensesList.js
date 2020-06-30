import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Card, Input, Text, Icon } from '@ui-kitten/components'
import AddExpenseModal from './AddExpensesModal'
import { expenses } from '../helper/DataTest'
import { colors, text } from '../helper/GlobalStyle'
import { categoryIconUrl } from '../helper/ExpensesHelper'

const ExpensesList = () => {
  const [rows, setRows] = useState([])
  const [chosenExpense, setChosenExpense] = useState(null)

  

  useEffect(() => {
    setRows(expenses)
  }, [])

  const renderIcon = (expenseCategory) => {
    if (expenseCategory === 'Lazer') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-recreation-outline.png')} />
    }
    if (expenseCategory === 'Casa') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-home-outline.png')} />
    }
    if (expenseCategory === 'Estudo') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-book-outline.png')} />
    }
    if (expenseCategory === 'Alimentação') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-burger-outline.png')} />
    }
    if (expenseCategory === 'Saúde') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-heart-outline.png')} />
    }
    if (expenseCategory === 'Vestimenta') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-shirt-outline.png')} />
    }
    if (expenseCategory === 'Transporte') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-car-outline.png')} />
    }

    return <Image style={styles.icon} source={require('../static/images/icons/icon-recreation-outline.png')} />
  }

  const handleTextInput = (value) => {
    const arr = expenses.filter(expense => expense.description.includes(value) || expense.price.includes(value))
    setRows(arr)
  }

  
  const handleExpenseClick = (spend) => {
    setChosenExpense(spend)
  }

  return (
    <View>
      <Card style={styles.card}>
        <AddExpenseModal />
        <Input placeholder='Pesquisar por nome, data, valor...' onChangeText={value => handleTextInput(value)} />
        <Text style={styles.date} category="c2">24/06/2020</Text>
        <ScrollView> 
          {rows.map(row => (
            <TouchableOpacity onPress={() => handleExpenseClick(row)} key={row._id}>
              <View style={styles.listCard}>
                <View>
                  <View style={styles.text}>
                    {renderIcon(row.category)}
                    <Text style={styles.description}>{row.description}</Text>
                    <View style={styles.price}>
                      <Text style={styles.symbol}>R$ </Text>
                      <Text style={styles.number}>{row.price}</Text>
                    </View>
                  </View>
                </View>

                {chosenExpense && chosenExpense._id === row._id && (
                  <View style={styles.others}>
                    <Text style={styles.category}>{row.category}</Text>
                    <View style={styles.price}>
                      <Text style={styles.priorityLabel}>Prioridade </Text>
                      <Text style={styles.priority}>{row.priority.toLowerCase()}</Text>
                    </View>
                  </View>
                )}
              </View>
            </TouchableOpacity>
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
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
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

  others: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },

  category: {
    ...text.medium14,
    color: colors.primary,
  },
  priorityLabel: text.light14,
  priority: {
    ...text.medium14,
    color: colors.success,
  },
})

export default ExpensesList