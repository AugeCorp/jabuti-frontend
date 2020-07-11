/* eslint-disable prettier/prettier */
import getRealm from '../database/realm';

const getIncomes = async () => {
  const realm = await getRealm();
  const response = realm.objects('Income');
  return response;
};

const getIncome = async (id) =>{
  const realm = await getRealm();
  let Expense = realm.objects('Incomes').filtered(`id = ${id}`);
  return Expense;
};

const createIncome = async (Income) => {
  const realm = await getRealm();
  realm.write(() =>{
    realm.create('Income', Income, true);
  });
  const Income = await getIncomes();
  return Income;
};

const updateIncome = async (params) => {
  const realm = await getRealm();
  let Income = realm.objects('Income').filtered(`id = ${params.id}`);
  realm.write(() =>{
    Income = realm.create('Income',{id: Income.id, ...params},'modified');
  });
  return Income;
};

const deleteIncome = async(id) => {
  const realm = await getRealm();
  let Income = realm.objects('Income').filtered(`id = ${id}`);
  realm.write(() =>{
    realm.delete(Income);
  });
  return {success: true};
};

const getHigherAndLessIncome = async(year, month) => {
  const realm = await getRealm();
  let query;
  if (year && month){
    const dateSearch = new Date(year, month);
    const firstDay = new Date(dateSearch.getFullYear(), dateSearch.getMonth(), 1);
    const lastDay = new Date(dateSearch.getFullYear(), dateSearch.getMonth() + 1, 0);
    query = `receiptDate >= ${firstDay.toISOString()} AND receiptDate <= ${lastDay.toISOString()}`;
  } else {
    return {error: {message: 'Error in function parameters.'}};
  }
  const Income = {
    highestIncome: realm.objects('Income').filtered(query).max('value'),
    lessIncome: realm.objects('Income').filtered(query).min('value'),
  };

  return Income;
};

export {getIncomes, createIncome, updateIncome, deleteIncome, getIncome, getHigherAndLessIncome};
