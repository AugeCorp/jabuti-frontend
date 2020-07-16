import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Text } from '@ui-kitten/components'
import { margins, text, colors } from '../../helper/GlobalStyle'
import { formatMoney } from '../../helper/MoneyHelper'

const LinearGraphic = ({ color, height, value, totalValue }) => {
  const width = (value * (Dimensions.get('window').width - margins.totalMargin)) / totalValue

  const styles = StyleSheet.create({
    card: {
      width: totalValue ? width : Dimensions.get('window').width - margins.totalMargin,
    },
    graphicTop: {
      backgroundColor: color,
      height,
      borderRadius: 50,
      flex: 1,
      marginTop: 10,
    },
    graphicBg: {
      backgroundColor: colors.lightGrey,
      height,
      width: Dimensions.get('window').width - margins.totalMargin,
      borderRadius: 50,
      flex: 1
    },
  })

  return (
    <View style={styles.card}>
      <View style={styles.graphicTop} />
      <View style={styles.graphicBg} />
    </View>
  )
}


export default LinearGraphic
