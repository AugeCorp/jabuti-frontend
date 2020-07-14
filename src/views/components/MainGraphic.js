import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { Text } from '@ui-kitten/components'

import LinearGraphic from './LinearGraphic'
import { colors, text, margins } from '../../helper/GlobalStyle'


const MainGraphic = ({ label, graphicColor, totalValue, graphicValue }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <LinearGraphic
        color={graphicColor}
        height={4}
        totalValue={totalValue}
        value={graphicValue}
      />
      <View style={styles.bottom} />
    </>
  )
}

const styles = StyleSheet.create({
  label: {
    ...text.light18,
    color: colors.midGrey,
    marginBottom: 5
  },
  bottom: {
    marginBottom: 10
  }
})

export default MainGraphic
