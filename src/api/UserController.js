/* eslint-disable prettier/prettier */

import getRealm from '../database/realm';

const createUser = async (user) => {
  let User = await getUser();
  const realm = await getRealm();
  realm.write(() =>{
    realm.create('User',user);
  });
  User = await getUser();
  return User;
};

const getUser = async () => {
  const realm = await getRealm();
  const response = realm.objects('User');
  return response[0];
};

const updateUser = async (params) => {
  let User = await getUser();
  const realm = await getRealm();
  realm.write(() =>{
    realm.create('User',{id: User.id, ...params},'modified');
  });
  User = await getUser();
  return User;
};

export {getUser, updateUser, createUser};
