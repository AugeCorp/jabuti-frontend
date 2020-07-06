import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Text } from '@ui-kitten/components'
import { colors, text, margins } from '../helper/GlobalStyle'
import { priorityLevelStyle } from '../helper/ExpensesHelper'

const ExpenseCard = ({row}) => {
  const [showingDetails, setShowingDetails] = useState(false)

  const renderIcon = (expenseCategory) => {
    if (expenseCategory === 'Lazer') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-recreation-outline.png')} />
    }
    if (expenseCategory === 'Casa') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-home-outline.png')} />
    }
    if (expenseCategory === 'Estudo') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-book-outline.png')} />
    }
    if (expenseCategory === 'Alimentação') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-burger-outline.png')} />
    }
    if (expenseCategory === 'Saúde') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-heart-outline.png')} />
    }
    if (expenseCategory === 'Vestimenta') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-shirt-outline.png')} />
    }
    if (expenseCategory === 'Transporte') {
      return <Image style={styles.icon} source={require('../static/images/icons/icon-car-outline.png')} />
    }

    return <Image style={styles.icon} source={require('../static/images/icons/icon-recreation-outline.png')} />
  }
  
  return (
    <View>
      <>
        <TouchableOpacity onPress={() => setShowingDetails(!showingDetails)}>
          <View style={styles.listCard}>
            <View>
              <View style={styles.text}>
                {renderIcon(row.category)}
                <Text style={styles.description}>{row.description}</Text>
                <View style={styles.price}>
                  <Text style={styles.symbol}>R$ </Text>
                  <Text style={styles.number}>{row.price}</Text>
                </View>
              </View>
            </View>

            {showingDetails && (
              <View style={styles.others}>
                <Text style={styles.category}>{row.category}</Text>
                <View style={styles.price}>
                  <Text style={styles.priorityLabel}>Prioridade </Text>
                  <Text style={{color: `${priorityLevelStyle(row.priority)}`, ...text.medium14}}>{row.priority.toLowerCase()}</Text>
                </View>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  listCard: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    ...margins.content
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  description: text.light18,
  price: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    right: 0,
  },
  symbol: text.light14,
  number: text.light18,
  others: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10,
  },
  category: {
    ...text.medium14,
    color: colors.primary,
  },
  priorityLabel: text.light14,
})

export default ExpenseCard