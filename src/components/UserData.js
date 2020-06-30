import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Text, Icon } from '@ui-kitten/components'

const UserData = (props) => {
  return (
    <View>
      <Card style={styles.card}>
        <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-downward-outline' />
        <Text category='p2'>carteira de</Text>
        <Text category='h5' style={styles.name}>
          {props.name}
        </Text>
        <Icon style={styles.icon} fill='#5719BE' name='person' />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  name: {
    color: '#5719BE',
  },
  card: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  icon: {
    width: 50,
    height: 50,
  },
})

export default UserData
