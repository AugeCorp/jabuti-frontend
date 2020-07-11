import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text } from '@ui-kitten/components'
import { colors } from '../../helper/GlobalStyle'

const IncomeList = () => {
  const [rows, setRows] = useState([])

  const incomes = [
    {
      id: 1,
      description: 'Freela Design',
      money: '200,00',
      percent: '8',
    }, {
      id: 2,
      description: 'Trabalho',
      money: '1.500,00',
      percent: '62',
    }, {
      id: 3,
      description: 'Bolsa Família',
      money: '100,00',
      percent: '5',
    }, {
      id: 4,
      description: 'Auxílio Emergencial',
      money: '600,00',
      percent: '25',
    },
  ]

  useEffect(() => {
    setRows(incomes)
  }, [])

  // const handleTextInput = (value) => {
  //   const arr = incomes.filter(income => income.description.includes(value) || income.money.includes(value))
  //   setRows(arr)
  // }

  return (
    <View>
      <View style={styles.card}>
        {/* <Input placeholder='Pesquisar por nome, data, valor...' onChangeText={value => handleTextInput(value)} /> */}
        <ScrollView style={styles.card}> 
          {rows.map(row => (
            <View style={styles.incomeCard} key={row.id}>
              <Text style={styles.description}>{row.description}</Text>
              <Text style={styles.money}>R$ {row.money}</Text>
              <Text style={styles.percent}>{row.percent}%</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    width: 355,
    alignSelf: 'center',
  },
  description: {
    position: 'absolute',
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 15,
  },
  money: {
    position: 'relative',
    fontSize: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  percent: {
    position: 'absolute',
    alignItems: 'center',
    marginLeft: 270,
    marginTop: 20,
    fontSize: 35,
    color: colors.primary,
  },
  incomeCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    marginTop: 10,
    width: 355,
    height: 100,
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default IncomeList