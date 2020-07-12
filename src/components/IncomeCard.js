import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import ProgressCircle from 'react-native-progress-circle'
import { colors, text, margins } from '../../helper/GlobalStyle'
import { decimalPercent } from '../../helper/MoneyHelper'
import { dateToString } from '../../helper/DataHelper'



const IncomeCard = ({ income, percent }) => {
  const [showingDetails, setShowingDetails] = useState(false)
  
  return (
    <View>
      <TouchableOpacity onPress={() => setShowingDetails(!showingDetails)}>
        <View style={styles.listCard}>
          <View>
            <View style={styles.content}>
              <ProgressCircle
                style={styles.percent}
                percent={percent}
                radius={10}
                borderWidth={4}
                color="#5719BE"
                shadowColor="#D8D8D8"
                bgColor="#FFFFFF"
              />
              <Text style={styles.description}>{income.description}</Text>
              <Text style={styles.money}>R$ {income.value}</Text>
            </View>
          </View>

          {showingDetails && (
            <View style={styles.others}>
              <Text style={styles.percent}>{decimalPercent(percent)}%</Text>
              <Text>da renda</Text>
              <Text style={styles.date}>{dateToString(income.receiptDate)}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  listCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    ...margins.content
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  description: {
    ...text.light18,
    marginLeft: 10,
  },
  money: {
    ...text.light18,
    flex: 1,
    color: colors.primary,
    position: 'absolute',
    right: 0,
  },
  percent: {
    color: colors.primary,
    ...text.medium18,
    marginRight: 5,
  },
  date: {
    flex: 1,
    ...text.light14,
    position: 'absolute',
    right: 0,
  },
  others: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },
})

export default IncomeCard