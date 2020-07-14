import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text } from '@ui-kitten/components'
import GoalCard from './GoalCard'
import { colors, text, margins } from '../../helper/GlobalStyle'
import { toPercent } from '../../helper/MoneyHelper'
import { translateType } from '../../helper/DataHelper'

const GoalsList = ({ goals, totalSaved }) => {
  const [goalsPending, setGoalsPending] = useState(null)
  const [goalsConquered, setGoalsConquered] = useState(null)

  useEffect(() => {
    let pending = []
    let conquered = []

    goals.map((goal) => {
      if (goal.conquered) {
        conquered.push(goal)
      } else if (!goal.conquered) {
        pending.push(goal)
      }
    })

    setGoalsPending(pending.length > 0 ? pending : null)
    setGoalsConquered(conquered.length > 0 ? conquered : null)
  }, [goals])

  return (
    <ScrollView style={styles.card}>
      {goalsPending && (
        <>
          <Text style={styles.type1}>pendentes</Text>
          {goalsPending.map((goal) =>
            <GoalCard goal={goal} percent={toPercent(goal.price, goal.moneySaved)} color={colors.primary} key={goal._id} />)}
        </>
      )}
      {goalsConquered && (
        <>
          <Text style={styles.type2}>conquistados</Text>
          {goalsConquered.map((goal) =>
            <GoalCard goal={goal} percent={toPercent(goal.price, goal.moneySaved)} color={colors.secondary} key={goal._id} />)}
        </>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 5,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  type1: {
    ...text.light14,
    ...margins.content,
    marginBottom: 5,
    color: colors.primary,
  },
  type2: {
    ...text.light14,
    ...margins.content,
    marginBottom: 5,
    color: colors.secondary,
  },
})

export default GoalsList