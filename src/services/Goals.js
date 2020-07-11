import axios from "axios";

export const create = async () => {
  const response = await axios({
    method: "POST",
    url: "http://192.168.100.144:8040/goal",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
    data: {
      _id: "5ef290e1a2b31761e85f23ff",
      price: 200,
      description: "Teclado Mecânico",
      category: "lazer",
      conquestDate: new Date(),
    },
  });

  return response.data;
};

export const show = async () => {
  const response = await axios({
    method: "GET",
    url: "http://192.168.100.144:8040/goals/5ef290e1a2b31761e85f23ff",
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
    url: "http://192.168.100.144:8040/goal/5f02aa445608597932f9c09b",
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
    url: "http://192.168.100.144:8040/goal",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
    data: {
      goalObject: {
        _id: "5f02aa445608597932f9c09b",
        category: "lazer",
        conquestDate: "2020-07-06T04:36:19.866Z",
        createdAt: "2020-07-06T04:36:20.068Z",
        description: "Teclado Mecânico",
        price: 275,
        updatedAt: new Date(),
      },
    },
  });

  return response.data;
};

export const remove = async () => {
  const response = await axios({
    method: "DELETE",
    url: "http://192.168.100.144:8040/goal/5f02aa445608597932f9c09b",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};
