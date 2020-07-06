export const expenses = [
  {
    _id: 1,
    description: 'Uber',
    price: '7,00',
    category: 'Transporte',
    priority: 'Alta',
    payDate: '06/06/2020',
  }, {
    _id: 2,
    description: 'Churrasco',
    price: '100,00',
    category: 'Lazer',
    priority: 'Baixa',
    payDate: '06/06/2020',
  }, {
    _id: 3,
    description: 'Maçã',
    price: '7,00',
    category: 'Alimentação',
    priority: 'Alta',
    payDate: '06/06/2020',
  }, {
    _id: 4,
    description: 'Pizzaria',
    price: '67,80',
    category: 'Alimentação',
    priority: 'Baixa',
    payDate: '06/06/2020',
  }, {
    _id: 5,
    description: 'Vestido',
    price: '210,00',
    category: 'Vestimenta',
    priority: 'Baixa',
    payDate: '06/06/2020',
  }, {
    _id: 6,
    description: 'Uber',
    price: '6,50',
    category: 'Transporte',
    priority: 'Média',
    payDate: '20/05/2020',
  }, {
    _id: 7,
    description: 'Cinema',
    price: '22,00',
    category: 'Lazer',
    priority: 'Baixa',
    payDate: '20/05/2020',
  }, {
    _id: 8,
    description: 'Consulta Psico',
    price: '150,00',
    category: 'Saúde',
    priority: 'Alta',
    payDate: '15/05/2020',
  }, {
    _id: 9,
    description: 'Hamburgueria',
    price: '107,40',
    category: 'Alimentação',
    priority: 'Baixa',
    payDate: '15/05/2020',
  }, {
    _id: 10,
    description: 'Curso Udemy Python',
    price: '70,00',
    category: 'Estudo',
    priority: 'Alta',
    payDate: '15/05/2020',
  }, {
    _id: 11,
    description: 'Mensalidade Facul',
    price: '700,00',
    category: 'Estudo',
    priority: 'Alta',
    payDate: '11/04/2020',
  }, {
    _id: 12,
    description: 'Novo Jordan',
    price: '60,41',
    category: 'Vestimenta',
    priority: 'Baixa',
    payDate: '11/04/2020',
  }, {
    _id: 13,
    description: 'Conta de Luz',
    price: '82,67',
    category: 'Casa',
    priority: 'Alta',
    payDate: '11/04/2020',
  }, {
    _id: 14,
    description: 'Conta de Água',
    price: '70,00',
    category: 'Casa',
    priority: 'Alta',
    payDate: '11/04/2020',
  }, {
    _id: 15,
    description: 'Internet',
    price: '70,00',
    category: 'Casa',
    priority: 'Alta',
    payDate: '11/04/2020',
  }
]

export const user = {
  _id: 1,
  email: 'lucas.dev@gmail.com',
  password: '123',
  googleAccount: false,
  name: 'Lucas Zacarias',
  isActive: true,
  accesses: {
    lastAccess: new Date(),
  },
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