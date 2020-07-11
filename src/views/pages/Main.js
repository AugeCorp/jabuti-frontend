import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import UserData from '../components/UserData'
import EconomyCard from '../components/EconomyCard'
import RedirectCard from '../components/RedirectCard'
import { colors, text } from '../../helper/GlobalStyle'
import Expense from '../../controllers/Expense'
const expense = new Expense();
// import Goals from '../services/controller/Goals'
// const goals = new Goals();
// import Income from '../services/controller/Income'
// const income = new Income();
// import Graphics from '../services/controller/Graphics'
// const graphics = new Graphics();

const Main = () => {
  const [expenses, setExpenses] = useState({
    majorExpense: 0, 
    minorExpense: 0,
    allExpenses: 0,
  })

  const handleSetExpense = async () => {
    const all = await expense.remove();
    console.log(all)
  }

  useEffect(() => {
    handleSetExpense();
  }, [expenses])

  return (
    <ScrollView style={styles.view}>
      <UserData name="Lucas Zacarias" />

      <View style={styles.card}> 
        <View style={styles.economyStatus}>
          <Text style={styles.smile}>:)</Text>
        </View>
        <Text style={styles.economyInfo}>este mês</Text> 
        <Text style={styles.economyInfo2}>você economizou</Text>
        <Text style={styles.moneySign}>R$</Text>
        <Text style={styles.economy}>9.990.900,</Text>
        <Text style={styles.cents}>00</Text>
      </View>

      <EconomyCard 
        majorExpense={expenses.majorExpense} 
        minorExpense={expenses.minorExpense} 
        expenses={expenses.AllExpenses}
        income="10000" 
      />
      <RedirectCard 
        screenName="Expenses" 
        title="Gastos" 
        icon={( 
          <Icon style={styles.icon} 
            fill='black' 
            name='arrow-ios-forward-outline' 
          /> 
        )} 
      />
      <RedirectCard 
        screenName="Incomes" 
        title="Renda" 
        icon={( 
          <Icon 
            style={styles.icon} 
            fill='black' 
            name='arrow-ios-forward-outline' 
          /> 
        )} 
      />
      <RedirectCard 
        screenName="Graphics" 
        title="Gráficos" 
        icon={( 
          <Icon 
            style={styles.icon} 
            fill='black' 
            name='arrow-ios-forward-outline' 
          /> 
        )} 
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: margins.global,
  card: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  economyInfo: {
    marginLeft: 5,
    ...text.light20,
    alignSelf: 'flex-start',
  },
  economyInfo2: {
    ...text.light20,
    marginTop: 20,
    marginLeft: -80,
  },
  moneySign: {
    ...text.regular20,
    color: colors.primary,
    marginTop: 55,
    marginLeft: -155,
  },
  smile: {
    alignItems: 'center',
    letterSpacing: 5,
    marginTop: 35,
    marginLeft: 10,
    transform: [{ rotate: '90deg'}],
    fontSize: 50,
    color: colors.white,
  },
  economyStatus: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },  
  economy: {
    marginTop: 40,
    ...text.regular35,
    color: colors.primary,
  },
  cents: {
    marginTop: 55,
    ...text.regular20,
    color: colors.primary,
  },
})

export default Main