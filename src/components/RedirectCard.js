import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

const RedirectCard = ({title, icon, screenName}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)} style={styles.card}>
      <View>
        {icon}
        <Text category='h6'>{title}</Text>
        <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-forward-outline' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    width: 370,
    alignSelf: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
})

export default RedirectCard