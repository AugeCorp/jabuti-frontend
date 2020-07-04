/* eslint-disable prettier/prettier */
export default class GoalsSchema {
  static schema = {
    name: 'Goals',
    primaryKey: 'id',
    properties: {
      id: {type: 'int',  indexed: true},
      description: {type: 'string', default: ''},
      category: {type: 'string', default: ''},
      price: {type: 'int', default: 0},
      conquestDate: {type:'date'},
    },
  };
}
