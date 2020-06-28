import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Icon } from '@ui-kitten/components'
import NameCard from '../components/NameCard'
import EconomyCard from '../components/EconomyCard'
import RedirectCard from '../components/RedirectCard'

const Main = () => {
  return (
    <ScrollView>
      <NameCard name="Lucas Zacarias" />
      <EconomyCard majorExpense="1255,60" minorExpense="15,10" spend="100" income="10000" />
      <RedirectCard url="/gastos" title="Gastos" icon={( <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' /> )} />
      <RedirectCard url="/renda" title="Renda" icon={( <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' /> )} />
      <RedirectCard url="/gráficos" title="Gráficos" icon={( <Icon style={styles.icon} fill='black' name='arrow-ios-forward-outline' /> )} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
})

export default Main