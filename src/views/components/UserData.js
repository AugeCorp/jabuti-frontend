import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { colors, text } from '../../helper/GlobalStyle'

const UserData = (props) => {
  return (
    <View style={styles.card}>
      <Icon style={styles.icon} fill={colors.primary} name='arrow-ios-downward-outline' />
      <View style={styles.nameCard}>
        <Text category='p2'>carteira de</Text>
        <Text category='h5' style={styles.name}>
          {props.name}
        </Text>
      </View>
      <Icon style={styles.icon} fill={colors.primary} name='person' />
    </View>
  )
}

const styles = StyleSheet.create({
  nameCard: {
    flex: 1,
    alignItems: 'flex-end'
  },
  name: {
    color: colors.primary,
    ...text.light20
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  icon: {
    alignSelf: 'center',
    width: 50,
    height: 50
  }
})

export default UserData
