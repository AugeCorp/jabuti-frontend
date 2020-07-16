/* eslint-disable comma-dangle */
import { create, login } from '../services/User';
import { createUser, updateUser } from '../api/UserController';

export default class {
  create = async (params) => {
    const { email, password } = params;
    try {
      const { email: emailRes, token, isActive } = (
        await create({
          email,
          password
        })
      ).data.newUser;

      const user = { id: 1, email: emailRes, token, isActive };

      await createUser(user);

      return true;
    } catch (err) {
      console.log(err);
    }
  };

  login = async (params) => {
    const { email, password } = params;
    try {
      const { token, isActive } = (
        await login({
          email,
          password
        })
      ).data;

      const update = { token, isActive };

      await updateUser(update);

      return true;
    } catch (err) {
      console.log(err);
    }
  };
}
