import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '@ui-kitten/components'

import LinearGraphic from './LinearGraphic2'
import { colors, text } from '../../helper/GlobalStyle'
import { formatMoney } from '../../helper/MoneyHelper'


const GoalGraphic = ({ label, graphicColor, totalValue, graphicValue }) => {
  const styles = StyleSheet.create({
    root: {
      paddingTop: 5,
      paddingBottom: 5
    },
    savedValue: {
      ...text.medium12,
      color: colors.midGrey,
      marginBottom: 5
    },
    valueLabels: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    totalValue: {
      ...text.medium12,
      color: graphicColor,
      marginBottom: 5
    },
    bottom: {
      marginBottom: 10
    }
  })

  return (
    <View style={styles.root}>
      <LinearGraphic
        color={graphicColor}
        height={4}
        totalValue={totalValue}
        value={graphicValue}
      />
      <View style={styles.valueLabels}>
        <Text style={styles.savedValue}>R${formatMoney(graphicValue)}</Text>
        <Text style={styles.totalValue}>R${formatMoney(totalValue)}</Text>
      </View>
      <View style={styles.bottom} />
    </View>
  )
}

export default GoalGraphic
