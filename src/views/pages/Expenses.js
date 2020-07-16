/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import ExpensesList from '../components/ExpensesList';
import { margins } from '../../helper/GlobalStyle';
import AddButton from '../components/AddButton';

const Expenses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  return (
    <>
      <ScrollView style={styles.view}>
        <ExpensesList modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <View style={styles.margin} />
      </ScrollView>
      {!modalOpen && <AddButton action={() => setModalOpen(true)} />}
    </>
  );
};

const styles = StyleSheet.create({
  view: margins.global,
  margin: {
    marginBottom: 100,
  },
});

export default Expenses;
