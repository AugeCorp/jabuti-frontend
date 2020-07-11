import { create, show, index, update, remove } from '../req/Income'

export default class {
    async create() {
        try {
            const response = await create();

            return response;
        } catch (err) {
            return err
        }
    }

    async show() {
        try {
            const response = await show();

            return response;
        } catch (err) {
            return err
        }
    }

    async index() {
        try {
            const response = await index();

            return response;
        } catch (err) {
            return err
        }
    }

    async update() {
        try {
            const response = await update();

            return response;
        } catch (err) {
            return err
        }
    }

    async remove() {
        try {
            const response = await remove();

            return response;
        } catch (err) {
            return err
        }
    }
}