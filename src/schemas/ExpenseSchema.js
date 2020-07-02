/* eslint-disable prettier/prettier */
export default class ExpenseSchema {
  static schema = {
    name: 'Expense',
    primaryKey: 'id',
    properties: {
      id: {type: 'int',  indexed: true},
      description: {type: 'string', default: ''},
      priority: {type: 'string', default: ''},
      type: {type: 'bool', default: true},
      validity: {type: 'date'},
      payDate: {type: 'date'},
      paymentType: {type:'PaymentType'},
    },
  };
}
