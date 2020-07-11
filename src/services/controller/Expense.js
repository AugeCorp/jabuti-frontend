import { create, show, index, update, remove } from "../req/Expense";

export default class Expense {
  create = async (params) => {
    const {
      _id,
      paymentType,
      priority,
      description,
      price,
      category,
      validity,
      type,
      payDate,
    } = params;
    try {
      const response = await create({
        _id,
        paymentType,
        priority,
        description,
        price,
        category,
        validity,
        type,
        payDate
      });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  show = async (props) => {
    const { _id } = props;
    try {
      const response = await show({ _id });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  index = async (params) => {
    const { expense_id } = params;
    try {
      const response = await index({ expense_id });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  update = async (props) => {
    const {
      _id,
      category,
      description,
      payDate,
      paymentType,
      price,
      priority,
      type,
      validity,
    } = props;

    try {
      const response = await update({
        _id,
        category,
        description,
        payDate,
        paymentType,
        price,
        priority,
        type,
        validity
      });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };

  remove = async (props) => {
    const { expense_id } = props;
    try {
      const response = await remove({ expense_id });

      return response;
    } catch (err) {
      throw new Error(err);
    }
  };
}
