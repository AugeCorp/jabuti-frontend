/* eslint-disable prettier/prettier */
import axios from 'axios';
import secrets from '../config/secrets.json';
const url = secrets.backend.dev;
const token = secrets.token;

export const create = async (params) => {
  const { email, password } = params;
  const data = {
    email,
    password,
  };
  const response = await axios({
    method: 'POST',
    url: `${url}/user`,
    headers: {},
    data,
  });

  return response;
};

export const login = async (params) => {
  const { email, password } = params;
  const data = {
    email,
    password,
  };
  const response = await axios({
    method: 'POST',
    url: `${url}/login`,
    headers: {},
    data,
  });

  return response;
};
