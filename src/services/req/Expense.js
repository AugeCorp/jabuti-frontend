import secrets from '../../config/secrets.json';
const url = secrets.backend.dev;
const token = secrets.token;

import axios from "axios";

export const create = async (params) => {
  const data = {
    _id: params._id,
    paymentType: params.paymentType,
    priority: params.priority,
    description: params.description,
    price: params.price,
    category: params.category,
    validity: new Date(params.validity),
    type: params.type,
    payDate: new Date(params.payDate),
  };
  const response = await axios({
    method: "POST",
    url: `${url}/expense`,
    headers: {
      authorization:
        `Bearer ${token}`
    },
    data
  });

  return response.data;
};

export const show = async (props) => {
  const response = await axios({
    method: "GET",
    url: `${url}/expenses/${props._id}`,
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};

export const index = async (params) => {
  const response = await axios({
    method: "GET",
    url: `${url}/expense/${params.expense_id}`,
    headers: {
      authorization:
        `Bearer ${token}`,
    },
  });

  return response.data;
};

export const update = async () => {
  const response = await axios({
    method: "PUT",
    url: `${url}/expense`,
    headers: {
      authorization:
        `Bearer ${token}`,
    },
    data: {
      expenseObject: {
        _id: "5f02b0368b1fbc06178c9589",
        category: "work",
        description: "Teclado Mecânico",
        payDate: "2020-07-06T05:01:42.064Z",
        paymentType: {
          credit: true,
          installments: 2,
          parceledOut: true,
        },
        price: 275,
        priority: "medium",
        type: "lazer",
        validity: "2020-09-20T03:00:00.000Z",
      },
    },
  });

  return response.data;
};

export const remove = async (props) => {
  const response = await axios({
    method: "DELETE",
    url: `${url}/expense/${props.expense_id}`,
    headers: {
      authorization:
        `Bearer ${token}`,
    },
  });

  return response.data;
};
