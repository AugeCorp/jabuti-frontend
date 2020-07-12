import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { text, colors, margins } from '../helper/GlobalStyle'


const RedirectCard = ({title, icon, screenName}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View style={styles.card}>
        <View style={styles.iconCard}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
        <Icon style={styles.icon} fill='#5719BE' name='arrow-ios-forward-outline' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    ...margins.content,
    borderRadius: 20,
    backgroundColor: colors.white,
    height: 60,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconCard: {
    width: 35,
    height: 35,
    alignItems: 'center',
  },
  title: {
    ...text.light20,
    color: colors.grey,
    marginLeft: 5,
    flex: 1,
    alignSelf: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default RedirectCard