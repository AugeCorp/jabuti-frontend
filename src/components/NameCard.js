import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const NameCard = (props) => {
  return (
    <View>
      <Card style={styles.card}>
        <Icon style={styles.icon} fill='black' name='person-outline' />
        <Text>
          {props.name}
        </Text>
        <Icon style={styles.icon} fill='black' name='arrow-ios-downward-outline' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderColor: 'black',
  },
  icon: {
    width: 40,
    height: 40,
  },
})

export default NameCard
