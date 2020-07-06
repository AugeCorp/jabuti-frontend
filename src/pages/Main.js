import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Icon, Text } from '@ui-kitten/components'
import UserData from '../components/UserData'
import EconomyCard from '../components/EconomyCard'
import RedirectCard from '../components/RedirectCard'
import { colors, text } from '../helper/GlobalStyle'
import Expense from '../services/controller/Expense'
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
    expenses: 0
  })

  const handleSetExpense = async () => {
    const all = await expense.remove();
    console.log(all)
  }

  useEffect(() => {
    handleSetExpense();
  }, [expenses])

  return (
    <ScrollView>
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
        expenses="100" 
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
  card: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 12,
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
  economyInfo: {
    marginLeft: 10,
    marginTop: 2,
    fontSize: 20,
  },
  economyInfo2: {
    marginLeft: -80,
    marginTop: 22,
    fontSize: 20,
  },
  moneySign: {
    marginLeft: -160,
    marginTop: 55,
    marginRight: 2,
    fontSize: 20,
    color: colors.primary,
  },
  economy: {
    marginLeft: 0,
    marginTop: 40,
    fontSize: 35,
    color: colors.primary,
  },
  cents: {
    marginTop: 55,
    marginRight: 2,
    fontSize: 20,
    color: colors.primary,
  },
  icon: {
    width: 30,
    height: 30,
  },
})

export default Main