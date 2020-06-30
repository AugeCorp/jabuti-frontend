import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { colors } from '../helper/GlobalStyle'

const UserData = (props) => {
  return (
    <View style={styles.card}>
      <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-downward-outline' />
      <Text style={styles.title}>carteira de</Text>
      <Text style={styles.name}>
        {props.name}
      </Text>
      <Icon style={styles.iconUser} fill='#5719BE' name='person' />
    </View>
  )
}

const styles = StyleSheet.create({
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
    width: 40,
    height: 40,
    marginTop: 10,
  },
  iconUser: {
    width: 50,
    height: 50,
    margin: 0,
  },
})

export default UserData
