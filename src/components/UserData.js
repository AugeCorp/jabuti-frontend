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
<<<<<<< Updated upstream
  name: {
    color: '#5719BE',
=======
  title: {
    position: 'absolute',
    marginLeft: 260,
    marginTop: 15,
  },
  name: {
    color: colors.primary,
    marginTop: 20,
    marginLeft: 145,
    fontSize: 20,
>>>>>>> Stashed changes
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
