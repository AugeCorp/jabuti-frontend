import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import UserData from '../components/UserData'
import EconomyCard from '../components/EconomyCard'
import RedirectCard from '../components/RedirectCard'

const Main = () => {
  return (
    <ScrollView>
      <UserData name="Lucas Zacarias" />
      <Text>este mês você economizou</Text>
      <Text style={styles.economy}>R$ 9.990.900,00</Text>
      <EconomyCard majorExpense="1255,60" minorExpense="15,10" spend="100" income="10000" />
      <RedirectCard screenName="Expenses" title="Gastos" icon={( <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' /> )} />
      <RedirectCard screenName="Incomes" title="Renda" icon={( <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' /> )} />
      <RedirectCard screenName="Graphics" title="Gráficos" icon={( <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' /> )} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  economy: {
    color: '#5719BE',
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default Main