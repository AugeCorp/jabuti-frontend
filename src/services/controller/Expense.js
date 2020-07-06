import { create, show, index, update, remove } from "../req/Expense";

export default class Expense {
  create = async () => {
    try {
      const response = await create();

      return response;
    } catch (err) {
      return err;
    }
  };

  show = async () => {
    try {
      const response = await show();

      return response;
    } catch (err) {
      return err;
    }
  };

  index = async () => {
    try {
      const response = await index();

      return response;
    } catch (err) {
      return err;
    }
  };

  update = async () => {
    try {
      const response = await update();

      return response;
    } catch (err) {
      return err;
    }
  };

  remove = async () => {
    try {
      const response = await remove();

      return response;
    } catch (err) {
      return err;
    }
  };
}
