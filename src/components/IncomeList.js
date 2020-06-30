import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Card, Input, Text } from '@ui-kitten/components'

const IncomeList = () => {
  const [rows, setRows] = useState([])

  const incomes = [
    {
      id: 1,
      description: 'Freela Design',
      money: '200,00',
    }, {
      id: 2,
      description: 'Trabalho',
      money: '1.500,00',
    }, {
      id: 3,
      description: 'Bolsa Família',
      money: '100,00',
    }, {
      id: 4,
      description: 'Auxílio Emergencial',
      money: '600,00',
    },
  ]

  useEffect(() => {
    setRows(incomes)
  }, [])

  const handleTextInput = (value) => {
    const arr = incomes.filter(income => income.description.includes(value) || income.money.includes(value))
    setRows(arr)
  }

  return (
    <View>
      <Card style={styles.card}>
        <Input placeholder='Pesquisar por nome, data, valor...' onChangeText={value => handleTextInput(value)} />
        <ScrollView style={styles.card}> 
          {rows.map(row => <Card key={row.id}><Text>{row.description + ' ---- ' + row.money}</Text></Card>)}
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

export default IncomeList