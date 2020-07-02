/* eslint-disable prettier/prettier */
import Realm from 'realm';

import UserSchema from '../schemas/UserSchema';
import GoalsSchema from '../schemas/GoalsSchema';
import IncomeSchema from '../schemas/IncomeSchema';
import ExpenseSchema from '../schemas/ExpenseSchema';
import PaymentTypeSchema from '../schemas/PaymentTypeSchema';



export default function getRealm() {
   return Realm.open({
    schema: [UserSchema.schema, GoalsSchema.schema, IncomeSchema.schema, PaymentTypeSchema.schema, ExpenseSchema.schema],
    schemaVersion: 5,
    migration: (oldRealm, newRealm) => {
      // only apply this change if upgrading to schemaVersion 1
      if (oldRealm.schemaVersion < 5) {
        let oldObjects = oldRealm.objects('User');
        let newObjects = newRealm.objects('User');

        // loop through all objects and set the name property in the new schema
        for (let i = 0; i < oldObjects.length; i++) {
          newObjects[i].name = oldObjects[i].firstName + ' ' + oldObjects[i].lastName;
        }
      }
    },
  });
}
