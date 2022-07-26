import $api from '@/http';
import { responseParser } from '@/utils';

export default {
  async getAllTodos() {
    const { data } = await $api.get('/todos.json');
    return responseParser(data);
  },
};
