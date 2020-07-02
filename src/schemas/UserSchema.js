/* eslint-disable prettier/prettier */
export default class UserSchema {
  static schema = {
    name: 'User',
    primaryKey: 'id',
    properties: {
      id: {type: 'int',  indexed: true},
      email: {type: 'string', default: ''},
      token: {type: 'string', default: ''},
      isActive: {type: 'bool', default: true},
      Goals: {type: 'Goals[]'},
      income: {type: 'list', objectType: 'Income'},
      expense: {type: 'list', objectType: 'Expense'},
    },
  };
}
