/* eslint-disable prettier/prettier */
export default class PaymentTypeSchema {
  static schema = {
    name: 'PaymentType',
    properties: {
      cash: {type: 'bool', default: false},
      credit: {type: 'bool', default: false},
      parceledOut: {type: 'bool', default: false},
      installment: {type: 'int', default: 1},
    },
  };
}
