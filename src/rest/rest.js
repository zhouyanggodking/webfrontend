import axios from 'axios';

export default class Rest {
  static getKnowledgeData() {
    return axios.get('/mock/data.json').then(res => res.data);
  }
}
