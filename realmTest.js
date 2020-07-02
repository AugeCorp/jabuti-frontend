/* eslint-disable prettier/prettier */
import getRealm from './src/database/realm';
import React from 'react';
import {
  Text,
} from 'react-native';

async function _testeRealm(){
  const realm = await getRealm();
  const data = {
    id: 511,
    email: 'teste',
    token: 'teste',
    isActive: false,
  };
   realm.write(() => {
    //  realm.delete();
    // realm.deleteAll();
    realm.create('User', data);
    // console.log(teste);
    console.log(realm.objects('User'));
  });
}
_testeRealm();
const Teste = () => {
  return (
    <>
      <Text>te</Text>
    </>
  );
};

export default Teste;
