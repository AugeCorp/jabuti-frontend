/* eslint-disable prettier/prettier */
export default class GoalsSchema {
  static schema = {
    name: 'Goals',
    primaryKey: 'id',
    properties: {
      id: {type: 'int',  indexed: true},
      description: {type: 'string', default: ''},
      category: {type: 'string', default: ''},
      price: {type: 'bool', default: true},
      // Accesses: {
      //   lastAccess: {type: 'date'},
      //   allAccesses: {type: 'date'},
      // },
      conquestDate: {type:'date'},
      // Economy: {
      //   income: {type:'list', objectType: 'Income'},
      //   expense: {type:'list', objectType: 'Expense'},
      // },
    },
  };
}
