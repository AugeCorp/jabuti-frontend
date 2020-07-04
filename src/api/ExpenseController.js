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

const createExpense = async (Expense, PaymentType) => {
  const realm = await getRealm();
  realm.write(() =>{
    const paymentMethod = realm.create('PaymentType', PaymentType, true);
    Expense.PaymentMethod = paymentMethod;
    realm.create('Expense', Expense, true);
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
  let Expense = realm.objects('Expense').filtered(`id = ${id}`);
  realm.write(() =>{
    realm.delete(Expense);
  });
  return {success: true};
};

export {getExpenses, createExpense, updateExpense, deleteExpense, getExpense};
