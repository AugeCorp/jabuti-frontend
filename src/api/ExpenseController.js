/* eslint-disable prettier/prettier */
import getRealm from '../database/realm';

const getExpenses = async () => {
  const realm = await getRealm();
  const response = realm.objects('Expense');
  return response;
};

const getExpense = async (id) =>{
  const realm = await getRealm();
  let Expense = realm.objects('Expense').filtered(`id = ${id}`);
  return Expense;
};

const createExpense = async (expense, PaymentType) => {
  const realm = await getRealm();
  realm.write(() =>{
    const paymentMethod = realm.create('PaymentType', PaymentType, true);
    expense.PaymentMethod = paymentMethod;
    realm.create('Expense', expense, true);
  });
  const Expense = await getExpenses();
  return Expense;
};

const updateExpense = async (params, PaymentType) => {
  const realm = await getRealm();
  let Expense = realm.objects('Expense').filtered(`id = ${params.id}`);
  realm.write(() =>{
    const paymentType = realm.create('PaymentType', PaymentType, true);
    params.PaymentType = paymentType;
    Expense = realm.create('Expense',{id: Expense.id, ...params},'modified');
  });
  return Expense;
};

const deleteExpense = async(id) => {
  const realm = await getRealm();
  let Expense = realm.objects('Expense').filter((expense) => expense.id === id)[0];
  realm.write(() =>{
    realm.delete(Expense);
  });
  realm.close();
  return {success: true};
};

const getHigherAndLessExpense = async(year, month) => {
  const realm = await getRealm();
  let query;
  if (year && month){
    const dateSearch = new Date(year, month);
    const firstDay = new Date(dateSearch.getFullYear(), dateSearch.getMonth(), 1);
    const lastDay = new Date(dateSearch.getFullYear(), dateSearch.getMonth() + 1, 0);
    query = `payDate >= ${firstDay.toISOString()} AND paydate <= ${lastDay.toISOString()}`;
  } else {
    return {error: {message: 'Error in function parameters.'}};
  }
  const Expense = {
    highestExpense: realm.objects('Expense').filtered(query).max('price'),
    lessExpense: realm.objects('Expense').filtered(query).min('price'),
  };

  return Expense;
};

export {getExpenses, createExpense, updateExpense, deleteExpense, getExpense, getHigherAndLessExpense};
