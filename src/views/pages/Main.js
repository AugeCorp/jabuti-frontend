import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import UserData from '../components/UserData'
import EconomyCard from '../components/EconomyCard' 
import RedirectCard from '../components/RedirectCard'
import { colors, text, margins } from '../../helper/GlobalStyle'

const Main = () => {
  const [expenses, setExpenses] = useState({
    major: 100000,
    minor: 200,
    total: 45098,
    list: []
  });

  const [incomes, setIncomes] = useState({
    total: 150076
  });

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
        screenName="Graphics"
        title="Gráficos"
        icon={
          <Image
            style={styles.icon}
            source={require('../../assets/images/icons/icon-graphics.png')}
          />
        }
      />
    </ScrollView>
  );
};

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
    alignItems: "center",
    letterSpacing: 5,
    marginTop: 35,
    marginLeft: 10,
    transform: [{ rotate: "90deg" }],
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
});

export default Main;