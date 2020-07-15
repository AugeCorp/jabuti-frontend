import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import { colors, text, margins } from '../../helper/GlobalStyle'
import { formatMoney } from '../../helper/MoneyHelper'
import { dateToString } from '../../helper/DataHelper'
import GoalGraphic from '../components/GoalGraphic'


const IncomeCard = ({ goal, percent, color }) => {
  const [showingDetails, setShowingDetails] = useState(false)

  const styles = StyleSheet.create({
    listCard: {
      ...margins.content,
      backgroundColor: colors.white,
      borderRadius: 15,
      marginBottom: 10,
      paddingTop: 10,
      paddingBottom: 10
    },
    content: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      width: 20,
      height: 30,
      marginRight: 10
    },
    description: {
      ...text.light18
    },
    money: {
      ...text.medium12,
      flex: 1,
      color: colors.midGrey
    },
    date: {
      ...text.light14,
      flex: 1,
      position: 'absolute',
      right: 0
    }
  })


  return (
    <TouchableOpacity onPress={() => setShowingDetails(!showingDetails)}>
      <View style={styles.listCard}>
        <View style={styles.content}>
          {color === '#5719BE'
            ? <Image style={styles.icon} source={require('../../assets/images/icons/icon-award-outline-1.png')} />
            : <Image style={styles.icon} source={require('../../assets/images/icons/icon-award-outline-2.png')} />}
          <View>
            <Text style={styles.description}>{goal.description}</Text>
            <Text style={styles.money}>R$ {formatMoney(goal.moneySaved)}</Text>
          </View>
          <Text style={styles.date}>{dateToString(goal.conquestDate)}</Text>
        </View>

        {showingDetails && (
          <View style={styles.others}>
            <GoalGraphic
              graphicColor={colors.primary}
              totalValue={goal.price}
              graphicValue={goal.moneySaved}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default IncomeCard