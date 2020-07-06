import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

const RedirectCard = ({title, icon, screenName}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View style={styles.card}>
        <View style={styles.iconCard}>
          {icon}
        </View>
        <Text style={styles.title}>{title}</Text>
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
    height: 60,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    paddingLeft: 10,
  },
  title: {
    position: 'absolute',
    marginLeft: 50,
    alignSelf: 'center',
    fontSize: 20,
  },
  iconCard: {
    width: 35,
    height: 35,
    alignItems: 'center',
  },
  icon: {
    flex: 1,
    position: 'relative',
    marginLeft: 290,
    width: 30,
    height: 30,
  },
})

export default RedirectCard