/* eslint-disable prettier/prettier */
import React, { useState, useEffect, Fragment } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Text } from '@ui-kitten/components';
import ExpenseCard from './ExpenseCard';
import { text } from '../../helper/GlobalStyle';
import { dateToString } from '../../helper/DataHelper';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../../api/ExpenseController';
import AddExpenseModal from './AddExpensesModal';

const ExpensesList = ({ modalOpen, setModalOpen }) => {
  const [expenses, setExpenses] = useState([]);
  const [rows, setRows] = useState([]);
  const [isEditExpense, setIsEditExpense] = useState(false);

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
  
  const handleOpenEditExpense = async (expense) => {
    setModalOpen(true);
    setIsEditExpense(expense);
  }

  const handleAddExpense = async (expense, paymentType) => {
    await createExpense(expense, paymentType);
    setModalOpen(false);
    handleGetExpense();
  }

  const handleEditExpense = async (expense, paymentType) => {
    await updateExpense(expense, paymentType);
    setModalOpen(false);
    handleGetExpense();
  }

  const deleteRow = async (id) => {
    await deleteExpense(id);
    handleGetExpense();
  }

  return (
    <View>
      <AddExpenseModal open={modalOpen} handleAddExpense={handleAddExpense} handleEditExpense={handleEditExpense} isEditExpense={isEditExpense} />
      <Input placeholder="Pesquisar por nome, data, valor..." onChangeText={value => handleTextInput(value)} />
      <ScrollView>
        {rows.map((row, idx) => (
          <Fragment key={row.id}>
            {(idx === 0 || dateToString(row.payDate) !== dateToString(rows[idx - 1].payDate)) && (
              <Text style={styles.date}>{dateToString(row.payDate)}</Text>
            )}
            <ExpenseCard row={row} deleteRow={deleteRow} handleEditExpense={handleOpenEditExpense} />
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
