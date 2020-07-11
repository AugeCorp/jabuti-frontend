import axios from "axios";

export const create = async () => {
  const response = await axios({
    method: "POST",
    url: "http://192.168.100.144:8040/user",
    headers: {},
    data: {
      email: "teste@teste.com",
      password: "123456789",
      name: "Fulano de Teste",
      income: 200000,
    },
  });

  return 'fodasse';
};
