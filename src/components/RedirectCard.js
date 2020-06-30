import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

const RedirectCard = ({title, icon, screenName}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View style={styles.card}>
        {icon}
        <Text style={styles.title}>{title}</Text>
        <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-forward-outline' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    width: 355,
    height: 60,
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  title: {
    position: 'absolute',
    marginLeft: 30,
    alignSelf: 'center',
    fontSize: 20,
  },
  icon: {
    position: 'relative',
    marginLeft: 280,
    width: 30,
    height: 30,
  },
})

export default RedirectCard