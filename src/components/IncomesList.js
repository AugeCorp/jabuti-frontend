import React, { useState, useEffect, Fragment } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text } from '@ui-kitten/components'
import IncomeCard from './IncomeCard'
import { colors, text } from '../helper/GlobalStyle'
import { toPercent } from '../helper/MoneyHelper'
import { translateType } from '../helper/DataHelper'

const IncomesList = ({ incomes, totalIncome }) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    setRows(incomes)
  }, [incomes])

  return (
    <View>
      <View style={styles.card}>
        <ScrollView> 
          {rows.map((income, idx) => (
            <Fragment key={income._id}>
              {(idx === 0 || income.type !== rows[idx-1].type) && (
                <Text style={styles.type}>{translateType(income.type)}</Text>
              )}
              <IncomeCard income={income} percent={toPercent(totalIncome, income.value)} />
            </Fragment>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  type: {
    marginLeft: 15,
    marginBottom: 5,
    color: colors.primary,
    ...text.medium14,
  },
  card: {
    marginTop: 5,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
})

export default IncomesList