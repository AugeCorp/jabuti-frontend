import axios from "axios";

export const create = async () => {
  const response = await axios({
    method: "POST",
    url: "http://192.168.100.144:8040/income",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
    data: {
      _id: "5ef290e1a2b31761e85f23ff",
      value: 1000,
      description: "Aluguel",
      type: "mensal",
      receiptDate: new Date(),
    },
  });

  return response.data;
};

export const show = async () => {
  const response = await axios({
    method: "GET",
    url: "http://192.168.100.144:8040/incomes/5ef290e1a2b31761e85f23ff",
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
    url: "http://192.168.100.144:8040/income/5f02a33e0345ee61261214e4",
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
    url: "http://192.168.100.144:8040/income",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
    data: {
      incomeObject: {
        _id: "5f02a33e0345ee61261214e4",
        createdAt: "2020-07-06T04:06:22.069Z",
        description: "Aluguel",
        receiptDate: "2020-07-06T01:06:22.027Z",
        type: "mensal",
        updatedAt: "2020-07-06T04:06:22.069Z",
        value: 1000,
      },
    },
  });

  return response.data;
};

export const remove = async () => {
  const response = await axios({
    method: "DELETE",
    url: "http://192.168.100.144:8040/income/5f02a33e0345ee61261214e4",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};
