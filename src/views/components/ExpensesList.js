import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Input, Text } from '@ui-kitten/components'
import { expenses } from '../../helper/DataTest'
import ExpenseCard from './ExpenseCard'
import { text } from '../helper/GlobalStyle'

const ExpensesList = () => {
  const [rows, setRows] = useState([])
  
  useEffect(() => {
    setRows(expenses)
  }, [])

  const handleTextInput = (value) => {
    const arr = expenses.filter(expense => expense.description.includes(value) || expense.price.includes(value))
    setRows(arr)
  }

  return (
    <View>
      <Input placeholder='Pesquisar por nome, data, valor...' onChangeText={value => handleTextInput(value)} />
      <ScrollView> 
        {rows.map((row, idx) => (
          <Fragment key={row._id}>
            {(idx === 0 || row.payDate !== rows[idx-1].payDate) && (
              <Text style={styles.date}>{row.payDate}</Text>
            )}
            <ExpenseCard row={row} />
          </Fragment>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  date: {
    marginLeft: 15,
    marginBottom: 5,
    ...text.medium14,
  },
})

export default ExpensesList