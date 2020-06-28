import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'

const RedirectCard = ({title, icon, url}) => {
  return (
    <TouchableOpacity onPress={() => console.log(url)} style={styles.card}>
      <View>
        {icon}
        <Text>{title}</Text>
        <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default RedirectCard