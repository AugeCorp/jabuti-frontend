/* eslint-disable prettier/prettier */
export default class IncomeSchema {
  static schema = {
    name: 'Income',
    primaryKey: 'id',
    properties: {
      id: {type: 'int',  indexed: true},
      description: {type: 'string', default: ''},
      type: {type: 'string', default: ''},
      value: {type: 'int', default: 0},
      receiptDate: {type: 'date'},
    },
  };
}
