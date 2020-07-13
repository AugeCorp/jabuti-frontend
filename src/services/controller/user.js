import { create, login } from "../req/User";

export default class User {
  create = (params) => {
      try {
        const { email, password } = params;

        const response = await create(email, password);
      } catch (err) {
          throw new Error(err)
      }
  };
}
