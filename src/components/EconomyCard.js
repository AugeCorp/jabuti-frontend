import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const EconomyCard = (props) => {
  return (
    <View>
      <Card style={styles.card}>
        <Text>economia do mês</Text>        
        <Text>seus gastos: {props.spend}</Text>
        <Text>seus ganhos: {props.income}</Text>
        <Text onPress={() => Linking.openURL('http://google.com')}>
          detalhes
        </Text>
        <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  icon: {
    width: 15,
    height: 15,
  },
})

export default EconomyCard
