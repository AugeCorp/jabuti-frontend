import { create, show, index, update, remove } from "../services/Goals";

export default class Goals {
  create = async (props) => {
    const { _id, price, description, category, conquestDate } = props;
    try {
      const response = await create(
        _id,
        price,
        description,
        category,
        conquestDate
      );

      return response;
    } catch (err) {
      return err;
    }
  };

  show = async (props) => {
    const { _id } = props;
    try {
      const response = await show(_id);

      return response;
    } catch (err) {
      return err;
    }
  };

  index = async (props) => {
    const { goals_id } = props;
    try {
      const response = await index(goals_id);

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

  remove = async (props) => {
    const { _id } = props;
    try {
      const response = await remove(_id);

      return response;
    } catch (err) {
      return err;
    }
  };
}
