import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const NameCard = (props) => {
  return (
    <View>
      <Card style={styles.card}>
        <Icon style={styles.icon} fill='black' name='arrow-ios-downward-outline' />
        <Text>carteira de</Text>
        <Text>
          {props.name}
        </Text>
        <Icon style={styles.icon} fill='black' name='person' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
  },
  icon: {
    width: 40,
    height: 40,
  },
})

export default NameCard
