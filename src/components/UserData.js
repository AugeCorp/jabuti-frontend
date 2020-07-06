import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { colors } from '../helper/GlobalStyle'

const UserData = (props) => {
  return (
<<<<<<< HEAD
    <View>
      <Card style={styles.card}>
        <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-downward-outline' />
        <Text category='p2'>carteira de</Text>
        <Text category='h5' style={styles.name}>
          {props.name}
        </Text>
        <Icon style={styles.icon} fill='#5719BE' name='person' />
      </Card>
=======
    <View style={styles.card}>
      <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-downward-outline' />
      <Text style={styles.title}>carteira de</Text>
      <Text style={styles.name}>
        {props.name}
      </Text>
      <Icon style={styles.iconUser} fill='#5719BE' name='person' />
>>>>>>> 0f12903b0797ae77da8079d50e83c7cb1f0a2f59
    </View>
  )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
  title: {
    position: 'absolute',
    marginLeft: 265,
    marginTop: 15,
  },
  name: {
    color: colors.primary,
    marginTop: 20,
    marginLeft: 150,
    fontSize: 20,
>>>>>>> 0f12903b0797ae77da8079d50e83c7cb1f0a2f59
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  icon: {
<<<<<<< HEAD
    width: 50,
    height: 50,
=======
    width: 40,
    height: 40,
    marginTop: 10,
  },
  iconUser: {
    width: 50,
    height: 50,
    margin: 0,
>>>>>>> 0f12903b0797ae77da8079d50e83c7cb1f0a2f59
  },
})

export default UserData
