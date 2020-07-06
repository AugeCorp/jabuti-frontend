import axios from "axios";

export const create = async () => {
  const response = await axios({
    method: "POST",
    url: "http://192.168.100.144:8040/expense",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
    data: {
      _id: "5ee038792cbd704d399ecf0c",
      paymentType: {
        credit: true,
        parceledOut: true,
        installments: 3,
      },
      priority: "medium",
      description: "Teclado Mecânico",
      price: 275,
      category: "work",
      validity: new Date("2020/09/20"),
      type: "lazer",
      payDate: new Date(),
    },
  });

  return response.data;
};

export const show = async () => {
  const response = await axios({
    method: "GET",
    url: "http://192.168.100.144:8040/expenses/5ee038792cbd704d399ecf0c",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};

export const index = async () => {
  const response = await axios({
    method: "GET",
    url: "http://192.168.100.144:8040/expense/5f02aa445608597932f9c09b",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};

export const update = async () => {
  const response = await axios({
    method: "PUT",
    url: "http://192.168.100.144:8040/expense",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
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

export const remove = async () => {
  const response = await axios({
    method: "DELETE",
    url: "http://192.168.100.144:8040/expense/5f02b0368b1fbc06178c9589",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};
