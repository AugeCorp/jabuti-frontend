import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import UserData from '../components/UserData'
import EconomyCard from '../components/EconomyCard' 
import RedirectCard from '../components/RedirectCard'
import { colors, text, margins } from '../../helper/GlobalStyle'
import { formatMoney } from '../../helper/MoneyHelper'
import { expenses as expensesData, incomes as incomesData, user as userData } from '../../helper/DataTest'

const Main = () => {
  const [moneyWasSaved, setMoneyWasSaved] = useState(true)
  const [economyDifference, setEconomyDifference] = useState(0)
  const [expenses, setExpenses] = useState({
    major: 0,
    minor: 0,
    total: 0,
    list: []
  });
  const [incomes, setIncomes] = useState({
    total: 0
  });


  useEffect(() => {
    // Setting expenses data
    let majorExpense = 0
    let minorExpense = 0
    let totalExpenses = 0

    expensesData.map(expense => {
      if (expense.price > majorExpense || majorExpense === 0) {
        majorExpense = expense.price
      }
      if (expense.price < minorExpense || minorExpense === 0) {
        minorExpense = expense.price
      }
      totalExpenses += expense.price
    })

    setExpenses({
      major: majorExpense,
      minor: minorExpense,
      total: totalExpenses,
      list: expensesData
    })

    // Setting incomes data
    let totalIncomes = 0

    incomesData.map(income => totalIncomes += income.value)

    setIncomes({ total: totalIncomes })


    if (totalExpenses > totalIncomes) {
      setMoneyWasSaved(false)
      setEconomyDifference(totalExpenses - totalIncomes)
    } else {
      setMoneyWasSaved(true)
      setEconomyDifference(totalIncomes - totalExpenses)
    }
  }, [])


  return (
    <ScrollView style={styles.view}>
      <UserData name={userData.name} email={userData.email} lastAccess={userData.lastAccess} />

      <View style={styles.economyCard}>
        <View style={styles.economyStatus}>
          <Text style={styles.smile}>{moneyWasSaved ? ':)' : ':('}</Text>
        </View>
        <View style={styles.economyDescription}>
          <Text style={styles.economyInfo}>este mês</Text>
          <Text style={styles.economyInfo2}>
            {moneyWasSaved ? 'você economizou' : 'você extrapolou'}
          </Text>
          <View style={styles.economyDifference}>
            <Text style={styles.moneySign}>R$</Text>
            <Text style={styles.economy}>{formatMoney(economyDifference)}</Text>
          </View>
        </View>
      </View>

      <EconomyCard expenses={expenses} incomes={incomes} />

      <RedirectCard
        screenName="Expenses"
        title="Gastos"
        icon={
          <Image
            style={styles.icon}
            source={require('../../assets/images/icons/icon-expense.png')}
          />
        }
      />
      <RedirectCard
        screenName="Incomes"
        title="Renda"
        icon={
          <Image
            style={styles.icon}
            source={require('../../assets/images/icons/icon-income.png')}
          />
        }
      />
      <RedirectCard
        screenName="Goals"
        title="Objetivos"
        icon={
          <Image
            style={styles.icon}
            source={require('../../assets/images/icons/icon-graphics.png')}
          />
        }
      />
      <View style={styles.margin} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: margins.global,
  economyCard: {
    ...margins.content,
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  economyStatus: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: colors.primary
  },
  smile: {
    alignItems: 'center',
    letterSpacing: 5,
    marginTop: 40,
    marginLeft: 10,
    transform: [{ rotate: '90deg' }],
    fontSize: 40,
    color: colors.white
  },
  economyDescription: {
    flexDirection: 'column',
    marginLeft: 5
  },
  economyInfo: {
    ...text.light20,
    alignSelf: 'flex-start'
  },
  economyInfo2: {
    ...text.light20,
    marginTop: -5
  },
  economyDifference: {
    flexDirection: 'row',
    marginTop: -5
  },
  moneySign: {
    ...text.regular20,
    color: colors.primary,
    marginTop: 14
  },
  economy: {
    ...text.regular35,
    color: colors.primary,
    marginLeft: 2
  },
  margin: {
    marginBottom: 50
  }
});

export default Main;
