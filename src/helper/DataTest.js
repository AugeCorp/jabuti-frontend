export const expenses = [
  {
    _id: 1,
    description: 'Uber',
    price: 700,
    category: 'Transporte',
    priority: 'Alta',
    payDate: '06/06/2020',
  }, {
    _id: 2,
    description: 'Churrasco',
    price: 10000,
    category: 'Lazer',
    priority: 'Baixa',
    payDate: '06/06/2020',
  }, {
    _id: 3,
    description: 'Maçã',
    price: 700,
    category: 'Alimentação',
    priority: 'Alta',
    payDate: '06/06/2020',
  }, {
    _id: 4,
    description: 'Pizzaria',
    price: 6780,
    category: 'Alimentação',
    priority: 'Baixa',
    payDate: '06/06/2020',
  }, {
    _id: 5,
    description: 'Vestido',
    price: 21000,
    category: 'Vestimenta',
    priority: 'Baixa',
    payDate: '06/06/2020',
  }, {
    _id: 6,
    description: 'Uber',
    price: 650,
    category: 'Transporte',
    priority: 'Média',
    payDate: '20/05/2020',
  }, {
    _id: 7,
    description: 'Cinema',
    price: 2200,
    category: 'Lazer',
    priority: 'Baixa',
    payDate: '20/05/2020',
  }, {
    _id: 8,
    description: 'Consulta Psico',
    price: 15000,
    category: 'Saúde',
    priority: 'Alta',
    payDate: '15/05/2020',
  }, {
    _id: 9,
    description: 'Hamburgueria',
    price: 10740,
    category: 'Alimentação',
    priority: 'Baixa',
    payDate: '15/05/2020',
  }, {
    _id: 10,
    description: 'Curso Udemy Python',
    price: 7000,
    category: 'Estudo',
    priority: 'Alta',
    payDate: '15/05/2020',
  }, {
    _id: 11,
    description: 'Mensalidade Facul',
    price: 70000,
    category: 'Estudo',
    priority: 'Alta',
    payDate: '11/04/2020',
  }, {
    _id: 12,
    description: 'Novo Jordan',
    price: 6041,
    category: 'Vestimenta',
    priority: 'Baixa',
    payDate: '11/04/2020',
  }, {
    _id: 13,
    description: 'Conta de Luz',
    price: 8267,
    category: 'Casa',
    priority: 'Alta',
    payDate: '11/04/2020',
  }, {
    _id: 14,
    description: 'Conta de Água',
    price: 7000,
    category: 'Casa',
    priority: 'Alta',
    payDate: '11/04/2020',
  }, {
    _id: 15,
    description: 'Internet',
    price: 7000,
    category: 'Casa',
    priority: 'Alta',
    payDate: '11/04/2020',
  }
]

export const incomes = [
  {
    _id: 1,
    description: 'Bolsa Família',
    value: 10000,
    type: 'fixed',
    receiptDate: new Date(),
  }, {
    _id: 2,
    description: 'Trabalho',
    value: 150000,
    type: 'fixed',
    receiptDate: new Date(),
  }, {
    _id: 3,
    description: 'Freela Design',
    value: 20025,
    type: 'variable',
    receiptDate: new Date(2020, 0, 1),
  }, {
    _id: 4,
    description: 'Auxílio Emergencial',
    value: 60000,
    type: 'variable',
    receiptDate: new Date(2020, 7, 10),
  }
]

export const goals = [
  {
    _id: 1,
    description: 'Viajar para Paris',
    price: 1500000,
    moneySaved: 160000,
    category: 'Lazer',
    conquered: false,
    conquestDate: new Date(2022, 7, 12),
    createdAt: new Date(2020, 6, 14),
    updatedAt: new Date(2020, 6, 14),
  }, {
    _id: 2,
    description: 'PC novo',
    price: 500000,
    moneySaved: 54000,
    category: 'Lazer',
    conquered: false,
    conquestDate: new Date(2021, 7, 9),
    createdAt: new Date(2020, 3, 10),
    updatedAt: new Date(2020, 3, 10),
  }, {
    _id: 3,
    description: 'Carro novo',
    price: 3000000,
    moneySaved: 200000,
    category: 'Outros',
    conquered: false,
    conquestDate: new Date(2024, 0, 1),
    createdAt: new Date(2020, 8, 8),
    updatedAt: new Date(2020, 8, 8),
  }, {
    _id: 4,
    description: 'Headset novo',
    price: 20000,
    moneySaved: 20000,
    category: 'Lazer',
    conquered: true,
    conquestDate: new Date(2019, 8, 1),
    createdAt: new Date(2020, 1, 1),
    updatedAt: new Date(2020, 1, 1),
  }, {
    _id: 5,
    description: 'Liquidificador',
    price: 20000,
    moneySaved: 20000,
    category: 'Lazer',
    conquered: true,
    conquestDate: new Date(2019, 5, 20),
    createdAt: new Date(2020, 3, 11),
    updatedAt: new Date(2020, 3, 11),
  }
]

export const user = {
  _id: 1,
  email: 'lucas.dev@gmail.com',
  password: '123',
  googleAccount: false,
  name: 'Lucas Zacarias',
  isActive: true,
  lastAccess: new Date(),
  token: 'abcdefghij123456',
  createdAt: new Date(),
  updatedAt: new Date(), 
  economy: {
    income: [
      {
        _id: 1,
        value: 2500,
        description: 'CLT',
        type: 'fixed',
        receiptDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 2,
        value: 300,
        description: 'Freela Design',
        type: 'variable',
        receiptDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 3,
        value: 600,
        description: 'Auxilio Emergencial',
        type: 'variable',
        receiptDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    expense: [
      {
        _id: 1,
        paymentType: {
          cash: false,
          credit: true,
          parceledOut: false,
          installments: null,
        },
        priority: 'low',
        description: 'Balinha 7Belo',
        price: 10,
        category: 'Alimentação',
        payDate: new Date(),
        validity: new Date(),
        type: 'variable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 2,
        paymentType: {
          cash: false,
          credit: true,
          parceledOut: false,
          installments: 5,
        },
        priority: 'high',
        description: 'Fogão Arno',
        price: 2300,
        category: 'Casa',
        payDate: new Date(),
        validity: new Date(),
        type: 'variable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        _id: 3,
        paymentType: {
          cash: true,
          credit: false,
          parceledOut: false,
          installments: null,
        },
        priority: 'medium',
        description: 'Uber',
        price: 34,
        category: 'Transporte',
        payDate: new Date(),
        validity: new Date(),
        type: 'variable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
  goal: [
    {
      _id: 1,
      description: 'Viajar para Paris até dezembro/2020',
      price: 10000,
      category: 'Lazer',
      conquestDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  ]
}