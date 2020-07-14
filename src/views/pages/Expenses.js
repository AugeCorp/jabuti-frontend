import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ExpensesList from '../components/ExpensesList'
import AddExpenseModal from '../components/AddExpensesModal'
import { margins } from '../../helper/GlobalStyle'
import Expense from '../../controllers/Expense';
import AddButton from '../components/AddButton'
const expense = new Expense();

const Expenses = () => {
  const handleExpenseRequisitions = {
    create: async (params) => {
      try {
        const response = await expense.create(params);

      } catch (err) {
        console.log(err);
      }
    },
    show: async () => {
      try {
        const response = await expense.show({ _id: "5ee038792cbd704d399ecf0c" });

        return response;
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <ScrollView style={styles.view}>
        <ExpensesList requisitions={handleExpenseRequisitions} />
      </ScrollView>
      <AddButton screenName="AddExpenses" requisitions={handleExpenseRequisitions} />
    </>
  );
}

const styles = StyleSheet.create({
  view: margins.global,
})

export default Expenses