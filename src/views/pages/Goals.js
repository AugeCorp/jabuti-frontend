import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import GoalsList from '../components/GoalsList'
import { colors, margins, text } from '../../helper/GlobalStyle'
import { goals } from '../../helper/DataTest'
import { formatMoney } from '../../helper/MoneyHelper'


const Goals = () => {
  const [totalSaved, setTotalSaved] = useState('-')

  useEffect(() => {
    const totalValue = goals.reduce((acumulator, goal) => {
      return acumulator + goal.moneySaved;
    }, 0);
    setTotalSaved(totalValue)
  }, [goals])


  return (
    <ScrollView style={styles.view}>
      <View style={styles.totalIncome}>
        <Image style={styles.icon} source={require('../../assets/images/icons/income-icon.png')} />
        <View>
          <Text style={styles.label}>você já economizou</Text>
          <View style={styles.moneyCard}>
            <Text style={styles.moneySign}>R$</Text>
            <Text style={styles.money}>{totalSaved === '-' ? '-' : formatMoney(totalSaved)}</Text>
          </View>
        </View>
      </View>
      <GoalsList goals={goals} totalSaved={totalSaved} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  view: margins.global,
  totalIncome: {
    marginTop: 30,
    marginBottom: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 8,
    marginLeft: 10,
    alignSelf: 'center'
  },
  label: {
    ...text.light20,
    color: colors.midGrey
  },
  moneyCard: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -10
  },
  moneySign: {
    ...text.regular20,
    color: colors.primary,
    marginRight: 5,
    alignSelf: 'flex-end',
    paddingBottom: 5
  },
  money: {
    color: colors.primary,
    ...text.regular35,
    alignSelf: 'flex-end'
  }
})

export default Goals
