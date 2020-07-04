/* eslint-disable prettier/prettier */
import getRealm from '../database/realm';

const getGoals = async () => {
  const realm = await getRealm();
  const response = realm.objects('Goals');
  return response;
};

const createGoals = async (Goal) => {
  const realm = await getRealm();
  realm.write(() =>{
    realm.create('Goals', Goal, true);
  });
  const Goals = await getGoals();
  return Goals;
};

const updateGoal = async (params) => {
  const realm = await getRealm();
  let Goal = realm.objects('Goals').filtered(`id = ${params.id}`);
  realm.write(() =>{
    Goal = realm.create('Goals',{id: Goal.id, ...params},'modified');
  });
  return Goal;
};

const getGoal = async (id) =>{
  const realm = await getRealm();
  let Goal = realm.objects('Goals').filtered(`id = ${id}`);
  return Goal;
};

const deleteGoal = async(id) => {
  const realm = await getRealm();
  let Goal = realm.objects('Goals').filtered(`id = ${id}`);
  realm.write(() =>{
    realm.delete(Goal);
  });
  return {success: true};
};

export {getGoals, createGoals, updateGoal, deleteGoal, getGoal};
