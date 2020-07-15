/* eslint-disable prettier/prettier */
import React, { useState, useEffect, Fragment } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Text } from '@ui-kitten/components';
import ExpenseCard from './ExpenseCard';
import { text } from '../../helper/GlobalStyle';
import { dateToString } from '../../helper/DataHelper';
import {getExpenses} from '../../api/ExpenseController';

const ExpensesList = () => {
  const [expenses, setExpenses] = useState([]);
  const [rows, setRows] = useState([]);

  async function handleGetExpense(){
    const response = await getExpenses();
    setExpenses(response);
    setRows(response);
  }
  useEffect(() => {
    handleGetExpense();
  }, []);

  const handleTextInput = (value) => {
    if (value === ''){
      handleGetExpense();
    } else {
      const arr = expenses.filter(expense => expense.description.includes(value) || String(expense.price).includes(value));
      setRows(arr);
    }
  };

  return (
    <View>
      <Input placeholder="Pesquisar por nome, data, valor..." onChangeText={value => handleTextInput(value)} />
      <ScrollView>
        {rows.map((row, idx) => (
          <Fragment key={row.id}>
            {(idx === 0 || dateToString(row.payDate) !== dateToString(rows[idx - 1].payDate)) && (
              <Text style={styles.date}>{dateToString(row.payDate)}</Text>
            )}
            <ExpenseCard row={row} />
          </Fragment>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    marginLeft: 15,
    marginBottom: 5,
    ...text.medium14,
  },
});

export default ExpensesList;
