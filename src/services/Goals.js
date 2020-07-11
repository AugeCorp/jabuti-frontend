import axios from "axios";

export const create = async (props) => {
  const response = await axios({
    method: "POST",
    url: "http://192.168.100.144:8040/goal",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTAzODc5MmNiZDcwNGQzOTllY2YwYyIsImlhdCI6MTU5NDUwMDM3OCwiZXhwIjoxNTk0NTg2Nzc4fQ.zC-PPPd3RlUOmF-t0tkVWBOZx79-dSmz1UtijCGT_9c",
    },
    data: {
      _id: props._id,
      price: props.price,
      description: props.description,
      category: props.category,
      conquestDate: new Date(props.conquestDate),
    },
  });

  return response.data;
};

export const show = async (props) => {
  const response = await axios({
    method: "GET",
    url: `http://192.168.100.144:8040/goals/${props._id}`,
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};

export const index = async (props) => {
  const response = await axios({
    method: "GET",
    url: `http://192.168.100.144:8040/goal/${props.goals_id}`,
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};

export const update = async (props) => {
  const response = await axios({
    method: "PUT",
    url: "http://192.168.100.144:8040/goal",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
    data: { goalObject: props.goalObject, updatedAt: new Date() },
  });

  return response.data;
};

export const remove = async (props) => {
  const response = await axios({
    method: "DELETE",
    url: `http://192.168.100.144:8040/goal/${props._id}`,
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZjI5MGUxYTJiMzE3NjFlODVmMjNmZiIsImlhdCI6MTU5NDAwNzIwOCwiZXhwIjoxNTk0MDkzNjA4fQ.Dj5uMsnY3gb2_w12tUVhhQOmIFDVn-qfmxMB3W2dGw0",
    },
  });

  return response.data;
};
