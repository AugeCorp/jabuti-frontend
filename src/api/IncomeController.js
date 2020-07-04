/* eslint-disable prettier/prettier */
import getRealm from '../database/realm';

const getIncome = async () => {
  const realm = await getRealm();
  const response = realm.objects('Income');
  return response;
};

const createIncome = async (Income) => {
  const realm = await getRealm();
  realm.write(() =>{
    realm.create('Income', Income, true);
  });
  const Income = await getIncome();
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

export {getIncome, createIncome, updateIncome, deleteIncome};
