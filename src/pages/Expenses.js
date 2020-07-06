import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'
import { margins } from '../helper/GlobalStyle'
import { expenses } from '../helper/DataTest'

const Expenses = () => {
  return (
    <>
      <ScrollView style={styles.view}>
        <ExpensesList expenses={expenses} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  view: margins.global
})

export default Expenses