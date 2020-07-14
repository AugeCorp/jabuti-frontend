import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text } from '@ui-kitten/components'
import { margins, text } from '../../helper/GlobalStyle'
import { formatMoney } from '../../helper/MoneyHelper'

const LinearGraphic = ({ color, height, value, totalValue }) => {
  const width = (value * (Dimensions.get('window').width - margins.totalMargin)) / totalValue

  const styles = StyleSheet.create({
    graphicTop: {
      backgroundColor: color,
      height,
      borderRadius: 50,
      flex: 1
    },
    value: {
      ...text.light14,
      color,
      position: 'absolute',
      top: 3,
      right: 0
    }
  })

  return (
    <View style={{ width }}>
      <View style={styles.graphicTop}>
        <Text style={styles.value}>R$ {formatMoney(value)}</Text>
      </View>
    </View>
  )
}


export default LinearGraphic
